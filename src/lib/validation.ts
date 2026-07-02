export function getValidString(
  formData: FormData,
  key: string,
  maxLength: number = 255
): string {
  const value = formData.get(key);

  // Explicitly check for string to prevent File objects from bypassing type checks
  if (typeof value !== 'string') {
    return '';
  }

  // Implement explicit string length validation to prevent DoS or Prisma database errors
  if (value.length > maxLength) {
    throw new Error(`Input for ${key} exceeds maximum length of ${maxLength}`);
  }

  return value;
}
