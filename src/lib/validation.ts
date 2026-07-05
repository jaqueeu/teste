export function getValidString(
  formData: FormData,
  key: string,
  maxLength: number = 255
): string {
  const value = formData.get(key);

  if (typeof value !== 'string') {
    return '';
  }

  return value.slice(0, maxLength);
}
