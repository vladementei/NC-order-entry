function triangle(h) {
  console.log('^');
  let str = '';
  for (let i = 0; i < h - 2; i++){
    let str = '';
    for(let j = 0; j < i + 1; j++){
      str += ' ';
    }
    console.log('^' + str + '^');
  }
  for(let j = 0; j < h + 1; j++){
    str += '^';
  }
  console.log(str);
}

triangle(10);
