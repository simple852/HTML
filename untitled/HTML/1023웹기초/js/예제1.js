const [colorInput,fontColor] = document.querySelectorAll('input');
const divTag = document.querySelector('div');

colorInput.onchange = ()=>{
    console.log(colorInput.value);
    divTag.style.color = colorInput.value;
}



fontColor.onchange = ()=>{
    console.log(fontColor.value);
    divTag.style.backgroundColor = fontColor.value;
}

var buttonTag = document.createElement('button')
var colorTag = document.createElement('input')
colorTag.setAttribute('type', "color")


buttonTag.style.width = "50px"
buttonTag.style.height = "50px"


divTag.insertBefore(buttonTag, divTag.firstChild)
buttonTag.insertAdjacentElement('afterend',colorTag)

var colorChange = colorTag.value;
var i = 0;



buttonTag.onclick = ()=>{
    var addDivTag = document.createElement('div')
    addDivTag.style.width = "150px"
    addDivTag.style.height = "50px"
    addDivTag.style.backgroundColor =  colorTag.value
    addDivTag.innerText = `박스${i}`
    divTag.appendChild(addDivTag)

    i++;
}
