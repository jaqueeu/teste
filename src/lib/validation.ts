/**
 * Safely extracts, type-checks, and enforces length constraints on FormData strings.
 * Prevents File objects from bypassing type checks and prevents DoS/Prisma errors
 * by limiting the string length.
 */
export function getValidString(
  value: FormDataEntryValue | null,
  maxLength: number = 255
): string {
  if (!value || typeof value !== 'string') {
    return '';
  }

  const trimmed = value.trim();
  if (trimmed.length > maxLength) {
    return trimmed.substring(0, maxLength);
  }

  return trimmed;
}
