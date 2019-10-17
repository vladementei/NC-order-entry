//2) дан массив arr = [3, -2, 6, 1, 3, 30, -8, 1]. Найти произведение чисел. Использовать цикл while.
let arr = [3, -2, 6, 1, 3, 30, -8, 1];
let multRes = 1;
let i = 0;
while (i < arr.length){
  multRes *= arr[i];
  i++;
}
console.log(multRes);
