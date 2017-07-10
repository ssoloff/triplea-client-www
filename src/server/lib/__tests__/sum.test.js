// @flow

import sum from '../sum'

describe('sum', () => {
  it('should calculate sum of positive numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('should calculate sum of negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3)
  })
})
