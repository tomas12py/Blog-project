import { formInputs } from "../../hooks/FormInputs"
import { InputForm } from "../common/InputForm"
import { axiosInstance } from "../../config/axios"
import { ButtonForm } from "../common/ButtonForm"
import { LoadSpinner } from "../common/LoadSpinner"
import { API } from "../../config/constants/api"
import { Footer } from "../common/Footer"
import { Navbar} from "../common/Navbar"
import { Toast } from "../common/Toast"
import { Form } from "../common/Form"
import { useState } from "react"
import "../../styles/initial.css"
import "../../styles/style.css"


export const FormUser = () => {
    const [formData,handleInputs,resetForm] = formInputs({
      name: "",
      email: "",
      password: ""
    })
    const [load,setLoad] = useState(false)
    const [noti,setNoti] = useState(false)

    const handleSubmit = async (e) => {
      e.preventDefault()
      setNoti(false)
      setLoad(true)
      try {
        const response = await axiosInstance.post(API.ENDPOINTS.INTIAL_ROUTES.LOGUP,formData)
        console.log(response.data);
        setNoti(true)
        
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
     {noti ? 
    <Toast
    message="Creaste tu usuario correctamente"
    type="success"
    duration = {3000}
    /> : ""
  }
    <div className="container"> 
    <div className="form-container">
   <Form title="Crea tu usuario" phrase="Your travel" marginTop="1.2rem" onSubmit={handleSubmit} background="linear-gradient(to right top, #24b9c7, #00afea, #009eff, #517fff, #c241ec)">
    <InputForm
    placeholder="Ingresa tu nombre usuario"
    type="text"
    name="name"
    value={formData.name}
    onChange={handleInputs}
    />
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
   </Form>
   </div>
   </div>
   <Footer/>
   
    </>
  )
}
