let matchfield = [];
let winner;
let currentPlayer = 'circle';

function fillMatchField(player){
    if (!matchfield[player]){
        matchfield[player] = currentPlayer;
        if(currentPlayer){
            if(currentPlayer == 'circle'){
                currentPlayer = 'cross';
                document.getElementById('currentPlayerCircle').classList.add('inactive');
                document.getElementById('currentPlayerCross').classList.remove('inactive');
            }else{
                currentPlayer = 'circle';
                document.getElementById('currentPlayerCross').classList.add('inactive');
                document.getElementById('currentPlayerCircle').classList.remove('inactive');
                }
            }  
            checkForWinner();  
        }        
}

function checkForWinner(){ 
    drawCurrentPlayer(); 
    checkWinnerHorizontal();
    checkWinnerVertical();
    checkWinnerDiagonal();
    noOneHasWon();
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
    if (winner) {
       setTimeout(gameOver, 1000);
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
        setTimeout(gameOver, 1000);
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
        setTimeout(gameOver, 1000);
    }
}

function noOneHasWon(){
        if(matchfield[0] &&matchfield[1] && matchfield[2] && matchfield[3] && matchfield[4] && matchfield[5] && matchfield[6] && matchfield[7]){ 
            document.getElementById('gameWinner').innerHTML = 'Keiner hat Gewonnen';
            gameOver(); 
        } 
        
}

function gameOver() {
    document.getElementById('endScreen').classList.add('d-flex');
    document.getElementById('endScreen').classList.remove('d-none');
    playerOneHasWon();
    playerTwoHasWon();
    
    //setTimeout(newStart, 5000);
}

function playerOneHasWon(){
    if(winner == "circle"){
    document.getElementById('gameWinner').innerHTML = 'Spieler 1 hat Gewonnen';
    }
}
function playerTwoHasWon(){
    if(winner == "cross"){
    document.getElementById('gameWinner').innerHTML = 'Spieler 2 hat Gewonnen';
    }
}

function noWinnerAccessible(){
    document.getElementById('gameWinner').innerHTML = 'Keiner hat Gewonnen';
}

function newStart(){
    window.location.reload();
}


function hideStartScreen() {
    document.getElementById('startScreen').classList.remove('d-flex');
    document.getElementById('startScreen').classList.add('d-none');
}