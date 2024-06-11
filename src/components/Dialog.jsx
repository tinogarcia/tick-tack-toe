import { TURNS } from '../constans.js'

export const Dialog = ({winner, resetGame}) => {
    const handleClick = () => {
        resetGame()
    }                    

    const iconWinner = winner === TURNS.X
        ? <i className="nes-icon close is-large"></i>
        : winner === TURNS.O ? <i className="nes-icon coin is-large"></i>
        : false

    return (
        <dialog className="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
            <form method="dialog">
                {
                    iconWinner !== false
                    ? <p>Winner: {iconWinner}</p>
                    : <p className="title">Empate</p>
                }
                
                <menu className="dialog-menu">
                    <button onClick={handleClick} className="nes-btn is-primary">Reset GAME</button>
                </menu>
            </form>
        </dialog>
    )
}