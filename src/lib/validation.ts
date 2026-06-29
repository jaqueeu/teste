export function getValidString(formData: FormData, key: string, maxLength: number = 255): string {
  const value = formData.get(key);

  if (value === null || typeof value !== 'string') {
    return '';
  }

  if (value.length > maxLength) {
    return value.substring(0, maxLength);
  }

  return value;
}
