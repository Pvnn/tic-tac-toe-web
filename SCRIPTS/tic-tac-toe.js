/*----- constants -----*/


/*----- app's state (variables) -----*/
let boardX= [['0','0','0'], ['0','0','0'], ['0','0','0']];
let boardO= [['0','0','0'], ['0','0','0'], ['0','0','0']];
let turn= 'X';
let row, column;
let moveCount= 0;
let result= ""
/*----- cached element references -----*/


/*----- event listeners -----*/
document.body.querySelectorAll(`.js-square`).forEach(button =>{
  button.addEventListener("click", handleClick)
})
document.body.querySelector(".reset-button").addEventListener("click", resetScore);


/*----- functions -----*/
function handleClick(event){
  if(result==""){
    button= event.target;
    const rows= parseInt(button.getAttribute('data-row'));
    const columns= parseInt(button.getAttribute('data-col'));
    displayMove(button);
    playgame(rows, columns);
    button.removeEventListener("click", handleClick);
  }
}

function resetScore(){
  result="";
  document.body.querySelector('.result-line').innerHTML=result;
  boardX= [['0','0','0'], ['0','0','0'], ['0','0','0']];
  boardO= [['0','0','0'], ['0','0','0'], ['0','0','0']];
  document.body.querySelectorAll(`.js-square`).forEach(button =>{
    button.addEventListener("click", handleClick);
  });
  document.body.querySelectorAll(`.js-square`).forEach(button =>{
    button.innerHTML='';
  });
}

function playgame(row, column){
  moveCount++;
  if(turn=="X"){
    boardX[row][column]= 1;
    if(moveCount>=5){
      checkWin(boardX);
    }
    turn= "O";
  }else{
    boardO[row][column]= 1;
    if(moveCount>=5){
      checkWin(boardO);
    }
    turn= "X";
  }
  //render(boardX, "X");
  //render(boardO, "O");
}
function render(board, player){
  console.log(`This is ${player}`);
  for(let i=0; i<3; i++ ){
    for(let j=0; j<3; j++){
      console.log(`${board[i][j]} `);
    }
    console.log('\n')
  }
}
function checkWin(board){
  let won= false;
  let winningCombination;
  //Horizontal and Vertical Check
  for(let i=0; i<3; i++){
    if(board[i][0]==1 && board[i][1]==1 && board[i][2]==1){
      won= true;
      winningCombination=[
        [i, 0],
        [i, 1],
        [i, 2]
      ]
      break;
    }
    if(board[0][i]==1 && board[1][i]==1 && board[2][i]==1){
      won= true;
      winningCombination=[
        [0, i],
        [1, i],
        [2, i]
      ]
      break;
    }
  }
  //Diagonal Check
  if(!won){
    if(board[0][0]==1 && board[1][1]==1 && board[2][2]==1){
      won=true;
      winningCombination=[
        [0, 0],
        [1, 1],
        [2, 2]
      ]
    }else if(board[0][2]==1 && board[1][1]==1 && board[2][0]==1){
      won=true;
      winningCombination=[
        [0, 2],
        [1, 1],
        [2, 0]
      ]
    }
  }
  if(won){
    result= `Player ${turn} wins.`
    highlightWinningSquares(winningCombination);
    document.body.querySelector('.result-line').innerHTML=result;
  }
}
function displayMove(button){
  button.innerHTML=`<img src="IMAGES\\tic-tac-toe-${turn}.png" class="css-move">`;
}
function highlightWinningSquares(comb){
  comb.forEach(([row, column]) => {
    const button= document.body.querySelector(`.js-square[data-row="${row}"][data-col="${column}"]`);
    button.classList.add('winning-square');
  })
}