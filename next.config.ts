import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

// Static export: `next build` writes plain files to out/, which is served
// from S3 + CloudFront (see infra/ and scripts/deploy.sh). Redirects such as
// /work -> /products/ live in infra/cloudfront-function.js because static
// hosting can't run next.config redirects.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    root,
  },
};

export default nextConfig;
