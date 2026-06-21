export function getValidString(
  formData: FormData,
  key: string,
  maxLength: number = 255
): string | undefined {
  const value = formData.get(key);

  if (value === null) {
    return undefined;
  }

  if (typeof value !== 'string') {
    // Prevent File objects from bypassing type checks
    return undefined;
  }

  const trimmedValue = value.trim();

  if (trimmedValue.length === 0) {
    return undefined;
  }

  if (trimmedValue.length > maxLength) {
    // Truncate or reject? We'll just reject/ignore for safety
    return trimmedValue.substring(0, maxLength);
  }

  return trimmedValue;
}
