let matchfield = [];
let winner;
let currentPlayer = 'circle';

function fillMatchField(player){
    matchfield[player] = currentPlayer;
    if(currentPlayer){
        if(currentPlayer == 'circle'){
            currentPlayer = 'cross';
        }else{
            currentPlayer = 'circle';
        }
        
    drawCurrentPlayer(); 
    checkWinnerHorizontal();
    checkWinnerVertical();
    checkWinnerDiagonal(); 
    }  
}

function drawCurrentPlayer(player){
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
    if (winner) {
        gameOver();
    }
}    

function checkWinnerVertical(){    
    if (winner) { return;} 
    if(matchfield[0] == matchfield[3] && matchfield[3] == matchfield[6] && matchfield[0]){
        winner = matchfield[0];
    }
    if(matchfield[1] == matchfield[4] && matchfield[4] == matchfield[7] && matchfield[1]){
        winner = matchfield[1];
    }
    if(matchfield[2] == matchfield[5] && matchfield[5] == matchfield[8] && matchfield[2]){
        winner = matchfield[2];
    }    
    if (winner) {
        gameOver();
    }
}

function checkWinnerDiagonal(){
    if (winner) { return;} 
    if(matchfield[0] == matchfield[4] && matchfield[4] == matchfield[8] && matchfield[0]){
        winner = matchfield[0];
    }
    if(matchfield[2] == matchfield[4] && matchfield[4] == matchfield[6] && matchfield[2]){
        winner = matchfield[2];
    }
    if (winner) {
        gameOver();
    }
}

function gameOver() {
    console.log("GRATULIERE: " + winner);
    document.getElementById('endScreen').classList.add('d-flex');
    document.getElementById('endScreen').classList.remove('d-none');
    matchfield = [];

}

function hideEndScreen(){
    document.getElementById('endScreen').classList.remove('d-flex');
    document.getElementById('endScreen').classList.add('d-none');
    document.getElementById('startScreen').classList.add('d-flex');
    document.getElementById('startScreen').classList.remove('d-none');
}

function hideStartScreen() {
    document.getElementById('startScreen').classList.remove('d-flex');
    document.getElementById('startScreen').classList.add('d-none');
}