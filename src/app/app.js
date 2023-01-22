const screen = document.getElementById("screen");

const numberButtons = document.getElementsByClassName("numberButton");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalButton = document.getElementById("equal");
const backspaceButton = document.getElementById("backspace");
const clearButton = document.getElementById("clear");

let savedNumber = 0;
let lastFunction = "";
let newNumber = "false";
// console.log(numberButtons);
// screen.innerText = buttons;

function clearScreen(){
    screen.innerText = "";
}

function addButtonsFunctions(){
    addNumbersButtonsFunction();
    addBackspaceButtonFunction();
    addClearButtonFunction();
    addAddButtonFunction();
    addSubtractButtonFunction();
    addMultiplyButtonFunction();
    addDivideButtonFunction();
    addEqualButtonFunction();

}

function addNumbersButtonsFunction(){
    for(let i=0; i< numberButtons.length; i++){
        numberButtons[i].onclick = function(){
            if(newNumber == "true"){
                newNumber = "false";
                screen.innerText = numberButtons[i].innerText;
            } else {
                if(screen.innerText != 0){
                    screen.innerText += numberButtons[i].innerText;
                } else {
                    screen.innerText = numberButtons[i].innerText;
                }
            }
            
        }
    }
}

function addBackspaceButtonFunction(){
    backspaceButton.onclick = function(){
        if(screen.innerText >= 0){
            screen.innerText = Math.floor(screen.innerText / 10);
        } else {
            screen.innerText = Math.floor(screen.innerText / 10) + 1;
        }
    }
}

function addClearButtonFunction(){
    clearButton.onclick = function(){
        savedNumber = 0;
        newNumber = "true"
        lastFunction = "";
        clearScreen();
    }
}

function addAddButtonFunction(){
    addButton.onclick = function(){        
        executeLastFunction();
        lastFunction = "add";
    }    
}

function addSubtractButtonFunction(){
    subtractButton.onclick = function(){        
        executeLastFunction();        
        lastFunction = "subtract";
    }    
}

function addMultiplyButtonFunction(){
    multiplyButton.onclick = function(){        
        executeLastFunction();
        lastFunction = "multiply";
    }    
}

function addDivideButtonFunction(){
    divideButton.onclick = function(){        
        executeLastFunction();
        lastFunction = "divide";
    }    
}

function addEqualButtonFunction(){
    equalButton.onclick = function(){        
        executeLastFunction();        
        lastFunction = "";
    }    
}

function executeLastFunction(){
    
    switch(lastFunction){
        case "":
            if(screen.innerText !="")
            savedNumber = parseInt(screen.innerText);
            break;
        case "add":
            savedNumber += parseInt(screen.innerText);
            break;
        case "subtract":
            savedNumber -= parseInt(screen.innerText);
            break;
        case "multiply":
            savedNumber *= parseInt(screen.innerText);
            break;
        case "divide":
            if(parseInt(screen.innerText)!=0){
                savedNumber /= parseInt(screen.innerText);
            } else {
                alert('Dividing by 0!');
            }
            break;
    }
    newNumber = "true";
    screen.innerText = savedNumber;
}

clearScreen();
addButtonsFunctions();