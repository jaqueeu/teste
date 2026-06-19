export function getValidString(formData: FormData, key: string, maxLength: number = 255): string | null {
  const value = formData.get(key);

  // Explicitly check typeof to prevent File objects from bypassing type checks
  if (typeof value !== 'string') {
    return null;
  }

  // Enforce length constraints
  if (value.length > maxLength) {
    return null;
  }

  return value.trim() || null;
}
