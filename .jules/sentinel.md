## 2025-02-18 - Prevent DoS and Type Bypass in Next.js Server Actions
**Vulnerability:** Next.js Server Actions `formData.get(key)` returns `FormDataEntryValue` (which can be a `File` or `string`). Using `as string` casts bypass runtime checks, allowing `File` objects to be passed to Prisma resulting in crashes, or excessively long strings leading to DoS/Database errors.
**Learning:** Blindly casting inputs using `as string` from `FormData` in Next.js Server Actions completely circumvents TypeScript's safety, exposing the app to type confusion and resource exhaustion vulnerabilities.
**Prevention:** Always use a helper utility (like `getValidString`) that explicitly checks `typeof value === 'string'` and strictly enforces length constraints before processing or inserting into a database.
