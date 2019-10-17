let current = 1;

let timerId = setInterval(() =>{
  console.log(current);
  if (current === 20) {
    clearInterval(timerId);
  }
  current++;
}, 100);
