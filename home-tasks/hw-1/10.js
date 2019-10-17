//10) написать функцию принимающую на вход число. Число - высота треуголника. Вывести в консоль треугольник из символов '^'.
function triangle(h) {
  for(let i = 0; i < h; i++){
    let empty = '';
    let triangles = '^';
    for(let j = 0; j < h - i - 1; j++){
      empty += ' ';
    }
    for(let j = 0; j < i; j++){
      triangles += '^^';
    }
    console.log(empty + triangles + empty);
  }
}
triangle(7);
