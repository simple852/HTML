const wordDiv = document.querySelector('.word');
const answerDiv = document.querySelector('.answer');
let life = 5; //최대 기회
const lifeTag = document.querySelector('.life')
const imgTag = document.querySelector('img')
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'
    , 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const answerFoods = ['orange', 'apple', 'banana'];
const answerAnimals = ['hamster', 'dog', 'cat']
const answerSubjects = { Food: answerFoods, Animals: answerAnimals};
const images = [
    "images/img.png",
    "images/img_1.png",
    "images/img_2.png",
    "images/img_3.png",
    "images/img_4.png",
];
function change_life(){
    lifeTag.innerText=life;
}
// 알파벳 버튼을 생성하는 곳
function create_words(){
    wordDiv.innerHTML="";
    alphabets.forEach(alphabet => {
        const wordBtn = document.createElement('button');
        wordBtn.innerText = alphabet.toUpperCase();
        wordBtn.onclick = clicked_words;
        wordDiv.appendChild(wordBtn);
    });
}
// 정답표 부분을 생성한다
function create_answer_sheet(subject){
    answerDiv.innerHTML="";
    let answer;
    switch (subject){
        case "food":
            answer = answerSubjects.Food[
                Math.floor(Math.random() * answerSubjects.Food.length)
                ];
    }
    for(let i of answer){
        const divTag = document.createElement('div');
        const spanTag = document.createElement('span');
        spanTag.innerText = i.toUpperCase();
        spanTag.className = 'invisible';
        divTag.appendChild(spanTag);
        answerDiv.appendChild(divTag);
    }
}
// 각 알파벳 버튼을 클릭했을 때 동작
function clicked_words(event){
    // 클릭한 알파벳

    if(!check_answer(event)){
        life--;
        change_image();
        change_life();
        if(life == 0){
            alert("실패!")
            init()
        }
    }

}

//알파벳이 맞은것이 있는지 없는지 검사
function check_answer(event){
    const clickedWord = event.target.innerText;
    let changed = false;
    [...answerDiv.getElementsByTagName('div')].forEach( div => {
        const span = div.querySelector('span');
        // 클릭한 알파벳과 정답 중 일치하는 알파벳이 있다?
        if(span.innerText === clickedWord){
            // event.target.disabled =true;
            event.target.remove()
            div.style.backgroundColor = 'red';
            // class를 제거함으로서 눈에 보이게 변경함
            span.removeAttribute('class');
            changed = true;
        }
    });
    return changed;
}


function change_image(){
    imgTag.src = images[life-1];
}
function init(){
    life = 5;
    create_words();
// 정답을 생성한다
    create_answer_sheet('food');
    //life 셋팅
    change_life();
    //image 셋팅
    change_image();


}
// 알파벳들을 생성한다

init()



