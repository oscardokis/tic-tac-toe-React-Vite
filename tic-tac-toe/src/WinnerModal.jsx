
import { Square } from "./Square";
export function WinnerModal ({winner, resetGame}) {
  if(winner === null) return null
  return(
    <section className='winner'>
    <div className='text'>
      <h2>
        {
          winner === false
          ? 'Draw'
          : 'Winner: '
        }
      </h2>
      <header className='win'>
        {winner && <Square>{winner}</Square>}
        {winner === false && <Square>X</Square>}
        {winner === false && <Square>O</Square>}
      </header>
      <footer>
        <button onClick={resetGame}>Start Over</button>
      </footer>
    </div>
    </section>
  )
}