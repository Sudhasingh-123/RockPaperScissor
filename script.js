let userScore = 0;
let CompScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const CompScorePara = document.querySelector("#comp-score")

const genCompChoice = () =>{
    const options =["rock", "paper", "scissors"]
    // rock, paper,scissor comp has to select any random among these three
    // to fir computer se random options choose karane ke liye will use math.random which will select any no between 0 to 1 to fir jab random strings choos karna ho to we will store it in array so that through index we can select 
    const randIdx = Math.floor(Math.random()*3)
    return options[randIdx];

}

const drawGame =() => {
    console.log("game was draw.");
    msg.innerHTML = "Game was Draw!";
}

const showWinner = (userWin, userChoice, CompChoice) => {
    if(userWin) {
        userScore++
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerHTML = `You Win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        CompScore++
        CompScorePara.innerText = CompScore;
        console.log("you lose");
        msg.innerHTML = `You Lose! ${CompChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    //Generate comp choice -> modular -> means har ek kam ke liye ek fuction banaye
    const CompChoice = genCompChoice();
    console.log("comp choice = ", CompChoice);
   
    if(userChoice == CompChoice) {
       drawGame();
    }else {
        let userWin = true;    // scissor, paper
        if(userChoice === "rock") {
           userWin = CompChoice === "paper" ? false: true;
        }else if(userChoice === "paper") {   // scissor rock
           userWin = CompChoice === "scissors" ? false: true;
        }else if(userChoice === "scissors") {        //rock paper
           userWin = CompChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, CompChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})