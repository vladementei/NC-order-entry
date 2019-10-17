//1) Написать функцию принимающую параметром массив, и возвращающую объект вида { maxValue: ${maxValue}, minValue: ${minValue} }
//    Под минимимальным и максимальным значением подрузамевается число. Учесть то что массив может состоять не только из чисел.
function minMax (arr) {
  let min = arr[0];
  let max = arr[0];
  for (let elem of arr) {
    if (typeof elem == "number") {
      if (elem < min) {
        min = elem;
      }
      if (elem > max) {
        max = elem;
      }
    }
  }
  return {maxValue: max, minValue: min};
}
let arr = [1,5.6, 'w', true, null, undefined, 5, 9.7, -4, 3];
console.log(minMax(arr));
