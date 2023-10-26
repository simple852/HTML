const inputTag = document.createElement('input');
const inputTag2 = document.createElement('input');
const buttonTag = document.createElement('button')
const buttonTag2 = document.createElement('button')
inputTag.type="text";
inputTag.placeholder="입력해주세요"
inputTag2.type="number";
inputTag2.placeholder="추가할 번호"
buttonTag.textContent="추가"
buttonTag2.textContent="삭제"
document.body.appendChild(inputTag);
document.body.appendChild(inputTag2);
document.body.appendChild(buttonTag);
document.body.appendChild(buttonTag2);
var i =1;
function  create(number){
    const divTag = document.createElement('div');
    const spanTag = document.createElement('span');
    const bTag = document.createElement('b');
    spanTag.innerHTML =inputTag.value ;
    bTag.style.color="red"
    if(inputTag2.value === '' ){
        bTag.innerHTML = `<br>` + `${i} .`;
    }else{
        bTag.innerHTML = `<br>` + `${number} .`;

    }
    const numberValue = inputTag2.value
    const divs = document.getElementsByTagName('div')
    if( inputTag2.value === '' || numberValue > divs){
        document.body.insertAdjacentElement('beforeend',divTag);
        document.body.insertAdjacentElement('beforeend',bTag);
        document.body.insertAdjacentElement('beforeend',spanTag);
        i++;
console.log('뭐지')
    }else{

    }


}

inputTag.onkeyup= (event)=>{
    if(event.key === 'Enter' && inputTag.value !== ''){
        create();
    }else if(inputTag.value=== ''){
        alert("입력하셔야합니다")
    }
}

buttonTag.onclick= (event)=>{
    if(inputTag.value !== ''){
        create();
    }else if(inputTag.value=== ''){
        alert("입력하셔야합니다")
    }
    // else if(inputTag2.value !== ''){
    //
    //     console.log(inputTag2.value)
    //     create(inputTag2.value)
    // }
}

buttonTag2.onclick= (event)=>{
    var spanlast = document.querySelectorAll('div').item(parseInt(inputTag2.value))

    if(spanlast!==buttonTag2){
        spanlast.remove()

    }
    // var divs = document.getElementsByTagName('div')
    // for(var i=0; i<divs.length; i++){
    // divs[i].querySelectorAll('span').innerText =`${i+1}`
    // }


}