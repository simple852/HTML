const btns = document.getElementsByTagName('button')
const textDiv = document.querySelector('div.text');
window.onkeydown = text_input

Array.from(btns).forEach((btn)=>{
    btn.onclick = text_input;
})


//버튼 눌렀거나 화면에서 키보드 입력했을 때 화면에 표시되게 함
function text_input(event){
    //이벤트가 발생한 대상을 가져온다.
    const eventTarget = event.target

    //키 누른게 아니라 버튼 클릭임
    if(event.key === undefined){

        if(eventTarget.innerText !=='Enter' && check_text(eventTarget.innerText) ){ // && check_text(eventTarget.innerTex)
            //이ㅣ벤트가 발생한 대상의 글자로 text를 변경한다.
            textDiv.innerHTML += eventTarget.innerText;
        }else if(eventTarget.innerText ==='Enter'){
            calc_text()
        }
    }
    // 키를 눌ㄹ렀다.
    else{
        const keyRegExp = /[0-9.+/*-]/g
        if(event.key === 'Backspace'){
            textDiv.innerText = textDiv.innerText.slice(0,-1);
        }
        else if(event.key === 'Escape'){
            textDiv.innerText ='';
        }
        else if(keyRegExp.test(event.key)  && check_text(event.key)){
            textDiv.innerHTML += event.key;

        }else if(event.key ==='Enter'){
            calc_text();
        }
    }

}
function check_text(keyText){
    const nowText = textDiv.innerText
    const lastOperSplit = nowText.split(/[+/*-]/g);
    //시작은 숫자부터가능
    if(nowText ==='' && /[0-9]/g.test(keyText)){
        return true
    }
    console.log(textDiv.innerText.length)
//연산자 뒤에는 숫자만
   if(/[+*/-]/g.test(nowText[nowText.length-1])&& /[0-9]/g.test(keyText) ){
       return true;
   }

   if(nowText[nowText.length-1] === '.' && /[0-9]/g.test(keyText) ){
       return true;
   }
   if( lastOperSplit[lastOperSplit.length-1].includes('.') && keyText==='.'){
       return false;
   }
    //앞이 숫자면 뭐든 입력가능

    if(/[0-9]/g.test(nowText[nowText.length-1])){
        return true;
    }


   return false;






} // keyTExt: 내가 방금 입력한 글자/숫자

//현재까지 작성되어있는 글자를 계산한다.
function calc_text(){
    const numberCheck = /[0-9]/g
    if(/\d/.test(textDiv.innerText[textDiv.innerText.length-1])){
        textDiv.innerHTML=  eval(textDiv.innerText);
    }


    //eval 함수를 사용하여 수식을 넣어서 계산한다, 글자를 변경한다.


}

