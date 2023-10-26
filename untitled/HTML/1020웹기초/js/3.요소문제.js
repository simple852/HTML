//사용자에게 prompt로 숫자를 입력받고 ,
//1부터 해당 숫자까지의 모든 6의 배수를 판단한 후,
//모든 6의 배수를 출력하고
// 총 개수를 표시하시오
//결과는 빨간색
var input = prompt('6의 배수를 전부 찾을 수 입력');

var arr = [];
var count = 0;
for(let i = 1; i<= parseInt(input); i++){
    if(i % 6 === 0){
        arr.push(i)
        count++;

    }
}

var number = document.querySelector('div')
number.innerText = `${arr}`;

var resultDiv = document.getElementsByClassName("result");
console.log(resultDiv)
resultDiv[0].style.color="red"
resultDiv[0].innerText=`결과는 ${count} 입니다`;

