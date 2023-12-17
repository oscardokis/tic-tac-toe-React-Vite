import { winnerTicTacToe } from "./constants";


const checkWinner = (boardToCheck) => {
  //There is not winner
  // False it is draw
  for(const combo of winnerTicTacToe){
    const[a, b, c] = combo;
    if(
      boardToCheck[a] && // look up if something it is there
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ){
      return boardToCheck[c];
    }
  }
  return null;
}

const checkEndGame = (newBoard) => {
  // If every position it is different and 
  // there It is not a winner then it is draw
  return newBoard.every((square) => square !== null);
}

export {checkWinner, checkEndGame};