/*----- constants -----*/


/*----- app's state (variables) -----*/
let boardX= [['0','0','0'], ['0','0','0'], ['0','0','0']];
let boardO= [['0','0','0'], ['0','0','0'], ['0','0','0']];
let turn= 'X';
let row, column;
let moveCount= 0;
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
    turn= "O";
  }else{
    boardO[row][column]= 1;
    turn= "X";
  }
  render(boardX, "X");
  render(boardO, "O");
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