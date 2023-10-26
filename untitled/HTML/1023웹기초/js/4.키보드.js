const textArea = document.querySelector('textarea')
const divTag= document.createElement('div')
document.body.insertBefore(divTag,textArea)
divTag.innerText = "영자 10자 이하만 입력가능합니다"
textArea.onkeydown = (event) => {
    textArea.style.color='red';
    textArea.innerText.length

}
textArea.onkeyup = () => {
    textArea.style.color='blue';
}


