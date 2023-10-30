
var user = document.getElementsByClassName("user")[0]
var computer = document.getElementsByClassName("computer")[0]
var [btn1,btn2,btn3] = document.querySelectorAll("button")
var score1 = document.getElementById("score1")
var score2 = document.getElementById("score2")
var localScore = localStorage.getItem("score")
var nickName_db = localStorage.getItem("nickName")
var nowScore = document.getElementById("nowScore")
const urlParams = new URL(location.href).searchParams;
const nickName = urlParams.get('nickName');
let count = urlParams.get('count');

if(count < 0){
    count =1;
}
if(nickName_db===nickName ){
    nowScore.innerText =localScore
}else{
    console.log("있다")
    nowScore.innerText ="1000"
}


value1 = btn1.value
value2 =btn2.value
value3 =btn3.value
var randResult =0;
let gogo;

btn1.onclick = ()=>{choice(value1)}
btn2.onclick = ()=>{choice(value2)}
btn3.onclick = ()=>{choice(value3)}

function random(){

    var randNum = Math.floor(Math.random() * ( 4 - 1 )) + 1
    if(randNum === 1){

        computer.style.backgroundImage = "url(image/가위.png)";
    }else if(randNum ===2){

        computer.style.backgroundImage = "url(image/바위.png)";
    }else{

        computer.style.backgroundImage = "url(image/보.png)";
        }

    return randNum;
}

function random2(){
    var randNum = Math.floor(Math.random() * ( 4 - 1 )) + 1
    if(randNum === 1){

        user.style.backgroundImage = "url(image/가위.png)";
    }else if(randNum ===2){

        user.style.backgroundImage = "url(image/바위.png)";
    }else{

        user.style.backgroundImage = "url(image/보.png)";
    }


}

function choice(value){
console.log(value)
    if(value === "1"){
        user.style.backgroundImage = "url(image/가위.png)"
    }else if(value === "2"){
        user.style.backgroundImage = "url(image/바위.png)"
    }else if(value === "3"){
        user.style.backgroundImage = "url(image/보.png)"
    }

    var randUserNumber = Math.floor(Math.random() * ( 4 - 1 )) + 1

    computerStop(value)
    stop()
}

function computerStop(value){
    btn1.disabled =true
    btn2.disabled =true
    btn3.disabled =true
console.log("ds")
    var qwer=0;
   var randMake =  setInterval(()=>{ qwer = random()},400)
   var randUserMake =  setInterval(()=>{ random2()},400)

    setTimeout( ()=>{
        clearInterval( randUserMake)
       clearInterval( randMake)
        setTimeout( ()=>{
            winner(value,qwer)
        },100)

    },5000 )


    // setTimeout(()=>{  winner(value,gogo)},5000)

    stop()
}

function winner(a,b){
    var live_score1 = document.getElementById("score1").innerText
    var live_score2 = document.getElementById("score2").innerText
    var showWinner = document.getElementById("winner")
    var live_nowScore = document.getElementById("nowScore").innerText
    if(a === "1"){
        user.style.backgroundImage = "url(image/가위.png)"
    }else if(a === "2"){
        user.style.backgroundImage = "url(image/바위.png)"
    }else if(a === "3"){
        user.style.backgroundImage = "url(image/보.png)"
    }
    if(parseInt(a) ===1){
        console.log(a, b + "결과값")
        if(b===1){
            console.log(live_nowScore)
            console.log("무승부")
            showWinner.innerText  = "DRAW"
        }else if(b === 2){
            console.log(live_nowScore)
            console.log("컴퓨터 윈")
            nowScore.innerHTML = (parseInt(live_nowScore)-100).toString();
            score2.innerHTML = (parseInt(live_score2 )+1).toString();
            showWinner.innerText  = "COMPUTER WIN"
        }else{
            console.log(live_nowScore)
            console.log("유저 윈")
            nowScore.innerHTML = (parseInt(live_nowScore)+100).toString();
            score1.innerHTML = (parseInt(live_score1)+1).toString();
            showWinner.innerText = "USER WIN"
        }

    }else if(parseInt(a) ===2){
        if(b===1){
            console.log("유저 윈")
            nowScore.innerHTML = (parseInt(live_nowScore)+100).toString();
            score1.innerHTML = (parseInt(live_score1)+1).toString();
            showWinner.innerText = "USER WIN"
        }else if(b ===2){
            console.log("무승부")
            showWinner.innerText  = "DRAW"
        }else{
            console.log("컴퓨터 윈")
            nowScore.innerHTML = (parseInt(live_nowScore)-100).toString();
            score2.innerHTML = (parseInt(live_score2 )+1).toString();
            showWinner.innerText  = "COMPUTER WIN"
        }
    }else{
        if(b===1){
            console.log("컴퓨터 윈")
            nowScore.innerHTML = (parseInt(live_nowScore)-100).toString();
            score2.innerHTML = (parseInt(live_score2 )+1).toString();
            showWinner.innerText  = "COMPUTER WIN"
        }else if(b===2){
            console.log("유저 윈")
            nowScore.innerHTML = (parseInt(live_nowScore)+100).toString();
            score1.innerHTML = (parseInt(live_score1)+1).toString();
            showWinner.innerText = "USER WIN"
        }else{
            console.log("무승부")
            showWinner.innerText  = "DRAW"
        }
    }
    btn1.disabled =false
    btn2.disabled =false
    btn3.disabled =false

    localStorage.setItem("score",nowScore.innerHTML)
    localStorage.setItem("nickName",nickName)


  setTimeout( ()=>{
      if(score1.innerText === count.toString()){
          alert("승리하셨습니다")
          setTimeout(location.href="game_main.html", 1500)
      }else if(score2.innerText === count.toString())
      {
          alert("패배하셨습니다")
          setTimeout(location.href="game_main.html", 1500)
      }
  },2000)





    return false;
}