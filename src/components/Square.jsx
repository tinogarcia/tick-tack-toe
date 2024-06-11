export const Square = ({children, updateBoard, index, className}) => {
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={'square ' + className}>
        <span>
          {children}
        </span>
      </div>
    )
  }