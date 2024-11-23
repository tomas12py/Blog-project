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


export const FormPublication = () => {

    const [formData,handleInputs,resetForm] = formInputs({ 
        location: '', 
        rating: '',
        review: '',
        name: '' 
    
    }
      )
      const [load,setLoad] = useState(false)
      const [noti,setNoti] = useState(false)
  
      const handleSubmit = async (e) => {
        e.preventDefault()
        setNoti(false)
        setLoad(true)
        try {
          const response = await axiosInstance.post(API.ENDPOINTS.PRIVATE_ROUTES.CREATE_TRAVEL,formData)
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
    routes={{Publicaciones:"/publications","Crear una publicacion":"/create-publication",Inicio:"/"}}
    />
     {noti ? 
    <Toast
    message="Creaste tu publicacion correctamente"
    type="success"
    duration = {3000}
    /> : ""
  }
    <div className="container"> 
    <div className="form-container">
   <Form height = "400px" title="Crea tu usuario" phrase="Your travel" marginTop="1.2rem" onSubmit={handleSubmit} background="linear-gradient(to right top, #24b9c7, #00afea, #009eff, #517fff, #c241ec)">
    <InputForm
    placeholder="Nombre de la publicacion"
    type="text"
    name="name"
    value={formData.name}
    onChange={handleInputs}
    />
    <InputForm
    placeholder = "Ingresa el lugar de tu viaje"
    type="text"
    name="location"
    value={formData.location}
    onChange={handleInputs}
    />  
    <InputForm
    placeholder="Ingresa el rating de tu viaje"
    type="number"
    name="rating"
    value={formData.rating}
    onChange={handleInputs}
    />
     <InputForm
    placeholder="Ingresa la review de tu viaje"
    type="text"
    name="review"
    value={formData.review}
    onChange={handleInputs}
    />
    <ButtonForm
    text={load ? <LoadSpinner height="30px" width = "30px" borderTopColor="#0b62b9"/>   : 'Enviar'  
    }
    />
   </Form>
   </div>
   </div>
   <Footer/>
   
    </>
  )
}
