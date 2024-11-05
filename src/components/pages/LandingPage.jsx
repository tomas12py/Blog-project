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
     background='radial-gradient(#1fe4f5, #3fbafe)'
     />
     <TextCard
     background='radial-gradient(#1fe4f5, #3fbafe)'
     />
    </div>
  </div>
  </main>
  )
}
