const textInput = document.querySelector('input');
const button = document.querySelector('button');
const numberInput = document.querySelector('input[type=number]')
const btn2 = document.querySelector('button#btn2');
let index = 1;
button.onclick = create_div;
textInput.onkeydown = create_div;
// div를 생성하는 기능
function create_div(event){
    // key이벤트가 발생했고, 누른 key가 Enter가 아니면 아무것도 하지마라
    if(undefined != event.key && event.key !== 'Enter'){
        return;
    }
    if(textInput.value.trim() === ''){
        alert('입력하라니까..?');
        return;
    }
    const numberValue = numberInput.value;
    const divs = document.getElementsByTagName('div');
    if(/\d/.test(numberValue) || numberValue === ''){
        if(+numberValue <= divs.length) {
            // div 요소를 만든다
            const div = document.createElement('div');
            div.insertAdjacentHTML('beforeend',
                `<span class="red">${index}.</span>
            <span>${textInput.value}</span>`);
            // 넣을 위치의 자식의 전 위치에 insert한다
            document.body.insertBefore(div, divs[numberValue - 1])
            index++;
            number_reset();
        }
    }
}

// 1번부터 다시 번호를 매기는 함수
const divs = document.getElementsByTagName('div');
function number_reset(){
    for(let i = 0; i < divs.length; i++){
        divs[i].querySelector('span').innerText = `${i+1}.`;
    }
}

btn2.onclick = () => {
    // if (numberInput.value === divs.)
}









