
export const Form = ({children,background,height = "350px",title = "",marginTop = "",phrase = "",onSubmit}) => {
  return (
   <form onSubmit = {onSubmit} className="form" style={{height,background}}>
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
</form>
  )
}
