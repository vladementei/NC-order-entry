//8) дан массив arr = [-3, 0, -0, 11, 8, 5, 33, 115].
// Написать функцию принимующую параметрами массив и выводящю в консоль нечетные числа.
function printOdd(arr){
  for(let elem of arr){
    if(elem % 2 === 1){
      console.log(elem);
    }
  }
}
let arr = [-3, 0, -0, 11, 8, 5, 33, 115];
printOdd(arr);
