function removeAndUp(str){
  let arr = str.split("_");
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++){
    answer += (arr[i][0].toUpperCase());
    answer += (arr[i]).substring(1, arr[i].length);
  }
  return answer
}
let str = 'var_text_hello';
console.log(removeAndUp(str));
