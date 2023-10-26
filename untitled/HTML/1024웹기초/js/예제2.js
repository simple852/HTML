const contentTag = document.getElementById("todo");
const deleteBtn = document.getElementById("delete");
const completeBtn = document.getElementById("complete");
const textContent = document.getElementById("textContent");
const checkAll = document.getElementById("checkAll");


const list = document.getElementById("list");
var index= 0;
var i =0;
completeBtn.onclick = addContent;


function selectAll(selectAll)  {
    const checkboxes
        = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked
    })
}

function deleteFunc(){
    const checked
        = document.querySelectorAll('input[checked]');
    checked.forEach((checkbox) => {
        checkbox.checked.remove()
    })
}



function addContent() {

    const div = document.createElement("div")
    div.insertAdjacentHTML('beforeend',`

    <input type="checkbox">
    <span>${contentTag.value}</span>
    <div id="contentValue" style="display:none">${textContent.value}</div>
    <button id="listBtn" onclick = "addTextContent(this)">할일목록</button><br>
    
    `)
    document.getElementById("contentValue");
    list.append(div)
    index++;
}


function addTextContent() {
    var hide = document.querySelectorAll("button[id=lisBtn]");


        hide.item(number)
            // .style.display = "";
        console.log( hide.item(number))
        console.log( number)


    // console.log(hide)
}
