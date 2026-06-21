## 2024-06-21 - Next.js Server Actions FormData Validation
**Vulnerability:** Directly casting `formData.get('field')` as a string in Next.js Server Actions is unsafe. It bypasses type checking and allows `File` objects or excessively large strings to crash the server or cause database errors (DoS).
**Learning:** We must explicitly check the `typeof` the form data returned value, and ideally use a shared validation utility that trims and enforces length constraints.
**Prevention:** Implement a reusable `getValidString` utility to safely extract, type-check, and enforce length on `FormData` strings before they are processed by the application or inserted into the database.
