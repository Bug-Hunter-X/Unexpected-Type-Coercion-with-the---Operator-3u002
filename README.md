# Unexpected Type Coercion in JavaScript

This example demonstrates a common issue in JavaScript related to type coercion.  The plus (+) operator can lead to unexpected results when used with mixed data types (numbers and strings).

## The Bug
The `foo` function is intended to add two numbers. However, because of type coercion, when a number and a string are added using the `+` operator, JavaScript converts the number to a string and concatenates the two strings instead of performing numerical addition. This results in the output "12" instead of the expected numerical sum 3.

## Solution
To ensure numerical addition, it's best to explicitly convert both operands to numbers before performing the operation using `parseInt()` or `Number()`.  This prevents unexpected type coercion behavior.  Also be aware that you can get an error if the string cannot be parsed into an integer. It's worth checking if the parsed value is a valid integer before proceeding.