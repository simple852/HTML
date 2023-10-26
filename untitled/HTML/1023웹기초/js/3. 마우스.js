const box = document.querySelector('div')
box.style.width = '100px'
box.style.height = '100px'
box.style.backgroundColor = 'beige'





box.onclick= ()=>{
    box.style.backgroundColor="red";
}

box.ondblclick= ()=>{
    box.style.backgroundColor="blue";
}
box.onmousedown= ()=>{
    box.style.backgroundColor="black";
}
box.onmouseup= ()=>{
    box.style.backgroundColor="pink";
}
box.onmouseenter= ()=>{
    box.style.backgroundColor="pink";
}
box.onmouseover= ()=>{
    box.style.backgroundColor="green";
}
box.onmouseleave= ()=>{
    box.style.backgroundColor="red";
}

box.addEventListener('click',mouseEvents);
function  mouseEvents(event){
    console.log(event)
    console.log('screen X/Y',event.screenX,event.screenY)
    console.log('page X/Y',event.pageX,event.pageY)
    console.log('client X/Y',event.clientX,event.clientY)
    console.log('offset X/Y',event.offsetX,event.offsetY)

}
//clientX, Y
// 클라이언ㄷ트 영역의 좌표로 현재 보이는 브라우저 화면이 기준

//offsetX, Y
// 이벤트 대상 기준. 박스를 클릭했다면 박스의 맨 왼쪽 위가 (0,0)으로 되어 그 좌표를 기준으로의 위치

//pageX,Y
//스크롤 화면을 포함해서 전체 페이지 크기 기준으로 위치

//ScreenX,Y
// 전체 모니터 화면 기준 x,y 위치(브라우저 창 상관없이)