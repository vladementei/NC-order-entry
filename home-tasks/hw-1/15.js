let celsius = [-20,-7,-4,0,4,8,30];
let fahrenheit = celsius.map(elem => elem*1.8 + 32);
let positive = celsius.filter(elem => elem > 0);
console.log(fahrenheit);
console.log(positive);
