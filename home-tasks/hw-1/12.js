let current = 1;

setTimeout(function count() {
  console.log(current);
  if (current < 20) {
    setTimeout(count, 100);
  }
  current++;
}, 100);
