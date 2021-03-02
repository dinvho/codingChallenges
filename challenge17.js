// Format a string of names like 'Bart, Lisa & Maggie'.
function list(names){
  //your code here
  let nameList = [];
  names.forEach(name => nameList.push(name.name))
  return nameList.join(', ').replace(/,(?=[^,]*$)/, ' &')
}
