const [b1,b2,b3] = document.getElementsByTagName('button')
function  change_color(data){
    b2.style.backgroundColor = "red";
}
function  change_color2(color){
    b2.style.backgroundColor=color;
}
function a(){
    console.log('a')
}

// b2.onclick = ()=>{change_color2("blue")}
b3.addEventListener('click',()=>{change_color2(data)})
b3.addEventListener('click',a)
