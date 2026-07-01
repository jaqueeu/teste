export function getValidString(
  val: FormDataEntryValue | null,
  maxLength: number = 255
): string {
  if (typeof val !== 'string') {
    return '';
  }
  return val.slice(0, maxLength);
}
