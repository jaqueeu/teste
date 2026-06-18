/**
 * Safely extracts and validates a string from FormData.
 * Prevents File objects from bypassing type checks and enforces a maximum length
 * to mitigate DoS risks and database constraints errors.
 *
 * @param formData The FormData object from the request.
 * @param key The key to extract from FormData.
 * @param maxLength The maximum allowed length for the string (defaults to 255).
 * @returns The validated string, or an empty string if invalid or missing.
 */
export function getValidString(formData: FormData, key: string, maxLength: number = 255): string {
  const value = formData.get(key);

  if (typeof value !== 'string') {
    return ''; // Fails safely if it's not a string (e.g., a File object or null)
  }

  // Truncate to maxLength to prevent DoS or DB errors from excessively long inputs
  return value.substring(0, maxLength);
}
