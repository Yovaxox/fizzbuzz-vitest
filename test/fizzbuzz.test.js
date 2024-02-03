import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  /* it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  }) */

  /* it('should throw error if not number is provided as a parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  }) */

  /* Checking parameter */

  it('should throw an error if parameter provided is Infinity', () => {
    expect(() => fizzbuzz(Infinity)).toThrow(
      `parameter provided must not be Infinity`
    )
  })

  it('should throw an error if parameter provided is -Infinity', () => {
    expect(() => fizzbuzz(-Infinity)).toThrow(
      `parameter provided must not be -Infinity`
    )
  })

  it('should throw an error if parameter provided is not of type number', () => {
    expect(() => fizzbuzz()).toThrow(
      'parameter provided must be of type number'
    )
  })

  it('should throw an error if parameter provided is NaN', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must not be NaN')
  })

  it('should throw an error if parameter provided is a negative number', () => {
    expect(() => fizzbuzz(-1)).toThrow(
      'parameter provided must not be a negative number'
    )
  })

  it('should throw an error if parameter provided is not an integer', () => {
    expect(() => fizzbuzz(1.5)).toThrow('parameter provided must be an integer')
  })

  it(`should throw an error if parameter provided is larger than ${Number.MAX_SAFE_INTEGER}`, () => {
    expect(() => fizzbuzz(Number.MAX_SAFE_INTEGER + 1)).toThrow(
      `parameter provided must be less than ${Number.MAX_SAFE_INTEGER + 1}`
    )
  })

  it('should throw an error if parameter provided is zero', () => {
    expect(() => fizzbuzz(0)).toThrow('parameter provided must not be zero')
  })

  /* Main Functionality */

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  /* it('should return 4 if number provided is 4', () => {
    expect(fizzbuzz(4)).toBe(4)
  })
 */
  it('should return "buzz" if number provided is 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number provided is multiple of 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})
