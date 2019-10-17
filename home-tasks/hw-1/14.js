let students = [{ id: 2, name: 'John', age: 28}, { id: 3, name: 'William', age: 34}, { id: 4, name: 'Graham', age: 27},
  { id: 5, name: 'Oliver', age: 28}];
let first = [];
for (let i = 0; i < students.length; i++){
  if((students[i].name.toLowerCase().indexOf("am") >= 0) && (students[i].age <= 30)){
    first.push(students[i]);
  }
}
let second = [];
for (let i = 0; i < students.length; i++){
  if((students[i].name.toLowerCase().indexOf("am") >= 0) && (students[i].age <= 30)){
    second.push(students[i]);
    break;
  }
}
console.log(first);
console.log(second);
