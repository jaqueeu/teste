/**
 * Safely extracts and validates a string from FormData.
 * Prevents File objects from bypassing type checks and causing crashes.
 * Enforces length constraints to prevent DoS attacks or database errors.
 */
export function getValidString(
  formData: FormData,
  key: string,
  maxLength: number = 255
): string {
  const value = formData.get(key);

  // Explicit typeof check prevents File objects from bypassing string type assumption
  if (typeof value !== 'string') {
    return '';
  }

  // Enforce length limit to prevent DoS via large payloads and DB errors
  return value.trim().slice(0, maxLength);
}
