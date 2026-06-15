## 2026-06-15 - [FormData Next.js Server Action Type Bypass]
**Vulnerability:** Next.js Server Actions receiving `FormData` were blindly casting user input using `as string`. This is a critical risk because attackers can submit a `File` object instead of a string, bypassing the TypeScript compiler completely.
**Learning:** In Next.js Server Actions, since the execution happens securely on the server with raw client input, `typeof value === 'string'` checks must be explicitly run at runtime. Relying solely on `as string` opens up avenues for runtime errors (like crash on passing File object to Prisma) or DoS attacks.
**Prevention:** Use a standard validation function like `getValidString` that checks `typeof` and applies explicit length constraints.
