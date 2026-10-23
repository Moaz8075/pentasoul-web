#!/usr/bin/env bash
# Build the static site and publish it to S3 + CloudFront.
# Bucket objects live under out/ (the distribution's origin path is /out).
set -euo pipefail
cd "$(dirname "$0")/.."

BUCKET="${BUCKET:-pentasoul-website}"
DIST="${DIST:-EMGQWX8OFHOWM}"

rm -rf out
npx next build

# Hashed assets never change: cache for a year.
aws s3 sync out/_next "s3://$BUCKET/out/_next" --cache-control "public,max-age=31536000,immutable"
# Pages: short cache so edits show up quickly.
aws s3 sync out "s3://$BUCKET/out" --delete --exclude "_next/*" --cache-control "public,max-age=300,stale-while-revalidate=86400"

aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/*" --query Invalidation.Id --output text
echo "Deployed → https://www.pentasoul.com/"
