// 13) Who likes it?
function likes(names) {
  let output = names
  if (names.length >= 4){
    return (`${output[0]}, ${output[1]} and ${output.length -2} others like this`);
  } else if (names.length === 3) {
    return (`${output[0]}, ${output[1]} and ${output[2]} like this`);
  } else if (names.length === 2) {
    return (`${output[0]} and ${output[1]} like this`);
  }  else if (names.length === 1) {
    return (`${output[0]} likes this`);
  } else {
    return (`no one likes this`)
  }
}
