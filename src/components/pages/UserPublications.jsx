import { CardTravel } from "../common/CardTravel"
import { Navbar } from "../common/Navbar"
import { Footer } from "../common/Footer"
import { AnimateTitle } from "../common/AnimateTitle"
import "../../styles/initial.css"
import "../../styles/style.css"

export const UserPublications = () => {
  return (
    <>
      <Navbar routes={{Viajes:"/publications","Crea una publicacion":"/create-publication"}}/>
      <h1 className="gradient-title title-publication">Disfruta de las publicaciones sobre diferentes viajes</h1>
      <div className="container">
        <div className="container-card-travel">
          <CardTravel />
        </div>
      </div>
      <Footer />
    </>


  )
}
