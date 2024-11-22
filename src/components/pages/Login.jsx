import { formInputs } from "../../hooks/FormInputs"
import { InputForm } from "../common/InputForm"
import { axiosInstance } from "../../config/axios"
import { ButtonForm } from "../common/ButtonForm"
import { LoadSpinner } from "../common/LoadSpinner"
import { MdErrorOutline } from "react-icons/md";
import { API } from "../../config/constants/api"
import { useNavigate } from "react-router-dom"
import { Footer } from "../common/Footer"
import { Navbar} from "../common/Navbar"
import { Form } from "../common/Form"
import { useState } from "react"
import "../../styles/initial.css"
import "../../styles/style.css"

export const Login = () => {

    const navigate = useNavigate()

    const [formData,handleInputs,resetForm] = formInputs({
        email: "",
        password: ""
      })

      const [load,setLoad] = useState(false)
      const [errorMessage,setErrorMessage] = useState("")

      const handleSubmit = async (e) => {
        e.preventDefault()
        setLoad(true)
        setErrorMessage("")
        try {
          const response = await axiosInstance.get(API.ENDPOINTS.INTIAL_ROUTES.LOGIN)
          const users = response.data
          const user = users.find(user => user.email === formData.email && user.password === formData.password)
          if (user){
            navigate("/")
          }
          setErrorMessage("error")
          
          console.log(user);
          
        } catch (error) {
          console.log(error);
        } 
        finally{
          setLoad(false)
          resetForm()
        }
      }
  
    return (
      <>
     
      <Navbar
      routes={{Logup:"/create-user",Login:"/login"}}
      />
      <div className="container"> 
      <div className="form-container">
     <Form title="Crea tu usuario" phrase="Your travel" marginTop="1.2rem" onSubmit={handleSubmit} background="linear-gradient(to right top, #24b9c7, #00afea, #009eff, #517fff, #c241ec)">
      <InputForm
      placeholder = "Ingresa tu email"
      type="email"
      name="email"
      value={formData.email}
      onChange={handleInputs}
      />  
      <InputForm
      placeholder="Ingresa tu contraseña"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleInputs}
      />
      <ButtonForm
      text={load ? <LoadSpinner height="24px" width = "24px" borderTopColor="#0b62b9"/>   : 'Enviar'  
      }
      />
      {errorMessage ? 
    <div className="error">
    <MdErrorOutline className="error_icon" />
    <div className="error__title">Contraseña o correo incorrectos</div>
    <div className="error__close">
    </div>
  </div>
    : ""}
     </Form>
     </div>
     </div>
     <Footer/>
      </>
    )
}
