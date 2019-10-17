//3) дан массив arr = [3, -2, 6, 1, 3, 30, -8, 1]. Выводить в консоль числа пока не встретиться 1.
// Сдлеать это с помощью циклов while и do while.
let arr = [3, -2, 6, 1, 3, 30, -8, 1];
let i = 0;
while (arr[i] !== 1 && i < arr.length){
  console.log(arr[i]);
  i++;
}
i = 0;
do{
  if(arr[i] === 1) {
    break;
  }
  console.log(arr[i]);
  i++;
} while (i < arr.length);
