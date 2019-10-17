let students = [{ id: 2, name: 'John', age: 28}, { id: 3, name: 'William', age: 34}, { id: 4, name: 'Graham', age: 27},
  { id: 5, name: 'Oliver', age: 28}];
let first = students.filter(elem => (elem.name.toLowerCase().indexOf('am') >= 0) && (elem.age <= 30));
let second = students.find(elem => (elem.name.toLowerCase().indexOf('am') >= 0) && (elem.age <= 30));

console.log(first);
console.log(second);
