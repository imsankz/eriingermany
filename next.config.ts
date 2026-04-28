import type { NextConfig } from "next";

const wordpressHostname = process.env.WORDPRESS_HOSTNAME;
const wordpressUrl = process.env.WORDPRESS_URL;

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      // CDN hostname for eriingermany.com media (ExactDN/BunnyCDN)
      {
        protocol: "https",
        hostname: "ersw66et6uc.exactdn.com",
        port: "",
        pathname: "/**",
      },
      // YouTube thumbnails
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
      },
      // WordPress origin (fallback for non-CDN URLs)
      {
        protocol: "https",
        hostname: "eriingermany.com",
        port: "",
        pathname: "/**",
      },
      // Gravatar avatars (author profile images)
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/**",
      },
      ...(wordpressHostname
        ? [
            {
              protocol: "https" as const,
              hostname: wordpressHostname,
              port: "",
              pathname: "/**",
            },
          ]
        : []),
    ],
  },
  async redirects() {
    const base = wordpressUrl
      ? [{ source: "/admin", destination: `${wordpressUrl}/wp-admin`, permanent: true }]
      : [];
    return [
      ...base,
      { source: "/posts/:slug", destination: "/:slug", permanent: true },
      { source: "/pages/:slug", destination: "/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
