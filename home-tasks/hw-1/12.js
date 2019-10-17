//12) вывести числа в  консоль от 1 до 20. Числа должны печататься с интервалом 100 миллисекунд. Использовать setTimeout.
let current = 1;
setTimeout(function count() {
  console.log(current);
  if (current < 20) {
    setTimeout(count, 100);
  }
  current++;
}, 100);
