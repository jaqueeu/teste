## 2024-06-28 - Type Bypass and DoS in Next.js Server Actions
**Vulnerability:** Server Actions were blindly casting `formData.get('field')` as `string`. This allows attackers to send `File` objects or extremely long strings, potentially bypassing validation, crashing the application with type errors, or causing Denial of Service (DoS) / database errors in Prisma.
**Learning:** In Next.js App Router, `FormDataEntryValue` can be a `File` or `string`. TypeScript's `as string` cast does not provide runtime protection against malicious payloads.
**Prevention:** Always use a validation utility (like `getValidString`) that explicitly checks `typeof value === 'string'` and enforces a maximum length (e.g., 255 chars) before processing `FormData` inputs in Server Actions.
