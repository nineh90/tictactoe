let matchfield = []; 
let winner; 
let currentPlayer = 'circle';

let circleSound = new Audio('./mp3/draw-circle.mp3');
let gameOverSound = new Audio('./mp3/gameover.mp3');
let noWinnerSound = new Audio('./mp3/no-winner.mp3');


function fillMatchField(player){
    if (!matchfield[player]){
        matchfield[player] = currentPlayer; 
        if(currentPlayer){
            if(currentPlayer == 'circle'){
             playerOne();
            } else{
               playerTwo();
                }
            }  
            checkForWinner();  
        }        
}

function playerOne(){ 
    currentPlayer = 'cross';
    document.getElementById('currentPlayerCircle').classList.add('inactive');
    document.getElementById('currentPlayerCross').classList.remove('inactive');
}

function playerTwo(){
    currentPlayer = 'circle';
    document.getElementById('currentPlayerCross').classList.add('inactive');
    document.getElementById('currentPlayerCircle').classList.remove('inactive');
   
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
        if (circle(i)){
            document.getElementById('circle-' + i).classList.remove('d-none'); 
        }
        if (cross(i)){
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function circle(i){
    return matchfield[i] == 'circle'; 
}
function cross(i){
    return matchfield[i] == 'cross';
}

function checkWinnerHorizontal(){      
    
    if(horizontalTop()){
        winner = matchfield[0];
        document.getElementById('line-1').style.transform = 'scalex(1)';
    }  
    if(horizontalMiddle()){
        winner = matchfield[3];
        document.getElementById('line-2').style.transform = 'scalex(1)';
    }
    if(horizontalBottom()){
        winner = matchfield[6];
        document.getElementById('line-3').style.transform = 'scalex(1)';
    }
    winnerExist();
} 

function horizontalBottom(){ 
    return matchfield[6] == matchfield[7] && matchfield[7] == matchfield[8] && matchfield[6]
}

function horizontalMiddle(){
    return matchfield[3] == matchfield[4] && matchfield[4] == matchfield[5] && matchfield[3]
}

function horizontalTop(){
   return matchfield[0] == matchfield[1] && matchfield[1] == matchfield[2] && matchfield[0]
}

function checkWinnerVertical(){    
    if (winner) { return;} 
    if(verticalLeft()){
        winner = matchfield[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scalex(1)';
    }
    if(verticalMiddle()){
        winner = matchfield[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scalex(1)';
    }
    if(verticalBottom()){
        winner = matchfield[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scalex(1)';
    }    
    winnerExist();
}

function verticalBottom(){
    return matchfield[2] == matchfield[5] && matchfield[5] == matchfield[8] && matchfield[2]
}

function verticalMiddle(){
    return matchfield[1] == matchfield[4] && matchfield[4] == matchfield[7] && matchfield[1]
}

function verticalLeft(){
    return matchfield[0] == matchfield[3] && matchfield[3] == matchfield[6] && matchfield[0]
}

function winnerExist(i){
    if (winner) {
        setTimeout(gameOver, 500);
     }
}



function checkWinnerDiagonal(){
    if (winner) { return;} 
    if(diagonalFromLeftUpToRightDown()){
        winner = matchfield[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scalex(1)';
    }
    if(diagonalFromLeftDownToRightUp()){
        winner = matchfield[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scalex(1)';
    }
    if (winner) {
        setTimeout(gameOver, 1000);
    }
}

function diagonalFromLeftUpToRightDown(){
     return matchfield[0] == matchfield[4] && matchfield[4] == matchfield[8] && matchfield[0]
}

function diagonalFromLeftDownToRightUp(){
     return matchfield[2] == matchfield[4] && matchfield[4] == matchfield[6] && matchfield[2]
}

function noOneHasWon(){
        if(matchFieldisFull()){ 
            document.getElementById('gameWinner').innerHTML = 'Keiner hat Gewonnen';
            gameOver();
            noWinnerSound.play();
        } 
}

function matchFieldisFull(){
   return matchfield[0] && matchfield[1] && matchfield[2] && matchfield[3] && matchfield[4] && matchfield[5] && matchfield[6] && matchfield[7]
}

function gameOver() {
    document.getElementById('endScreen').classList.add('d-flex');
    document.getElementById('endScreen').classList.remove('d-none');
    playerOneHasWon();
    playerTwoHasWon();
}

function playerOneHasWon(){
    if(winnerIsCircle()){
    document.getElementById('gameWinner').innerHTML = 'Spieler 1 hat Gewonnen';
    gameOverSound.play();
    }
}

function winnerIsCircle(){
    return winner == "circle";
}

function playerTwoHasWon(){
    if(winnerIsCross()){
    document.getElementById('gameWinner').innerHTML = 'Spieler 2 hat Gewonnen';
    gameOverSound.play();
    }
}

function winnerIsCross(){
    return winner == "cross";
}

function newStart(){
    window.location.reload();
}

function hideStartScreen() {
    document.getElementById('startScreen').classList.remove('d-flex');
    document.getElementById('startScreen').classList.add('d-none');
}