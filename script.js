function getComputerChoice () {
    let random = Math.floor(Math.random()*3)
    if (random === 1) {
        return "rock"
    } else if (random === 2){
        return "paper"
    }
    else {
        return "scissors"
    }
}
getComputerChoice ()
console.log(getComputerChoice());


function getHumanChoice () {
    let something = prompt('rock, paper, scissors?');
    return something.toLowerCase()
}   
console.log(getHumanChoice);

let humanScore = 0
 let computerScore = 0
 const disp = document.querySelector('.scoredisplay');
 



const res = document.querySelector(".resultdisplay");
    

 function playRound (humanChoice, computerChoice){

    if (humanScore >= 3){
        disp.textContent = "you won the game"
            
         } else if (computerScore >= 3) {
            disp.textContent = "computer won the game"
           
         }

    if (humanChoice === 'rock' && computerChoice ==='paper'){
        computerScore ++
        res.textContent = "You Lose! Paper beats Rock"
         return 'You Lose! Paper beats Rock'
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore ++
        res.textContent = "You win!! Paper beats Rock"
        return 'You win!! Paper beats Rock'
    } else if (humanChoice === computerChoice){
        res.textContent = "Draw! You both have the same value!"
        return  'Draw! You both have the same value!'
    } else if (humanChoice === 'rock' && computerChoice ==='scissors') {
        humanScore ++
        res.textContent = "You Win! Rock beats Scissors"
        return 'You Win! Rock beats Scissors'
    } else if (humanChoice === 'scissors' && computerChoice ==='rock') {
        computerScore ++
        res.textContent = "you Lose!!! Rock beats Scissors"
        return 'you Lose!!! Rock beats Scissors'
    } else if ( humanChoice === 'scissors' && computerChoice === 'paper'){
        humanChoice ++
        res.textContent = "You Win! Scissors beat Paper"
        return 'You Win! Scissors beat Paper'
    } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        computerChoice ++
        res.textContent = "You Lose!!! Scissors beat Papaer"
        return 'You Lose!!! Scissors beat Papaer'
    }
 }



function playGame (){
    

     
     
}
console.log(playGame());

const mkm = document.body.querySelector(".oneb");
    mkm.addEventListener ("click", function() {playRound('rock', getComputerChoice())})


const two = document.body.querySelector(".twob")
    two.addEventListener ("click", function() {playRound('paper', getComputerChoice()) });


 const tr = document.body.querySelector(".bb")
    tr.addEventListener ("click", function() {playRound ('scissors', getComputerChoice())});


