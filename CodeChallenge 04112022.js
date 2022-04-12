// Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    let remainder = number % 2
    if (remainder === 0) {
        return "Even"
    } else {
        return "Odd"
    }
}