function foo(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  if(Number.isNaN(numA) || Number.isNaN(numB)){
    return 'Error: Invalid input. Please provide numbers.';
  }
  return numA + numB;
}

console.log(foo(1, '2')); // Output: 3
console.log(foo('a',2)); //Output: Error: Invalid input. Please provide numbers.