export function getValidString(formData: FormData, key: string, maxLength: number = 255): string {
  const value = formData.get(key);
  if (value === null) return '';
  if (typeof value !== 'string') {
    throw new Error(`Invalid input type for ${key}`);
  }
  if (value.length > maxLength) {
    throw new Error(`Input ${key} exceeds maximum length`);
  }
  return value;
}
