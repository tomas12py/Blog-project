
export const Form = ({children,height = "350px",title = "",marginTop = "",phrase = "",onSubmit}) => {
  return (
   <form onSubmit = {onSubmit} className="form" style={{height}}>
  <div className="form-title" style={{marginTop}}>
    <span>{title}</span>
  </div>
  <div className="title-2">
    <span>{phrase}</span>
  </div>
  {children}
  <section className="bg-stars">
    <span className="star" />
    <span className="star" />
    <span className="star" />
    <span className="star" />
  </section>
  <button type="submit" className="submit">
    <span className="sign-text">Sign in</span>
  </button>
</form>
  )
}
