//4) дан массив arr = [3, -2, 6, 1, 3, 30, -8, 1]. Найти сумму чисел. Использовать цикл forEach.
let arr = [3, -2, 6, 1, 3, 30, -8, 1];
let sum = 0;
arr.forEach((value => {
  sum += value;
}));
console.log(sum);
sum = 0;
for(let elem of arr){
  sum += elem;
}
console.log(sum);
