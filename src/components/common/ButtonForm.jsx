
export const ButtonForm = ({text = "",onClick}) => {
  return (
    <button type="submit" className="submit" onClick={onClick}>
    <span className="sign-text">{text}</span>
  </button> 
  ) 
}
