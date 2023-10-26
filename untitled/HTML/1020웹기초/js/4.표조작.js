var table = document.querySelector("table")
table.caption.innerHTML="변경된 제목";
const tbody = table.tBodies[0]
const secondTy = tbody.rows[2];
secondTy.style.backgroundColor='yellow';


const newTr = tbody.insertRow(2)
// const newFirstTd =newTr.insertCell(0)
// newFirstTd.innerHTML="새거";
//
// const newSecondTd =newTr.insertCell(1)
// newSecondTd.innerHTML="새거";



for(let i=0; i<4; i++){
   tbody.insertRow(1).insertCell(0).innerHTML=i;

}
