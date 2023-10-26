// 두 section에서
// 각 section의 width 와 height 의 합으로
// 하나의 section을 생성하세요;
// 새로운 section 은 s1의 w +s2의 w , s1의 h+s2의 h 가 되어야합니다
//s1과 s2의 내용을 가져와서 section에 내용으로 설정합니다
//단 ,s2에 있는 100번째 숫자에 1을 더하여 101으로 설정합니다
// 또한 101 숫자 부분의 style은 기존 s2의  100 숫자의 style과 동일하게 설정합니다
// => color , font-style 을 똑같이 하라는 듰
// 새로운 section에 배경색을 넣으세요


const sectionTag1 = document.querySelector(".s1")
const sectionTag2 = document.querySelector(".s2")

//s1,s2 내용 깊은 복사
var clone1 = sectionTag1.cloneNode(true)
var clone2 =sectionTag2.cloneNode(true)

//s1,s2 크기 구하기
const tag1Width=getComputedStyle(sectionTag1).width
const tag1height=getComputedStyle(sectionTag1).height
const tag2Width=getComputedStyle(sectionTag2).width
const tag2height=getComputedStyle(sectionTag2).height

//s1,s2 크기 합산
var sumWidth = parseInt(tag1Width)+parseInt(tag2Width);
var sumHeight = parseInt(tag1height)+parseInt(tag2height);


//s2의 number 값 구하기
var number = document.getElementsByClassName("number")[0]
//number값에서 +1
var total= parseInt(number.innerText) +1


//새로운 섹션 생성 크기, 넓이, 배경색 지정
var createSection = document.createElement("section")
createSection.style.width = `${sumWidth}px`;
createSection.style.height = `${sumHeight}px`;
createSection.style.backgroundColor = "beige";



//body태그 구하기
var bodyTag = document.getElementsByTagName("body")[0]



// 새로운 섹션과 s1,s2 내용 ㅂ붙여넣기 
bodyTag.append(createSection)
createSection.append(clone1)
createSection.append(clone2)

//새로운 섹션의 number 값에 total 넣기
var changeNum = document.getElementsByClassName("number")[1]
changeNum.innerText = total







