let playerScore=0;
function computerChoice(){
    let randomNumber = Math.floor(Math.random()* (3))+1;
    switch(randomNumber){
        case 1 : 
            return "rock";
            break;
        case 2:
            return "scissor";
            break;
        case 3:
            return "paper";
            break;
        default:
            return "something went wrong";
            break;
    }
}
function playerChoice(start){
    let player = start;
    return player;
}
function scissorChoice(){
    let result = playRound(playerChoice("scissor"),computerChoice());
    console.log(result);
    const output = document.querySelector('.respond');
    output.textContent = result;
   
}
function paperChoice(){
    let result = playRound(playerChoice("paper"),computerChoice());
    console.log(result);
    const output = document.querySelector('.respond');
    output.textContent = result;
 }
 function rockChoice(){
    let result = playRound(playerChoice("rock"),computerChoice());
    console.log(result);
    const output = document.querySelector('.respond');
    output.textContent = result;
 }

function playRound(player , computer ){
    let playerSelection = player;
    let computerSelection = computer;
    //player choose rock
    if(playerSelection === "rock" && computerSelection==="scissor"){
        return "player win";
    }
    else if(playerSelection === "rock" && computerSelection==="paper"){
        return "computer win";
    }
    else if(playerSelection === "rock" && computerSelection==="rock"){
        return "nobody win"
    }
    //player choose scissor
    else if(playerSelection === "scissor" && computerSelection==="scissor"){
        return "nobody win"
    }
    else if(playerSelection === "scissor" && computerSelection==="paper"){
        return "player win";
    }
    else if(playerSelection === "scissor" && computerSelection==="rock"){
        return "computer win";
    }
    //player choose paper 
    else if(playerSelection === "paper" && computerSelection==="scissor"){
        return "computer win";
    }
    else if(playerSelection === "paper" && computerSelection==="rock"){
        return "player win";
    }
    else if(playerSelection === "paper" && computerSelection==="paper"){
        return "nobody win"
    }
}
        

        
