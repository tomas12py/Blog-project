import { LandingPage } from '../components/pages/LandingPage'
import { FormUser } from '../components/pages/FormUser'
import {Routes,Route} from 'react-router-dom'
export const ProjectRoutes = () => {
  return (
       <Routes>
        <Route path = "/" element = {<LandingPage/>}></Route>
        <Route path = "/create-user" element = {<FormUser/>}></Route>
        </Routes> 
  ) 
}
