const bodyTag = document.body
//input 태그 생성
const inputTag = document.createElement("input")
inputTag.value="기본값;"
inputTag.type="password"
inputTag.id="password"
//생성된 태그를 body에 넣어준다.
bodyTag.appendChild(inputTag)




const divTag=document.querySelector("div")

const newInputTag = inputTag.cloneNode(true);

divTag.background= "beige";
// divTag.appendChild(inputTag)
// divTag.appendChild(newInputTag)






const sectionTag = document.querySelector("section")

// const  aTag = document.createElement('a')
// aTag.text ="안녕하세여"
// sectionTag.insertAdjacentElement("beforeend",aTag)

// 2)
sectionTag.insertAdjacentHTML("afterbegin",'<a href> 222</a>')