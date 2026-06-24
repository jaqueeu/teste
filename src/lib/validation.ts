/**
 * Safely extracts and validates a string from FormData.
 * Prevents File objects from bypassing type checks and enforces length constraints
 * to protect against DoS attacks and database errors.
 *
 * @param formData The FormData object
 * @param key The key to extract
 * @param maxLength The maximum allowed length for the string (defaults to 255)
 * @returns The validated string, or an empty string if invalid
 */
export function getValidString(formData: FormData, key: string, maxLength: number = 255): string {
  const value = formData.get(key);

  if (typeof value !== 'string') {
    return '';
  }

  // Enforce maximum length to prevent DoS or Prisma errors
  if (value.length > maxLength) {
    return value.substring(0, maxLength);
  }

  return value;
}
