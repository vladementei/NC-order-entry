//7) написать рекурсивную функцию выводящую в консоль ряд Фибоначчи. Последнее число должно быть меньше 18000.
function fibonacci(first, second, limit) {
  console.log(first);
  if (limit <= second) {
    return;
  }
  fibonacci(second,first + second, limit);
}
fibonacci(0,1,18000);
