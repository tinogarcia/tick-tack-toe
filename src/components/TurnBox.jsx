export const TurnBox = ({children, isSelected}) => {
    const isActive = isSelected ? 'nes-btn is-warning' : 'nes-btn is-disabled'
  
    return (
      <button type="button" className={isActive}>
        {children}
      </button>
    )
}