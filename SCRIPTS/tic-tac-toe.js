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


/*----- functions -----*/
function handleClick(event){
  button= event.target;
  const rows= parseInt(button.getAttribute('data-row'));
  const columns= parseInt(button.getAttribute('data-col'));
  playgame(rows, columns);
  button.removeEventListener("click", handleClick);
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
  //Horizontal and Vertical Check
  let won= false
  for(let i=0; i<3; i++){
    if(board[i][0]==1 && board[i][1]==1 && board[i][2]==1){
      won= true;
      break;
    }
    if(board[0][i]==1 && board[1][i]==1 && board[2][i]==1){
      won= true;
      break;
    }
  }
  //Diagonal Check
  if(!won){
    if(board[0][0]==1 && board[1][1]==1 && board[2][2]==1){
      won=true;
    }else if(board[0][2]==1 && board[1][1]==1 && board[2][0]==1){
      won=true;
    }
  }
  if(won){
    result= `Player ${turn} wins.`
    console.log(result);
  }
}