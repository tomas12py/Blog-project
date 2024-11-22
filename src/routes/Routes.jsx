import { UserPublications } from '../components/pages/UserPublications'
import { LandingPage } from '../components/pages/LandingPage'
import { FormUser } from '../components/pages/FormUser'
import {Login} from '../components/pages/Login'
import {Routes,Route} from 'react-router-dom'
export const ProjectRoutes = () => {
  return (
       <Routes>
        <Route path = "/" element = {<LandingPage/>}></Route>
        <Route path = "/create-user" element = {<FormUser/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path='/publications' element = {<UserPublications/>}></Route>
        </Routes> 
  ) 
}
