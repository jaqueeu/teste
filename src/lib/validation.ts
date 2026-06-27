export function getValidString(
  value: FormDataEntryValue | null,
  maxLength: number = 255
): string | undefined {
  if (!value || typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > maxLength) {
    return undefined;
  }

  return trimmed;
}
