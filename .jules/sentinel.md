## 2024-10-24 - Missing Global Security Headers in Next.js
**Vulnerability:** The application was missing essential HTTP security headers (e.g., X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Strict-Transport-Security, X-XSS-Protection).
**Learning:** Next.js does not apply strict security headers by default. Although Next.js abstracts many configurations, security headers must still be explicitly defined using the `headers()` method in `next.config.ts`.
**Prevention:** Always review `next.config.ts` or the server configuration at the start of a Next.js project to enforce baseline defense-in-depth security headers for all routes (`/(.*)`).
