const textInput = document.querySelector('input')
textInput.setAttribute('value', '안녕')
textInput.value='hello';
const checkInput = document.querySelector('input[type="checkbox"]')
// checkInput.toggleAttribute('checked', 'true')
checkInput.checked =true ;

const [radio1, radio2] = document.querySelectorAll(`input[type="radio"]`)
console.log(radio1.name)

radio1.checked = true;


const textArea = document.querySelector('textarea');
textArea.innerText= '       하이요!'
textArea.rows = 2;
textArea.cols = 10;
textArea.style.resize = 'none';

const selectBox = document.querySelector('select')
selectBox.options.item(0)
for (let i = 0; i < 10; i++) {

    selectBox.insertAdjacentHTML('beforeend',`<option value="">${i}</option>`)
}
