var [bt1,btn2] = document.querySelectorAll("button")
var user = document.getElementById("user-id")
var computer = document.getElementById("computer-id-id")




btn2.onclick = ()=>{
    console.log("12")
    window.location.href = "game_fight.html";
}


setInterval(random,1)


function random(){
    Math.floor(Math.random()*3)
}