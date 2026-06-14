
## 2024-06-14 - Blind casting FormData values in Server Actions
**Vulnerability:** Directly casting `formData.get('field') as string` in Next.js Server Actions bypasses TypeScript's type checking, allowing malicious users to submit `File` objects instead of strings. This can lead to unexpected errors, DoS, or database issues (e.g. Prisma throwing errors when expecting a string but receiving a File object).
**Learning:** `FormDataEntryValue` can be either a `File` or a `string`. Because Next.js Server Actions are public API endpoints, input validation must explicitly check `typeof value === 'string'` and enforce length limits rather than relying on `as string` casts.
**Prevention:** Always use a helper function (like `getValidString`) that explicitly checks type and limits string length before using the value in database operations or business logic.
