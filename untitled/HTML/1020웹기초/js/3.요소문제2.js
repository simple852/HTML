//구구만 만들기

var inputNum = prompt('구구단 출력기');



var sectionTag = document.querySelector("section");



for(var i = 1; i <10; i++){
    var divTag = document.createElement("div")
    var bTag = document.createElement("b")

     sectionTag.append(divTag)
    divTag.innerText =`${inputNum} X ${i} =`
    divTag.append(bTag)
    bTag.innerText=`${inputNum * i}`
    bTag.style.color = "red";
    console.log(i)
}
sectionTag.insertAdjacentHTML( "beforeend", "넣을값2")

// bTag.innerText =`${inputNum} X ${i} =`