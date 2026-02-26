export function toTitleCase(input: string): string {
  return input
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function truncate(input: string, length: number): string {
  if (length < 0) {
    return '';
  }

  return input.length > length ? `${input.slice(0, length)}…` : input;
}

export function sum(...numbers: number[]): number {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

export function clamp(value: number, min: number, max: number): number {
  if (min > max) {
    throw new Error('min must not be greater than max');
  }

  return Math.min(Math.max(value, min), max);
}
