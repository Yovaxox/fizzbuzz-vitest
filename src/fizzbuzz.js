/*
Escribir una función que al pasarle un número:
- Muestra "fizz" si el número es divisible por 3
- Muestra "buzz" si el número es divisible por 5
- Muestra "fizzbuzz" si el número es divisible por 3 y 5
- Muestra el número si no es divisible por 3 ni por 5
*/

export const fizzbuzz = (number) => {
  const conditions = [
    [number === Infinity, 'parameter provided must not be Infinity'],
    [number === -Infinity, 'parameter provided must not be -Infinity'],
    [typeof number !== 'number', 'parameter provided must be of type number'],
    [Number.isNaN(number), 'parameter provided must not be NaN'],
    [number < 0, 'parameter provided must not be a negative number'],
    [!Number.isInteger(number), 'parameter provided must be an integer'],
    [
      number > Number.MAX_SAFE_INTEGER,
      `parameter provided must be less than ${Number.MAX_SAFE_INTEGER + 1}`,
    ],
    [number === 0, 'parameter provided must not be zero'],
  ]

  for (let [condition, message] of conditions) {
    if (condition) throw new Error(message)
  }

  const multiplies = { 3: 'fizz', 5: 'buzz' }
  let output = ''

  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word
  })

  return output === '' ? number : output
}
