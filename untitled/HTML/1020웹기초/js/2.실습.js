const chinaDiv = document.querySelector('div')
chinaDiv.style.backgroundColor= 'black';
// console.log(chinaDiv.style.backgroundColor)

// chinaDiv.style.height = chinaDiv.getC
// getComputedStyle(chinaDiv).height = "100";

const amaricaSpan = document.querySelector('span')
amaricaSpan.style.backgroundColor= 'black';
console.log(amaricaSpan.style.color)

const aTag = document.querySelectorAll('a');
aTag[0].style.color='red';
aTag[1].style.color='red';
aTag[0].style.textDecoration='none';
aTag[1].style.textDecoration='none';


let [koreaTag, japanTag] = document.getElementsByTagName('a');
// var arr = [...aTags];
// arr.forEach(aTag => aTag.style.color='black')
koreaTag.style.color = "beige";
koreaTag.style.color = "rgb(0,0,255)";