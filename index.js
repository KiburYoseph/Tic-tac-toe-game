let tokenPickSection = document.getElementById("tokenPickSection");
let playingSection = document.getElementById("playingSection");
let pickInstruction = document.getElementById("pickInstruction");
let space1 = document.getElementById("space1"),
    space2 = document.getElementById("space2")
    space3 = document.getElementById("space3"),
    space4 = document.getElementById("space4"),
    space5 = document.getElementById("space5"),
    space6 = document.getElementById("space6"),
    space7 = document.getElementById("space7"),
    space8 = document.getElementById("space8"),
    space9 = document.getElementById("space9");
let winText = document.getElementById("winText");
let turnText = document.getElementById("turnText");
let pickX = document.getElementById("pickX"),
    pickO = document.getElementById("pickO");
let retryButton = document.getElementById("retryButton");
let undoButton = document.getElementById("undoButton");
let undoState;
let player1Token, player2Token;
let turnCounter = 1;



/*Picking Token*/
    pickX.onclick = function (){
        player1Token = "X";
        player2Token = "O";
        tokenPickSection.style.display = "none";
        playingSection.style.display = "flex";
    }
    pickO.onclick = function (){
        player1Token = "O";
        player2Token = "X";
        tokenPickSection.style.display = "none";
        playingSection.style.display = "flex";
    }

/*Placing Tokens*/
        space1.onclick = function (){
                if(space1.innerHTML != ""){
                    turnText.innerHTML += "<br>Pick An Empty <br>Tile!";
                }
                else {
                    if (turnCounter == 1){
                        space1.innerHTML = player1Token;
                        turnCounter++;
                    }
                    else if(turnCounter == 2){
                        space1.innerHTML = player2Token;
                        turnCounter--;
                    }
                    checkWinConditions();
                    turnText.innerHTML = `Player ${turnCounter}'s Turn`;
                    undoState = document.getElementById("space1");
                }
        }
        space2.onclick = function (){
            if(space2.innerHTML != ""){
                turnText.innerHTML += "<br>Pick An Empty <br>Tile!";
            }
            else{
                if (turnCounter == 1){
                    space2.innerHTML = player1Token;
                    turnCounter++;
                }
                else if(turnCounter == 2){
                    space2.innerHTML = player2Token;
                    turnCounter--;
                }
                checkWinConditions();
                turnText.innerHTML = `Player ${turnCounter}'s Turn`;
                undoState = document.getElementById("space2");
            }
        }
        space3.onclick = function (){
            if(space3.innerHTML != ""){
                turnText.innerHTML += "<br>Pick An Empty <br>Tile!";
            }
            else{
                if (turnCounter == 1){
                    space3.innerHTML = player1Token;
                    turnCounter++;
                }
                else if(turnCounter == 2){
                    space3.innerHTML = player2Token;
                    turnCounter--;
                }
                checkWinConditions();
                turnText.innerHTML = `Player ${turnCounter}'s Turn`;
                undoState = document.getElementById("space3");
            }
        }
        space4.onclick = function (){
            if(space4.innerHTML != ""){
                turnText.innerHTML += "<br>Pick An Empty <br>Tile!";
            }
            else{
                if (turnCounter == 1){
                    space4.innerHTML = player1Token;
                    turnCounter++;
                }
                else if(turnCounter == 2){
                    space4.innerHTML = player2Token;
                    turnCounter--;
                }
                checkWinConditions();
                turnText.innerHTML = `Player ${turnCounter}'s Turn`;
                undoState = document.getElementById("space4");
            }
        }
        space5.onclick = function (){
            if(space5.innerHTML != ""){
                turnText.innerHTML += "<br>Pick An Empty <br>Tile!";
            }
            else{
                if (turnCounter == 1){
                    space5.innerHTML = player1Token;
                    turnCounter++;
                }
                else if(turnCounter == 2){
                    space5.innerHTML = player2Token;
                    turnCounter--;
                }
                checkWinConditions();
                turnText.innerHTML = `Player ${turnCounter}'s Turn`;
                undoState = document.getElementById("space5");
            }
        }
        space6.onclick = function (){
            if(space6.innerHTML != ""){
                turnText.innerHTML += "<br>Pick An Empty <br>Tile!";
            }
            else{
                if (turnCounter == 1){
                    space6.innerHTML = player1Token;
                    turnCounter++;
                }
                else if(turnCounter == 2){
                    space6.innerHTML = player2Token;
                    turnCounter--;
                }
                checkWinConditions();
                turnText.innerHTML = `Player ${turnCounter}'s Turn`;
                undoState = document.getElementById("space6");
            }
        }
        space7.onclick = function (){
            if(space7.innerHTML != ""){
                turnText.innerHTML += "<br>Pick An Empty <br>Tile!";
            }
            else{
                if (turnCounter == 1){
                    space7.innerHTML = player1Token;
                    turnCounter++;
                }
                else if(turnCounter == 2){
                    space7.innerHTML = player2Token;
                    turnCounter--;
                }
                checkWinConditions();
                turnText.innerHTML = `Player ${turnCounter}'s Turn`;
                undoState = document.getElementById("space7");
            }
        }
        space8.onclick = function (){
            if(space8.innerHTML != ""){
                turnText.innerHTML += "<br>Pick An Empty <br>Tile!";
            }
            else{
                if (turnCounter == 1){
                    space8.innerHTML = player1Token;
                    turnCounter++;
                }
                else if(turnCounter == 2){
                    space8.innerHTML = player2Token;
                    turnCounter--;
                }
                checkWinConditions();
                turnText.innerHTML = `Player ${turnCounter}'s Turn`;
                undoState = document.getElementById("space8");
            }
        }
        space9.onclick = function (){
            if(space9.innerHTML != ""){
                turnText.innerHTML += "<br>Pick An Empty <br>Tile!";
            }
            else{
                if (turnCounter == 1){
                    space9.innerHTML = player1Token;
                    turnCounter++;
                }
                else if(turnCounter == 2){
                    space9.innerHTML = player2Token;
                    turnCounter--;
                }
                checkWinConditions();
                turnText.innerHTML = `Player ${turnCounter}'s Turn`;
                undoState = document.getElementById("space9");
            }
        }

/*Reset*/

resetButton.onclick = function(){
    space1.innerHTML = "";
    space2.innerHTML = "";
    space3.innerHTML = "";
    space4.innerHTML = "";
    space5.innerHTML = "";
    space6.innerHTML = "";
    space7.innerHTML = "";
    space8.innerHTML = "";
    space9.innerHTML = "";
    space1.style.backgroundColor = "white";
    space2.style.backgroundColor = "white";
    space3.style.backgroundColor = "white";
    space4.style.backgroundColor = "white";
    space5.style.backgroundColor = "white";
    space6.style.backgroundColor = "white";
    space7.style.backgroundColor = "white";
    space8.style.backgroundColor = "white";
    space9.style.backgroundColor = "white";
    space1.style.color = "black";
    space2.style.color = "black";
    space3.style.color = "black";
    space4.style.color = "black";
    space5.style.color = "black";
    space6.style.color = "black";
    space7.style.color = "black";
    space8.style.color = "black";
    space9.style.color = "black";
    space1.style.pointerEvents = "all",
    space2.style.pointerEvents = "all",
    space3.style.pointerEvents = "all",
    space4.style.pointerEvents = "all",
    space5.style.pointerEvents = "all",
    space6.style.pointerEvents = "all",
    space7.style.pointerEvents = "all",
    space8.style.pointerEvents = "all",
    space9.style.pointerEvents = "all";
    winText.innerHTML = "";
    turnText.innerHTML = `Player 1's Turn`;
    turnCounter = 1;
}

/*Win Conditions*/
function checkWinConditions(){
if (((space1.innerHTML == space4.innerHTML) && (space4.innerHTML == space7.innerHTML)) 
    && (space1.innerHTML != "" && space4.innerHTML != "" && space7.innerHTML != "")){
        return winText.innerHTML = `Player ${turnCounter} LOSES!`,
            space1.style.backgroundColor = "red",
            space4.style.backgroundColor = "red",
            space7.style.backgroundColor = "red",
            space1.style.color = "white",
            space4.style.color = "white",
            space7.style.color = "white",
            space1.style.pointerEvents = "none",
            space2.style.pointerEvents = "none",
            space3.style.pointerEvents = "none",
            space4.style.pointerEvents = "none",
            space5.style.pointerEvents = "none",
            space6.style.pointerEvents = "none",
            space7.style.pointerEvents = "none",
            space8.style.pointerEvents = "none",
            space9.style.pointerEvents = "none";
    }

  else if ((space2.innerHTML == space5.innerHTML) && (space5.innerHTML == space8.innerHTML) 
    && (space2.innerHTML != "" && space5.innerHTML != "" && space8.innerHTML != "")){
        return winText.innerHTML = `Player ${turnCounter} LOSES!`,
            space2.style.backgroundColor = "red",
            space5.style.backgroundColor = "red",
            space8.style.backgroundColor = "red",
            space2.style.color = "white",
            space5.style.color = "white",
            space8.style.color = "white",
            space1.style.pointerEvents = "none",
            space2.style.pointerEvents = "none",
            space3.style.pointerEvents = "none",
            space4.style.pointerEvents = "none",
            space5.style.pointerEvents = "none",
            space6.style.pointerEvents = "none",
            space7.style.pointerEvents = "none",
            space8.style.pointerEvents = "none",
            space9.style.pointerEvents = "none";
    }

   else if ((space3.innerHTML == space6.innerHTML) && (space6.innerHTML == space9.innerHTML) 
    && (space3.innerHTML != "" && space6.innerHTML != "" && space9.innerHTML != "")){
        return winText.innerHTML = `Player ${turnCounter} LOSES!`,
            space3.style.backgroundColor = "red",
            space6.style.backgroundColor = "red",
            space9.style.backgroundColor = "red",
            space3.style.color = "white",
            space6.style.color = "white",
            space9.style.color = "white",
            space1.style.pointerEvents = "none",
            space2.style.pointerEvents = "none",
            space3.style.pointerEvents = "none",
            space4.style.pointerEvents = "none",
            space5.style.pointerEvents = "none",
            space6.style.pointerEvents = "none",
            space7.style.pointerEvents = "none",
            space8.style.pointerEvents = "none",
            space9.style.pointerEvents = "none";
    }

    else if ((space1.innerHTML == space2.innerHTML) && (space2.innerHTML == space3.innerHTML) 
    && (space1.innerHTML != "" && space2.innerHTML != "" && space3.innerHTML != "")){
        return winText.innerHTML = `Player ${turnCounter} LOSES!`,
            space1.style.backgroundColor = "red",
            space2.style.backgroundColor = "red",
            space3.style.backgroundColor = "red",
            space1.style.color = "white",
            space2.style.color = "white",
            space3.style.color = "white",
            space1.style.pointerEvents = "none",
            space2.style.pointerEvents = "none",
            space3.style.pointerEvents = "none",
            space4.style.pointerEvents = "none",
            space5.style.pointerEvents = "none",
            space6.style.pointerEvents = "none",
            space7.style.pointerEvents = "none",
            space8.style.pointerEvents = "none",
            space9.style.pointerEvents = "none";
    }

    else if ((space4.innerHTML == space5.innerHTML) && (space5.innerHTML == space6.innerHTML) 
    && (space4.innerHTML != "" && space5.innerHTML != "" && space6.innerHTML != "")){
        return winText.innerHTML = `Player ${turnCounter} LOSES!`,
            space4.style.backgroundColor = "red",
            space5.style.backgroundColor = "red",
            space6.style.backgroundColor = "red",
            space4.style.color = "white",
            space5.style.color = "white",
            space6.style.color = "white",
            space1.style.pointerEvents = "none",
            space2.style.pointerEvents = "none",
            space3.style.pointerEvents = "none",
            space4.style.pointerEvents = "none",
            space5.style.pointerEvents = "none",
            space6.style.pointerEvents = "none",
            space7.style.pointerEvents = "none",
            space8.style.pointerEvents = "none",
            space9.style.pointerEvents = "none";
    }

    else if ((space7.innerHTML == space8.innerHTML) && (space8.innerHTML == space9.innerHTML) 
    && (space7.innerHTML != "" && space8.innerHTML != "" && space9.innerHTML != "")){
        return winText.innerHTML = `Player ${turnCounter} LOSES!`,
            space7.style.backgroundColor = "red",
            space8.style.backgroundColor = "red",
            space9.style.backgroundColor = "red",
            space7.style.color = "white",
            space8.style.color = "white",
            space9.style.color = "white",
            space1.style.pointerEvents = "none",
            space2.style.pointerEvents = "none",
            space3.style.pointerEvents = "none",
            space4.style.pointerEvents = "none",
            space5.style.pointerEvents = "none",
            space6.style.pointerEvents = "none",
            space7.style.pointerEvents = "none",
            space8.style.pointerEvents = "none",
            space9.style.pointerEvents = "none";
    }

    else if ((space1.innerHTML == space5.innerHTML) && (space5.innerHTML == space9.innerHTML) 
    && (space1.innerHTML != "" && space5.innerHTML != "" && space9.innerHTML != "")){
        return winText.innerHTML = `Player ${turnCounter} LOSES!`,
            space1.style.backgroundColor = "red",
            space5.style.backgroundColor = "red",
            space9.style.backgroundColor = "red",
            space1.style.color = "white",
            space5.style.color = "white",
            space9.style.color = "white",
            space1.style.pointerEvents = "none",
            space2.style.pointerEvents = "none",
            space3.style.pointerEvents = "none",
            space4.style.pointerEvents = "none",
            space5.style.pointerEvents = "none",
            space6.style.pointerEvents = "none",
            space7.style.pointerEvents = "none",
            space8.style.pointerEvents = "none",
            space9.style.pointerEvents = "none";
    }

    else if ((space3.innerHTML == space5.innerHTML) && (space5.innerHTML == space7.innerHTML) 
    && (space3.innerHTML != "" && space5.innerHTML != "" && space7.innerHTML != "")){
        return winText.innerHTML = `Player ${turnCounter} LOSES!`,
            space3.style.backgroundColor = "red",
            space5.style.backgroundColor = "red",
            space7.style.backgroundColor = "red",
            space3.style.color = "white",
            space5.style.color = "white",
            space7.style.color = "white",
            space1.style.pointerEvents = "none",
            space2.style.pointerEvents = "none",
            space3.style.pointerEvents = "none",
            space4.style.pointerEvents = "none",
            space5.style.pointerEvents = "none",
            space6.style.pointerEvents = "none",
            space7.style.pointerEvents = "none",
            space8.style.pointerEvents = "none",
            space9.style.pointerEvents = "none";
    }
}

undoButton.onclick = function (){
        undoState.innerHTML = "";
        if (turnCounter == 1){
            turnCounter++;
            turnText.innerHTML = `Player ${turnCounter}'s Turn`;
        }
        else if(turnCounter == 2){
            turnCounter--;
            turnText.innerHTML = `Player ${turnCounter}'s Turn`;
        }
}
