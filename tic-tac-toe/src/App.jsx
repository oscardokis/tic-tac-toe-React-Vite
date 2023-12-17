import { useState } from 'react';
import { Square } from './Square';
import './App.css'
import confetti from 'canvas-confetti';
import {TURNS, boardIni} from './constants';
import { WinnerModal } from './WinnerModal';
import { checkWinner, checkEndGame } from './board';
function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage =window.localStorage.getItem('Board');
    if(boardFromStorage) return JSON.parse(boardFromStorage);
    return boardIni;
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage =window.localStorage.getItem('Turn');
    if(turnFromStorage) return JSON.parse(turnFromStorage);
    return TURNS.x;
  });
  const [winner, setWinner] = useState(null);


  const resetGame = () => {
    setBoard(boardIni);
    setTurn(TURNS.x);
    setWinner(null);
    window.localStorage.removeItem('Board');
    window.localStorage.removeItem('Turn');
  }
  const updateBoard = (index) => {
    const newBoard = [...board];
    // No update the board to rewrite the x or o
    // No pupdate the board if there is a winner
    if(board[index] || winner) return;
    // set the turn of the player
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    setTurn(newTurn);

    // set in the board the x or o
    newBoard[index] = turn;
    setBoard(newBoard);

    //save the game
    window.localStorage.setItem('Board', JSON.stringify(newBoard));
    window.localStorage.setItem('Turn', JSON.stringify(newTurn));

    //check if there is a  winner
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    }else if (checkEndGame(newBoard)){
      setWinner(false);
    }
  }
  

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Start Over</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                onClick ={() => setTurn()}
                updateBoard={updateBoard} 
              >
                {square}
              </Square>
            );
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn == TURNS.o}>
          {TURNS.o}
        </Square>
      </section>
      <WinnerModal
      winner ={winner}
      resetGame ={resetGame}
      />
  
    </main>
  )
}

export default App
