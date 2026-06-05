## 2025-02-27 - Removed hardcoded secrets and enforced fail-secure behavior
**Vulnerability:** The `sinirClient` instance in `src/lib/sinir/api.ts` initialized using hardcoded fallback credentials (`'mock_key'`, `'mock_secret'`) when environment variables were not set.
**Learning:** This could lead to a risk of accidentally leaking the mock secrets into production or performing unauthorized actions. Relying on default string fallbacks instead of strictly adhering to environment variables violates the secure-by-default principle.
**Prevention:** Remove fallback secrets and instead explicitly throw an error during the authentication flow if the credentials are not provided. This ensures the application fails securely and does not mask missing configurations.
