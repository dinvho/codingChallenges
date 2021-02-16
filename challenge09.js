// 09) SplitandMerge
function splitAndMerge(string, separator) {
  let newArr = []
  string.split(' ').forEach( word => {
    newArr += word.split('').join(separator)
    newArr += ' '
  })
  return newArr.trim()
}
