export function getValidString(value: FormDataEntryValue | null, maxLength: number = 255): string {
  if (value === null) {
    return '';
  }

  // Explicitly check typeof to prevent File objects from bypassing type checks
  if (typeof value !== 'string') {
    throw new Error('Invalid input type: expected string');
  }

  // Enforce explicit string length validation to prevent DoS or Prisma database errors
  if (value.length > maxLength) {
    throw new Error(`Input exceeds maximum length of ${maxLength} characters`);
  }

  return value;
}
