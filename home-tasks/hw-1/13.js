//13) дан произвольный массив. Задание: найти все не повторяющиеся элементы.
// Примечание: использовать встроенный в JS объект, позволяющий хранить уникальные значения любого типа.
let arr = [3, -2, 6, 1, 3, 30, -8, 1, -8];
let set = new Set(arr);
console.log(set);
