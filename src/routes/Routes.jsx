import {Routes,Route} from 'react-router-dom'
import { Navbar } from '../components/Navbar'
export const ProjectRoutes = () => {
  return (
       <Routes>
        <Route path = "/" element = {<Navbar/>}></Route>
        </Routes> 
  ) 
}
