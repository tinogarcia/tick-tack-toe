import { TURNS, POSITION_SQUARE } from '../constans.js'
import { Square } from '../components/Square.jsx'

export const Board = ({board, updateBoard}) => {
    const getClassName = (index) => {
        switch(index) {
            case 1:
                return POSITION_SQUARE.CENTER + POSITION_SQUARE.TOP
            case 3:
                return POSITION_SQUARE.CENTER + POSITION_SQUARE.LEFT
            case 4:
                return POSITION_SQUARE.CENTER
            case 5:
                return POSITION_SQUARE.CENTER + POSITION_SQUARE.RIGHT
            case 7:
                return POSITION_SQUARE.CENTER + POSITION_SQUARE.BOTTOM
        }
    }

    return (
        board.map((_, index) => {
            const className = getClassName(index)
            return (
              <Square
                key={index}
                index={index}
                className= {className}
                updateBoard={updateBoard}
              >
                {
                  board[index] === TURNS.X
                  ? <i className="nes-icon close is-large"></i>
                  : board[index] === TURNS.O ? <i className="nes-icon coin is-large"></i>
                  : ''
                }
              </Square>
            )
          })
    )
}