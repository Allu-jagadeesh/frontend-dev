const score=JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

updatescore();

function playgame(playermove){
    const computermove=pickcomputermove();
    let result='';

    if(playermove==='scissors'){
        if(computermove==='rock'){
            result='You lose';
        }else if(computermove==='paper'){
            result='You win';
        }else if(computermove==='scissors'){
            result='Tie!';
        }
    }else if(playermove==='paper'){
        if(computermove==='rock'){
            result='You win';
        }else if(computermove==='paper'){
            result='Tie!';
        }else if(computermove==='scissors'){
            result='You lose';
        }
    }else if(playermove==='rock'){
        if(computermove==='rock'){
            result='Tie!';
        }else if(computermove==='paper'){
            result='You lose';
        }else if(computermove==='scissors'){
            result='You win';
        }
    }

    if(result==='You win'){
        score.wins+=1;
    }else if(result==='You lose'){
        score.losses+=1;
    }else if(result==='Tie!'){
        score.ties+=1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updatescore();

    document.querySelector('.result').innerHTML=result;
    document.querySelector('.moves').innerHTML=`YOU <img src="images/${playermove}-emoji.png" alt="" class="icons">
     <img src="images/${computermove}-emoji.png" alt="" class="icons">computer`;

    
    console.log(`You picked ${playermove}. Computer picked ${computermove}. match ${result}. 
Score: Wins=${score.wins}, Losses=${score.losses}, Ties=${score.ties}`);
}

function resetScore(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updatescore();
}
function updatescore(){
    document.querySelector('.scores').innerHTML=`Score: Wins=${score.wins}, Losses=${score.losses}, Ties=${score.ties}`;
}


function pickcomputermove() {
    const randomNumber=Math.random();
    let computermove='';

    if(randomNumber > 0 && randomNumber < 1/3){
        computermove='rock';
    }else if(randomNumber > 1/3 && randomNumber < 2/3){
        computermove='paper';
    }else if(randomNumber > 2/3 && randomNumber < 1){
        computermove='scissors';
    }
    return computermove;
}
