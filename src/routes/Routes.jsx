import {Routes,Route} from 'react-router-dom'
import { Navbar } from '../components/common/Navbar'
import { LandingPage } from '../components/pages/LandingPage'
export const ProjectRoutes = () => {
  return (
       <Routes>
        <Route path = "/" element = {<LandingPage/>}></Route>
        </Routes> 
  ) 
}
