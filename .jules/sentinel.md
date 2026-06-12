## 2026-06-12 - Fix Input Validation and Type Casting in Server Actions
**Vulnerability:** Next.js Server Actions were blindly casting `formData.get()` to `string`, which bypasses type checks if a `File` is uploaded, and missing length limits could cause DoS or Prisma errors.
**Learning:** Next.js `formData.get()` returns `string | File | null`. Blind casting like `as string` is unsafe and should be replaced with explicit `typeof` checks and length validation.
**Prevention:** Always strictly type-check Server Action inputs using `typeof formData.get(key) === 'string'` and enforce string length boundaries before processing them or interacting with the database.
