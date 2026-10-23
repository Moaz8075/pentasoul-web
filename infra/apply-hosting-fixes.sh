#!/usr/bin/env bash
# One-time fixes for the live www.pentasoul.com hosting (CloudFront EMGQWX8OFHOWM).
# Safe to re-run. Changes:
#   1. Publishes infra/cloudfront-function.js (directory index, trailing-slash
#      and pentasoul.com -> www redirects, /work -> /products/) and attaches it.
#   2. Adds pentasoul.com (bare domain) to the distribution. The existing
#      certificate already covers it.
#   3. Serves the site's own 404 page for missing URLs.
#   4. Points pentasoul.com (A + AAAA) and www (AAAA) at the distribution.
set -euo pipefail
cd "$(dirname "$0")/.."

DIST=EMGQWX8OFHOWM
ZONE=Z01807132Q6Y7JAY6DF6O
FN=pentasoul-web-rewrite
TMP="$(mktemp -d)"

# 1. Function: create or update, then publish.
if aws cloudfront describe-function --name "$FN" >/dev/null 2>&1; then
  ETAG=$(aws cloudfront describe-function --name "$FN" --stage DEVELOPMENT --query ETag --output text)
  aws cloudfront update-function --name "$FN" --if-match "$ETAG" \
    --function-config Comment="pentasoul.com redirects + directory index",Runtime=cloudfront-js-2.0 \
    --function-code fileb://infra/cloudfront-function.js >/dev/null
else
  aws cloudfront create-function --name "$FN" \
    --function-config Comment="pentasoul.com redirects + directory index",Runtime=cloudfront-js-2.0 \
    --function-code fileb://infra/cloudfront-function.js >/dev/null
fi
ETAG=$(aws cloudfront describe-function --name "$FN" --stage DEVELOPMENT --query ETag --output text)
aws cloudfront publish-function --name "$FN" --if-match "$ETAG" >/dev/null
FARN=$(aws cloudfront describe-function --name "$FN" --stage LIVE --query "FunctionSummary.FunctionMetadata.FunctionARN" --output text)

# 2 + 3. Distribution: aliases, function, error pages.
aws cloudfront get-distribution-config --id "$DIST" > "$TMP/dist.json"
python3 - "$TMP" "$FARN" <<'EOF'
import json, sys
tmp, farn = sys.argv[1], sys.argv[2]
d = json.load(open(f"{tmp}/dist.json"))
c = d["DistributionConfig"]
c["Aliases"] = {"Quantity": 2, "Items": ["www.pentasoul.com", "pentasoul.com"]}
c["DefaultCacheBehavior"]["FunctionAssociations"] = {"Quantity": 1, "Items": [{"FunctionARN": farn, "EventType": "viewer-request"}]}
c["CustomErrorResponses"] = {"Quantity": 2, "Items": [
    {"ErrorCode": 403, "ResponsePagePath": "/404.html", "ResponseCode": "404", "ErrorCachingMinTTL": 60},
    {"ErrorCode": 404, "ResponsePagePath": "/404.html", "ResponseCode": "404", "ErrorCachingMinTTL": 60},
]}
json.dump(c, open(f"{tmp}/config.json", "w"))
open(f"{tmp}/etag", "w").write(d["ETag"])
EOF
aws cloudfront update-distribution --id "$DIST" --if-match "$(cat "$TMP/etag")" \
  --distribution-config "file://$TMP/config.json" --query Distribution.Status --output text

# 4. DNS.
CF_DOMAIN=$(aws cloudfront get-distribution --id "$DIST" --query Distribution.DomainName --output text)
cat > "$TMP/dns.json" <<EOF
{"Changes": [
  {"Action": "UPSERT", "ResourceRecordSet": {"Name": "pentasoul.com.", "Type": "A",
    "AliasTarget": {"HostedZoneId": "Z2FDTNDATAQYW2", "DNSName": "$CF_DOMAIN", "EvaluateTargetHealth": false}}},
  {"Action": "UPSERT", "ResourceRecordSet": {"Name": "pentasoul.com.", "Type": "AAAA",
    "AliasTarget": {"HostedZoneId": "Z2FDTNDATAQYW2", "DNSName": "$CF_DOMAIN", "EvaluateTargetHealth": false}}},
  {"Action": "UPSERT", "ResourceRecordSet": {"Name": "www.pentasoul.com.", "Type": "AAAA",
    "AliasTarget": {"HostedZoneId": "Z2FDTNDATAQYW2", "DNSName": "$CF_DOMAIN", "EvaluateTargetHealth": false}}}
]}
EOF
aws route53 change-resource-record-sets --hosted-zone-id "$ZONE" --change-batch "file://$TMP/dns.json" --query ChangeInfo.Status --output text

echo "Done. CloudFront takes ~5 minutes to roll out; then run scripts/deploy.sh to upload the new build."
