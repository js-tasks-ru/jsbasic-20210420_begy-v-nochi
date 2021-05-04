function factorial(n) {
  let counter = 1;
  for (i = 1; i <= n; i++) {
    counter = counter * i;
  }
  return counter;
}
