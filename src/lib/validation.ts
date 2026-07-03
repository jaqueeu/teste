export function getValidString(formData: FormData, key: string, maxLength: number = 255): string {
  const value = formData.get(key);

  if (typeof value !== 'string') {
    throw new Error(`Invalid input for ${key}: expected string`);
  }

  if (value.length > maxLength) {
    throw new Error(`Invalid input for ${key}: exceeds maximum length of ${maxLength}`);
  }

  return value.trim();
}
