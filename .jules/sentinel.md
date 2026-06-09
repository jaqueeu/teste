## 2024-05-24 - Missing Security Headers
**Vulnerability:** Missing security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Strict-Transport-Security) across the entire application.
**Learning:** Next.js applications require manual configuration to include essential security headers globally.
**Prevention:** Always configure `next.config.ts` with a `headers()` function to inject standard security headers for all routes.
