export function getValidString(
  formData: FormData,
  key: string,
  maxLength: number = 255
): string {
  const value = formData.get(key);

  if (value === null) {
    return ''; // Or throw an error depending on requirements. Returning empty string to match previous falsy check `if (!name) return;`
  }

  if (typeof value !== 'string') {
    throw new Error(`Invalid input type for ${key}. Expected string.`);
  }

  if (value.length > maxLength) {
    throw new Error(`Input for ${key} exceeds maximum length of ${maxLength}.`);
  }

  return value.trim();
}
