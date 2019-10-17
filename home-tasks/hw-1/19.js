//19) Условие: дан целочисленный массив. Задание: Отсортировать массив в обратном порядке. Найти min и max.
let arr = [3, -2, 6, 1, 3, 30, -8, 1];
console.log(arr.sort((o1,o2) => o2 - o1));
console.log(arr[arr.length-1]);
console.log(arr[0]);
