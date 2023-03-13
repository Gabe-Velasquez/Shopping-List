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

    var button = document.createElement("button");
    button.appendChild(document.createTextNode("Done!"));
	li.appendChild(button);
	button.onclick=underlineParent;

    var button =document.createElement("button");
    button.appendChild(document.createTextNode("Delete"));
    li.appendChild(button);
    button.onclick=removeParent;
}
function underlineParent(event){
    event.target.parentNode.classList.toggle("done");
}

function removeParent(evt){
    evt.target.parentNode.remove("delete");
}

function removeAll(){
    document.getElementById("list").innerHTML = "";
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



button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);