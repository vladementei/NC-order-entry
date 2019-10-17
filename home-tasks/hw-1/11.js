//11) вывести числа в  консоль от 1 до 20. Числа должны печататься с интервалом 100 миллисекунд. Использовать setInterval.
let current = 1;
let timerId = setInterval(() => {
  console.log(current);
  if (current === 20) {
    clearInterval(timerId);
  }
  current++;
}, 100);
