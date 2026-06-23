## 2026-06-23 - [FormData Type Assertion Vulnerability]
**Vulnerability:** Unsafe type casting (`as string`) of `FormData` values in Server Actions allowing potential object injections and missing input length constraints posing DoS risks.
**Learning:** Blindly casting `formData.get()` to string in Next.js Server Actions ignores the possibility of receiving a `File` object and allows arbitrarily large inputs.
**Prevention:** Always use safe validation utilities like `getValidString` that check the `typeof` value, return defaults for invalid types, and truncate strings to a safe maximum length.
