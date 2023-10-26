const divTag= document.querySelector('div')
const imgTag= document.querySelector('img')
const sectionTag= document.querySelector('section')
divTag.style.borderStyle= "2px solid black";
sectionTag.setAttribute("draggable","true")






imgTag.ondragenter = (ev)=>{
    ev.dataTransfer.setData('text/plain',imgTag.getAttribute('src'))
    console.log(imgTag.src)

}


sectionTag.ondragstart=(ev)=>{
    const text = sectionTag.innerText;
    ev.dataTransfer.setData("text/plain", getComputedStyle(sectionTag)
        .backgroundColor+ "%%&"+ text)
    // ev.dataTransfer.setData("text/plain", "안녕")
    // console.log("드래그 시작")
}
sectionTag.ondrag=()=>{
    // console.log("드래그중")
}

sectionTag.ondragend=()=>{
    // console.log("드래그끝")
    // divTag.style.backgroundColor= getComputedStyle(sectionTag).backgroundColor
}
divTag.ondragenter = (ev)=>{

    console.log("요소가 들어옴")
}
divTag.ondragover = (event)=>{
    event.preventDefault()
    // console.log("요소가 나감")
}
divTag.ondragend = ()=>{
    console.log("요소가 끝")
}
divTag.ondrop = (ev)=>{
    var data =  ev.dataTransfer.getData("text/plain")



    console.log(data)


    if(data.startsWith("http")){
       const imgTag =  document.createElement('img')
        imgTag.src =text;

    }
    var [bgColor,text] = data.split('%%&')
    divTag.style.backgroundColor=bgColor;
    divTag.innerText= text;


    console.log(bgColor)
}


