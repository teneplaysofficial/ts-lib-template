import { describe, expect, it } from 'vitest';
import { clamp, sum, toTitleCase, truncate } from '@/lib';

describe('string utilities', () => {
  it('converts to title case', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
  });

  it('truncates long strings', () => {
    expect(truncate('Hello World', 5)).toBe('Hello…');
  });

  it('returns original if shorter than limit', () => {
    expect(truncate('Hi', 5)).toBe('Hi');
  });
});

describe('math utilities', () => {
  it('sums numbers', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  it('clamps within range', () => {
    expect(clamp(10, 0, 5)).toBe(5);
  });

  it('throws if min > max', () => {
    expect(() => clamp(5, 10, 1)).toThrow();
  });
});
