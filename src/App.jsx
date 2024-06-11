import { useState } from 'react'
import './App.css'
import { TURNS, COMBO_WINNER } from './constans.js'
import { Board } from './components/Board.jsx'
import { TurnBox } from './components/TurnBox.jsx'
import { Dialog } from './components/Dialog.jsx'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
      setBoard(Array(9).fill(null))
      setWinner(null)
      setTurn(TURNS.X)
  }

  const updateBoard = (index) => {
      if (board[index] || winner) return
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard)
      const newWinner = checkWinner(newBoard)
      if (newWinner) {
        setWinner(newWinner)
        showModal()
      } else if (checkEndGame(newBoard)) {
        setWinner(false)
        showModal()
      }
  }

  const checkWinner = (checkBoard) => {
    for (const combo of COMBO_WINNER) {
      const [a, b, c] = combo
      if (
        checkBoard[a] &&
        checkBoard[a] === checkBoard[b] &&
        checkBoard[a] === checkBoard[c]
      ) {
        return checkBoard[a]
      }
    }
    return null
  }

  const checkEndGame = (checkBoard) => {
    return checkBoard.every((square) => square !== null)
  }

  const showModal = () => {
    document.getElementById('dialog-dark-rounded').showModal();
  }

  return (
    <>
      <main className="board">
        <h2>Tick Tack Toe</h2>
        <div className="nes-container is-dark is-rounded">
          <section className='game'>
            <Board
              board={board}
              updateBoard={updateBoard}
            ></Board>
          </section>
           <section className='turn'>
            <TurnBox
              isSelected={turn === TURNS.X}
            >
              {TURNS.X}
            </TurnBox>
            _
            <TurnBox
              isSelected={turn === TURNS.O}
            >
              {TURNS.O}
            </TurnBox>
          </section>
        </div>
      </main>
      <footer>
        <a href="https://github.com/tinogarcia" className="nes-badge">
          <span className="is-warning">tinogarcia</span>
        </a>
      </footer>
      <Dialog
        winner={winner}
        resetGame={resetGame}
        setBoard={setBoard} 
        setWinner={setWinner}
        setTurn={setTurn}
      ></Dialog>
    </>
  )
}

export default App
