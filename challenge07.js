// 7) Find max and min values of a list
var min = function(list){
    list = list.sort((a,b) => a-b)
    return list[0];
}

var max = function(list){
    list = list.sort((a,b) => a-b).reverse()
    return list[0];
}

// or

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
