
export const InputForm = ({type = "",placeholder = "",required = true,name = "",value = "",onChange}) => {
  return (
    <div className="input-container">
    <input className="input-mail" 
    type={type} 
    placeholder={placeholder}
    name={name}
    required = {required}
    value={value}
    onChange={onChange}
    />
  </div>
  )
}
