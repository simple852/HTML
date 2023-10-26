

var htmlNode = document.lastChild
var bodynode = htmlNode.childNodes
// console.log(bodynode.item(2))

var value =document.getElementById("click");
var value2 =document.getElementsByTagName("input");
value2[0].style.background="yellow";
var value3 =document.getElementsByTagName("div");
// console.log(value)
console.log(value2)



var value1 =document.getElementById("hi");
console.log(value1)
var value2 =document.getElementById("bye");
console.log(value2)

var value3 =document.getElementsByName("bye");
console.log(value3)

// 배열이 아닌 위에서 부터 찾아서 먼저 찾은 하나만 가져옴
var test = document.querySelector('div.test')
console.log(test)
//일치하는것 전부 찾아서 배열로 가져옴
var bye = document.querySelectorAll('div')

console.log(document.firstElementChild)

