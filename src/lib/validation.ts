export function getValidString(formData: FormData, key: string, maxLength: number = 1000): string | null {
  const value = formData.get(key);

  if (value === null) {
    return null;
  }

  if (typeof value !== 'string') {
    // If it's a File or something else, return null
    return null;
  }

  // Enforce length constraint to prevent DoS or database errors
  if (value.length > maxLength) {
    return value.substring(0, maxLength);
  }

  return value;
}
