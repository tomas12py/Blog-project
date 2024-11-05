import { TextCard } from '../common/TextCard'
import { Navbar } from '../common/Navbar'
import { AnimateTitle } from '../common/AnimateTitle'
import '../../styles/app.css'


export const LandingPage = () => {

  return (
    <main>
  <Navbar
  routes={["Login"]}
  />
  <AnimateTitle/>
  <div className="main-container">
    <div className="cards">
     <TextCard
     background='linear-gradient(to right top, #24b9c7, #00afea, #009eff, #517fff, #c241ec)'
     title='Quienes somos?'
     text='Somos una pagina web que esta orientada a la busqueda de viajes y a la proporcion de recursos para 
     que tengas la capacidad de crear el viaje que quieras, podras compartir tus experiencias para otros y conocer
     nuevas experiencia para ti.
     ' 
     />
     <TextCard
     background='linear-gradient(to right top, #24b9c7, #00afea, #009eff, #517fff, #c241ec)'
     title = "Que puedes hacer en esta plataforma?"
     text='Tendras la capacidad de plasmar tus viajes de la forma que lo prefieras, tienes total control
     sobre como deseas gestionar esto, tambien puedes ver los viajes de otros usuarios asi puedes disfrutar del
     increible mundo del viaje desde distintas perspectivas.
     '
     />
    </div>
  </div>
  </main>
  )
}
