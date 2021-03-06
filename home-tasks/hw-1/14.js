//14) [{ id: 2, name: 'John', age: 28, { id: 3, name: 'William', age: 34}, { id: 4, name: 'Graham', age: 27}, { id: 5, name: 'Oliver', age: 28}];
// 	Задание: в массиве students, найти сначала всех, потом первого студента, имена которых включают подстроку "am"
// и их возраст не более 30 (для поиска всех и только одного студента(ов) использовать два отдельных цикла).
// 	Примечание: регистр строк не учитывать (пример: am=Am=aM=AM)
function isElemAppropriate(elem, substring, age){
  return (elem.name.toLowerCase().indexOf(substring) >= 0 && elem.age <= age);
}
let students = [{ id: 2, name: 'John', age: 28}, { id: 3, name: 'William', age: 34}, { id: 4, name: 'Graham', age: 27},
  { id: 5, name: 'Oliver', age: 28}];
let first = students.filter(elem => isElemAppropriate(elem, 'am', 30));
let second = students.find(elem => isElemAppropriate(elem, 'am', 30));

console.log(first);
console.log(second);
