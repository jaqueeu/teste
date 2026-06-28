export function getValidString(value: FormDataEntryValue | null, maxLength = 255): string {
  if (typeof value !== 'string') {
    return '';
  }
  return value.substring(0, maxLength);
}
