## 2024-07-02 - Next.js Server Actions FormData Type Bypass
**Vulnerability:** `formData.get('field') as string` in Next.js Server Actions allowed type bypassing, potentially allowing `File` objects or `null` to bypass validation checks, leading to database crashes or unhandled exceptions. Additionally, missing length limits opened up DoS risks.
**Learning:** Never blindly cast `FormData` fields using `as string`.
**Prevention:** Implement a central utility `getValidString` that strictly checks `typeof === 'string'` and enforces a maximum length, returning normalized string or throwing specific errors.
