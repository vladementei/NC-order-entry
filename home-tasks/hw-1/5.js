//5) дан объект {js: 'forever', java: 'never'}. С помощью цикла for in вывести в консоль строки вида `${ключ} - ${значение}`.
let obj = {js: 'forever', java: 'never'};
for(let key in obj){
  console.log(`${key} - ${obj[key]}`);
}
