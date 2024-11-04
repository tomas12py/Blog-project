import '../../styles/app.css'


export const TextCard = ({background = ""}) => {
  return (
   <>
      <div className="card" style={{background}}>
        <div className="card__icon">
          <i className="fas fa-bolt" />
        </div>
        <p className="card__exit">
          <i className="fas fa-times" />
        </p>
        <h2 className="card__title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <p className="card__apply">
          <a className="card__link" href="#">
            Apply Now <i className="fas fa-arrow-right" />
          </a>
        </p>
      </div>
</>
  )
}
