function getComputerChoice(){

    let no = Math.floor(Math.random() * 3);
    if (no == 0){
        console.log("rock");
        return "rock";
    }
    else if (no==1) {
        console.log("paper");
        return "paper";
    }
    else{
        console.log("scissor");
        return "scissor"
    }

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection=='rock'){
        if (computerSelection == 'paper'){
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return 'lost';
        }
        else if (computerSelection == 'scissor'){
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return 'win';
        }

        else{
            console.log('Tie');
            return 'tie';

        }
    }

    else if (playerSelection=='paper'){
        if (computerSelection == 'scissor'){
           console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
           return 'lost';

        }
        else if (computerSelection == 'rock'){
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return 'win';

        }

        else{
            console.log('Tie');
            return 'tie';

        }
    }

    else if (playerSelection=='scissor'){
        if (computerSelection == 'rock'){
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return 'lost';

        }
        else if (computerSelection == 'paper'){
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return 'win';

        }
        else{
            console.log('Tie');
            return 'tie';

        }
    }
}

function game(){
    let playerscore = 0;
    let aiscore = 0;
    for (let i = 0; i<5; i++){
        let playerSelection = prompt("Enter Choice");
        let computerSelection = getComputerChoice();
        let check = null;
        check = playRound(playerSelection,computerSelection);
        if (check == 'win'){
            playerscore +=1;
        }
        else if(check == 'lost'){
            aiscore+=1;
        }
        

        
     }

     console.log(`Player Score ${playerscore}`)
     console.log(`AI Score ${aiscore}`)

     if (playerscore>aiscore){
        console.log("Player Wins");
     }

     else if (playerscore<aiscore){
        console.log("Player Loses");
     }

     else{
        console.log("Tie");
     }
} 

game();

