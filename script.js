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

 function playRound (humanChoice, computerChoice){
    if (humanChoice === 'rock' && computerChoice ==='paper'){
        computerScore ++
         return 'You Lose! Paper beats Rock'
    } else if (humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore ++
        return 'You win!! Paper beats Rock'
    } else if (humanChoice === computerChoice){
        return  'Draw! You both have the same value!'
    } else if (humanChoice === 'rock' && computerChoice ==='scissors') {
        humanScore ++
        return 'You Win! Rock beats Scissors'
    } else if (humanChoice === 'scissors' && computerChoice ==='rock') {
        computerScore ++
        return 'you Lose!!! Rock beats Scissors'
    } else if ( humanChoice === 'scissors' && computerChoice === 'paper'){
        humanChoice ++
        return 'You Win! Scissors beat Paper'
    } else if (humanChoice === 'paper' && computerChoice === 'scissors'){
        computerChoice ++
        return 'You Lose!!! Scissors beat Papaer'
    }
 }



function playGame (){

    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)


    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice)
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    
    playRound(humanChoice, computerChoice)
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    
    playRound(humanChoice, computerChoice)
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)

   if(humanScore > computerScore){
    console.log('i')
   } else {
    console.log('f')
   }
     
}
console.log(playGame());

