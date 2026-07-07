export function getValidString(formData: FormData, key: string, maxLength: number = 255): string | null {
  const value = formData.get(key);

  // Prevent passing Files
  if (typeof value !== 'string') {
    return null;
  }

  // Enforce length constraint to prevent DoS or Prisma errors
  if (value.length > maxLength) {
    return null;
  }

  return value;
}
