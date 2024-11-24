import { describe, test, expect } from 'vitest'
import { sum } from '../src/index'

describe('sum', () => {
  test('1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2)
  })
})