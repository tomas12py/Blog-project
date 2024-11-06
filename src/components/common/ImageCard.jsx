
export const ImageCard = ({title = "",text = "",backgroundImage = "",link = ""}) => {
  return (
  <li className="cards__item">
    <div className="card-img">
      <div className="card__image" style={{backgroundImage}} />
      <div className="card__content">
        <div className="card__title-img">{title}</div>
        <p className="card__text">
         {text}
        </p>
        <button className="btn btn--block card__btn"><a className = "link-card" href={link} target="_blank">Conocer mas</a></button>
      </div>
    </div>
  </li>
  )
}
