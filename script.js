let matchfield = [];
let winner;
let currentPlayer = 'circle';

function fillMatchField(name){
    matchfield[name] = currentPlayer;
    
    if(currentPlayer == 'circle'){
        currentPlayer = 'cross';
    }else{
        currentPlayer = 'circle';
    }
    drawCurrentPlayer(); 
    checkWinnerHorizontal();
    checkWinnerVertical();
    checkWinnerDiagonal();   
    console.log(matchfield);
}

function drawCurrentPlayer(){
    for (let i = 0; i < matchfield.length; i++) {
        if (matchfield[i] == 'circle'){
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (matchfield[i] == 'cross'){
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkWinnerHorizontal(){
    
    if(matchfield[0] == matchfield[1] && matchfield[1] == matchfield[2] && matchfield[0]){
        winner = matchfield[0];
    }  
    if(matchfield[3] == matchfield[4] && matchfield[4] == matchfield[5] && matchfield[3]){
        winner = matchfield[3];
    }
    if(matchfield[6] == matchfield[7] && matchfield[7] == matchfield[8] && matchfield[6]){
        winner = matchfield[6];
    }
    console.log(winner);
}    

function checkWinnerVertical(){
    
    if(matchfield[0] == matchfield[3] && matchfield[3] == matchfield[6] && matchfield[0]){
        winner = matchfield[0];
    }
    if(matchfield[1] == matchfield[4] && matchfield[4] == matchfield[7] && matchfield[1]){
        winner = matchfield[1];
    }
    if(matchfield[2] == matchfield[5] && matchfield[5] == matchfield[8] && matchfield[2]){
        winner = matchfield[2];
    }
    console.log(winner);
}

function checkWinnerDiagonal(){
    
    if(matchfield[0] == matchfield[4] && matchfield[4] == matchfield[8] && matchfield[0]){
        winner = matchfield[0];
    }
    if(matchfield[2] == matchfield[4] && matchfield[4] == matchfield[6] && matchfield[2]){
        winner = matchfield[2];
    }
    console.log(winner);
}