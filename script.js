let boxes = document.querySelectorAll(".box");
let resBtn =document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#newgame-btn");
let msgContainer =document.querySelector(".msg-container");
let msg =document.querySelector(".msg");



let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame =()=>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
   // console.log(box);
    box.addEventListener("click", () =>{
        //  console.log("box was cliked");
        if(turnO) {
            box.innerText ="O";
            turnO =false;
            box.classList.add("o-color");
        } else{
            box.innerText ="X";
            turnO = true;
            box.classList.add("x-color");
        }
        box.disabled = true;

        checkWinner()
        })   
});

const disableBoxes =() =>{
    for(let box of boxes) {
        box.disabled = true;
    }
};


const enableBoxes =() =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};



const showWinner =(winner) =>{
    msg.innerText =`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");

}
const checkWinner= () => {
    for( let patterns of winPatterns){
            let pos1val =boxes[patterns[0]].innerText;
            let pos2val =boxes[patterns[1]].innerText;
            let pos3val =boxes[patterns[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val === pos2val  && pos2val === pos3val  ){
                console.log("winner",pos1val);
                disableBoxes();
                showWinner(pos1val);
                return;
            }
        }
    } 
};

newGameBtn.addEventListener("click",resetGame);
resBtn.addEventListener("click",resetGame);
