let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-conatainer")
let msg = document.querySelector("#msg")
let turnO = true; //player x or y

let WinPatterns = [
    [0 ,1 ,2],
    [0 ,3 ,6],
    [0 ,4 ,8],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [2 ,4 ,6],
    [3 ,4 ,5],
    [6 ,7 ,8],
];

const resetGame  = ()=>{
    turnO = true;
    enabledBoxes();
    msg.innerText = ""
}

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if (turnO) {
        console.log("box was clicked");
        box.innerText = "O"
        turnO = false
        } else {
        console.log("box was clicked");
        box.innerText = "x"
        turnO = true
        }
        box.disabled = true
        checkWinner();
    })
})

const disabledBoxes = ()=>{
         for (let box of boxes) {
            box.disabled = true;
         }
}

const enabledBoxes = ()=>{
    for (let box of boxes) {
       box.disabled = false;
       box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerHTML =`Congratulations,Winner is ${winner}`
    // msgContainer.classList.remove("hide")
    disabledBoxes();
}

const  checkWinner = ()=>{
    for (pattern of WinPatterns) {
    let pos1val = boxes[pattern[0]].innerText
    let pos2val = boxes[pattern[1]].innerText
    let pos3val = boxes[pattern[2]].innerText


    if (pos1val != "" &&pos2val != "" &&pos3val != "") {
        if (pos1val === pos2val && pos2val === pos3val) {
            console.log("winner",pos1val);
            showWinner(pos1val);
        }
        
    }
    }
}


newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)