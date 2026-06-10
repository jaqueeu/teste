## 2024-05-24 - [Security Headers Setup]
**Vulnerability:** Next.js application was missing essential security headers (HSTS, X-Frame-Options, X-Content-Type-Options, etc).
**Learning:** Added a baseline of defense-in-depth security measures to protect the app. Ensure headers properly target all routes `/(.*)` in Next.js config.
**Prevention:** Implement standard security headers in the Next.js config for all future projects to mitigate common vulnerabilities like clickjacking and MIME-sniffing.
