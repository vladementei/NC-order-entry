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
