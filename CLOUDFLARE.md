# Cloudflare Deployment

This project deploys to Cloudflare Workers using OpenNext for Cloudflare.

## Requirements

- Node.js 22 or newer
- pnpm
- A Cloudflare account authenticated with Wrangler

## Environment Variables

Configure these in Cloudflare under the Worker's variables and secrets:

```bash
WORDPRESS_URL="https://your-wordpress-site.com"
WORDPRESS_HOSTNAME="your-wordpress-site.com"
WORDPRESS_WEBHOOK_SECRET="your-secret-key-here"
BREVO_API_KEY="your-brevo-api-key-here"
BREVO_SENDER_EMAIL="hello@example.com"
BREVO_SENDER_NAME="Eri in Germany"
BREVO_LIST_ID="your-list-id-here"
```

Cloudflare Workers Builds also needs these available as build variables, because static pages and the sitemap fetch WordPress content during `next build`.

## Commands

```bash
pnpm install
pnpm run build
pnpm run preview
pnpm run deploy
```

`pnpm run deploy` builds the Next app, creates the OpenNext Worker bundle, populates the static asset incremental cache, and deploys with Wrangler.

## Notes

- The Worker name is `eriingermany` in `wrangler.jsonc`.
- Generated OpenNext output is written to `.open-next/` and should not be committed.
- Static Next assets are cached by `public/_headers`.
- The current OpenNext cache uses Workers Static Assets, which is simple and deployable without extra Cloudflare storage. WordPress content updates require a rebuild/redeploy with this setup.
- To use the existing WordPress webhook revalidation endpoint on Cloudflare, add an R2 incremental cache and a D1 tag cache in Cloudflare, then switch `open-next.config.ts` from `static-assets-incremental-cache` to the R2/D1 revalidation setup from the OpenNext caching guide.
