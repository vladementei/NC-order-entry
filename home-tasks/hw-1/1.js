//1) Написать функцию принимающую параметром массив, и возвращающую объект вида { maxValue: ${maxValue}, minValue: ${minValue} }
//    Под минимимальным и максимальным значением подрузамевается число. Учесть то что массив может состоять не только из чисел.
function minMax (arr) {
  let min = null;
  let max = null;
  for (let elem of arr) {
    if (typeof elem == "number") {
      if(min === null || max === null){
        max = elem;
        min = elem;
      }else if (elem < min) {
        min = elem;
      }else if (elem > max) {
        max = elem;
      }
    }
  }
  return {maxValue: max, minValue: min};
}
let arr = [1,5.6, 'w', true, null, undefined, 5, 9.7, -4, 3];
console.log(minMax(arr));
arr = ['u', 'w', true, null, undefined];
console.log(minMax(arr));
