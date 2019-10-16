let arr = [3, -2, 6, 1, 3, 30, -8, 1];
for(let i = 0; i < arr.length - 1; i++){
  let wasSwap = false;
  for (let j = 0; j < arr.length - i - 1; j++){
    if(arr[j] > arr[j + 1]){
      let tmp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tmp;
      wasSwap = true;
    }
  }
  if(wasSwap === false){
    break;
  }
}
console.log(arr);
