import { Navbar } from '../common/Navbar'
import { TextCard } from '../common/TextCard'
import '../../styles/app.css'


export const LandingPage = () => {
  return (
    <main>
  <Navbar
  routes={["Login"]}
  />
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
