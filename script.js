var button = document.getElementById("enter");
var button1 = document.getElementById("remove");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function removeListElement(){
    var li = document.getElementById("li");
    // li.appendChild(document.createTextNode(input.value));
    ul.removeChild(li);
    input.value = "";
}

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

function  addListAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode===13){
        createListElement();
    }
}

function removeListAfterClick(){
    if(inputLength() > 0){
        removeListElement();
    }
}

button.addEventListener("click", addListAfterClick);
button.addEventListener("click", removeListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);