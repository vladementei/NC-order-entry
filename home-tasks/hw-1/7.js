function fibonacci(n) {
  if(n < 2){
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n - 2);
}

for(let i = 0, last = 0; last < 18000; i++){
  console.log(last);
  last = fibonacci(i);
}
