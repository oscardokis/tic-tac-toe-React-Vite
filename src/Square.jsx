const Square = ({children, isSelected, updateBoard, index}) =>{
  const className = `square ${isSelected ? 'is-selected': ''}`;
  const handleClcik = () => {
  updateBoard(index);
  };
  return (
    <div onClick={handleClcik} className={className}>
      {children}
    </div>
  );
} 
export { Square };