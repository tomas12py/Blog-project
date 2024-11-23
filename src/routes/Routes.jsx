import { UserPublications } from '../components/pages/UserPublications'
import { LandingPage } from '../components/pages/LandingPage'
import { FormPublication } from '../components/pages/FormPublication'
import { FormUser } from '../components/pages/FormUser'
import {Login} from '../components/pages/Login'
import {Routes,Route,Router} from 'react-router-dom'
export const ProjectRoutes = () => {
  return (
      <Router basename='/Blog-project'>
       <Routes>
        <Route path = "/" element = {<LandingPage/>}></Route>
        <Route path = "/create-user" element = {<FormUser/>}></Route>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path='/publications' element = {<UserPublications/>}></Route>
        <Route path='create-publication' element ={<FormPublication/>}></Route>
        </Routes> 
      </Router>
  ) 
}
