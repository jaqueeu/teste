export function getValidString(formData: FormData, key: string, maxLength: number = 255): string {
  const value = formData.get(key);

  if (value === null) {
    return '';
  }

  if (typeof value !== 'string') {
    throw new Error(`Invalid input for ${key}: expected string, got ${typeof value}`);
  }

  if (value.length > maxLength) {
    throw new Error(`Invalid input for ${key}: exceeds maximum length of ${maxLength}`);
  }

  return value;
}
