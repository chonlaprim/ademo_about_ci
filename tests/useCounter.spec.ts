import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';
import { describe, expect, it } from 'vitest';

describe('useCounter', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should increment count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should update val and increment by new val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it('should set value directly', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(10);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(10);
  });

  it('should handle multiple increments', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(3);
  });

  it('should handle negative values', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(-7);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(-7);
  });
});
