export function getValidString(
  formData: FormData,
  key: string,
  maxLength: number = 255
): string {
  const value = formData.get(key);

  if (value === null) {
    return '';
  }

  // Next.js FormData values can be string or File.
  // Explicitly check typeof to prevent Type Confusion attacks where
  // a malicious actor sends a File object when a string is expected,
  // bypassing string-only validations or crashing the server.
  if (typeof value !== 'string') {
    return ''; // Or throw an error, but returning empty string is safer for optional fields
  }

  // Prevent DoS and database overflow errors by enforcing a max length
  if (value.length > maxLength) {
    return value.substring(0, maxLength);
  }

  return value;
}
