## 2024-06-30 - Fix unsafe FormData extraction in Server Actions
**Vulnerability:** Next.js Server Actions were blindly casting `FormData.get()` results using `as string`. Since `formData.get()` can return a `File` or `null`, a malicious payload could bypass type checks, potentially leading to application crashes or unexpected behavior when interacting with the database. There were also no length restrictions.
**Learning:** In Next.js App Router, form inputs must be explicitly type-checked and length-validated before being used or stored in the database.
**Prevention:** Use a centralized validation utility (like `getValidString`) that explicitly checks `typeof value === 'string'` and enforces a `maxLength` before trusting the input.
