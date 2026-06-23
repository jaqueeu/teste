export function getValidString(
  value: FormDataEntryValue | null,
  maxLength: number = 255
): string {
  if (value === null) {
    return '';
  }

  if (typeof value !== 'string') {
    return '';
  }

  return value.substring(0, maxLength);
}
