import { FaCompass } from "react-icons/fa";

export const TextCard = ({background = "",title = "",text = ""}) => {
  return (
   <>
      <div className="card" style={{background}}>
        <div className="card__icon">
            <FaCompass/>
        </div>
        <h2 className="card__title">
          {title}
        </h2>
        <p className="card__apply">
           {text}
        </p>
      </div>
</>
  )
}
