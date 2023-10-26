const textAreaTag = document.querySelector('textarea')
const [spanTag1,spanTag2,spanTag3] = document.querySelectorAll('span')
console.log(textAreaTag)
const maxText = 10;
let count = 0;
const now = new Date();

const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDay();
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

time = [year,month,day,hour,min,sec]

function checkLength(){
   textAreaTag.onkeyup = (event) => {
      spanTag1.innerText = `${textAreaTag.value.length}`


      console.log(count)
      if (textAreaTag.value.length > maxText) {
         spanTag3.innerText = "글자수가 초과되었습니다"
      }else{
         spanTag3.innerText = ""
      }
   }
}

function  create_comment(){
   const commentDiv = document.createElement('div');
   commentDiv.className = 'comment';

   commentDiv.insertAdjacentHTML('beforeend',
       `<div>${textAreaTag.value}</div>`
       `<div>${time}</div>`
   )
  document.body.appendChild(commentDiv)
}


textAreaTag.addEventListener("input",checkLength)

