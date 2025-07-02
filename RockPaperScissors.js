let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msgContainer=document.querySelector(".msg");
let userScoreBoard=document.querySelector(".user-Score")
let compScoreBoard=document.querySelector(".comp-Score")

let genCompChoice=()=>{
    let compOptions=["rock","paper","scissors"];
let compChoice=Math.floor((Math.random())*3);
return compOptions[compChoice];
}

const drawGame=()=>{
    // console.log("The Game was Draw");
    msgContainer.innerText="The Game is draw.Play again!";
     msgContainer.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("You win!");
        userScore++;
        userScoreBoard.innerText=userScore;
       msgContainer.style.backgroundColor="green";
        msgContainer.innerText=`You win . Your ${userChoice} beats ${compChoice}.`;
    }
    else{
        // console.log("You lost!");
        compScore++;
        compScoreBoard.innerText=compScore;
         msgContainer.style.backgroundColor="red";
        msgContainer.innerText=`You lose. ${compChoice} beats your ${userChoice}.`;
    }
}

let playGame=(userChoice)=>{
console.log("user's choice is ",userChoice);
//compChoice generation
let compChoice=genCompChoice();
console.log("computer's choice is",compChoice);

if(userChoice===compChoice){
    drawGame();
    return;
}
let userWin
if(userChoice==="rock"){
    userWin= compChoice==="paper" ? false : true;
}
else if(userChoice==="paper"){
     userWin=compChoice==="scissors" ? false : true;
}
else {
userWin=compChoice==="rock" ? false : true;
}
showWinner(userWin,userChoice,compChoice);
}

choices.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
        let userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    })
})