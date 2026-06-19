## 2024-10-25 - [Fix Type Confusion in Server Actions]
**Vulnerability:** Unsafe type casting (`as string`) of `FormData.get()` inputs in Next.js Server Actions allowed `File` objects to bypass expected string parameters, risking Type Confusion, application crashes, and potential Denial of Service (DoS) during database operations.
**Learning:** `FormData.get()` returns `FormDataEntryValue`, which can be a `string` or a `File`. Blind casting masks this risk to ORMs like Prisma.
**Prevention:** Explicitly check `typeof value === 'string'` and strictly enforce input bounds (length constraints) before data ingestion.
