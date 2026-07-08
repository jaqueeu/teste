## 2024-03-05 - FormData Type Bypass and DoS Risk
**Vulnerability:** Next.js Server Actions used `as string` to cast `formData.get()` returns. Since `formData.get()` can return a `File` object or `null`, a malicious user could submit a file instead of a string or send extremely long strings, bypassing type checks, potentially leading to DoS or database errors in Prisma.
**Learning:** Blindly casting inputs using `as string` without proper type checking and length validation exposes the application to unexpected data types and potential denial of service attacks.
**Prevention:** Use a reusable validation utility function like `getValidString` to safely extract, explicitly type-check (`typeof`), and enforce length constraints on `FormData` strings in Server Actions.
