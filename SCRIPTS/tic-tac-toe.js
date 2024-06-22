/*----- constants -----*/


/*----- app's state (variables) -----*/
let boardX= [['0','0','0'], ['0','0','0'], ['0','0','0']];
let boardO= [['0','0','0'], ['0','0','0'], ['0','0','0']];
let turn= 'X';
let row, column;
let moveCount= 0;
/*----- cached element references -----*/


/*----- event listeners -----*/
document.body.querySelector('.js-square-1')
  .addEventListener("click", ()=>playgame([0, 0]));
document.body.querySelector('.js-square-2')
  .addEventListener("click", ()=>playgame([0, 1]));
document.body.querySelector('.js-square-3')
  .addEventListener("click", ()=>playgame([0, 2]));
document.body.querySelector('.js-square-4')
  .addEventListener("click", ()=>playgame([1, 0]));
document.body.querySelector('.js-square-5')
  .addEventListener("click", ()=>playgame([1, 1]));
document.body.querySelector('.js-square-6')
  .addEventListener("click", ()=>playgame([1, 2]));
document.body.querySelector('.js-square-7')
  .addEventListener("click", ()=>playgame([2, 0]));
document.body.querySelector('.js-square-8')
  .addEventListener("click", ()=>playgame([2, 1]));
document.body.querySelector('.js-square-9')
  .addEventListener("click", ()=>playgame([2, 2]));


/*----- functions -----*/
function playgame(square){
  row= square[0];
  column= square[1];
  moveCount++;
  if(turn=="X"){
    boardX[row][column]= 1;
    turn= "O";
  }else{
    boardO[row][column]= 1;
    turn= "X";
  }
  const button= document.body.querySelector(`.js-square-${row * 3 + column +1}`);
  button.removeEventListener("click", ()=> playgame(square));
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