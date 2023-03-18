var button = document.getElementById("enter");
var button1 = document.getElementById("remove");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//determines character length of input 
function inputLength(){
    return input.value.length;
}


// Creates list item
function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + '        '));
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


// Adds cross through action when done is pressed 
function underlineParent(event){
    event.target.parentNode.classList.toggle("done");
}

//deletes child from list 
function removeParent(evt){
    evt.target.parentNode.remove("delete");
}

//clears list 
function removeAll(){
    document.getElementById("list").innerHTML = "";
}
//adds to list when button is clicked 
function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

//enter key also adds to list 
function  addListAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode===13){
        createListElement();
    }
}


//event listeners 
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);