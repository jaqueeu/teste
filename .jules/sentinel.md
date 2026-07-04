## 2024-11-21 - [Next.js Server Action Type Confusion]
**Vulnerability:** Next.js `FormData.get()` can return either a `string` or a `File` object. Blindly casting it to `as string` allows a malicious user to submit a file where a string is expected, causing server crashes or unexpected behavior (Type Confusion attack). Furthermore, unbounded string inputs could lead to DoS or database field overflow errors.
**Learning:** In Next.js Server Actions, always explicitly check `typeof formData.get('key') === 'string'` and strictly validate string lengths before processing or passing to the database.
**Prevention:** Created and utilized a shared validation utility `getValidString(formData, key, maxLength)` to safely extract, type-check, and length-constrain values from `FormData`.
