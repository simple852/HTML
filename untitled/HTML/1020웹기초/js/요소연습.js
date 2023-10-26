// document.body.innerHTML='<section>\n' +
//     '    <a href ="https://www.naver.com" active="">네이버로 이동</a>\n' +
//     '</section>';


const  bodyEl = document.body;
const sectionEl= document.createElement('section');
const aEl=document.createElement("a");
aEl.setAttribute("href","https://www.naver.com");
aEl.innerHTML="<i>네이버로</i>";
aEl.toggleAttribute('disabled',true)




// aEl.setAttribute('disabled','')
// const disabledAttr = document.createElement('disabled')
// aEl.attributes.setNamedItem(disabledAttr)


aEl.attributes.getNamedItem("href")
// console.log(aEl.innerHTML)
// console.log(aEl.textContent)
bodyEl.appendChild(sectionEl);
sectionEl.appendChild(aEl);
//
// const btn =document.querySelector('button');
//
// // const btn1 =document.querySelector("button");
//
// console.log(btn.innerHTML);
// console.log(btn.innerText);
// console.log(btn.textContent);