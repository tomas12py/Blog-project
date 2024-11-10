import {useState} from 'react'

export const formInputs = ({initial = {}}) => {
    const [formData,setFormData] = useState(initial)

    const handleInputs = (e) => {
        const {name,value} = e.target
        setFormData({
            ...formData,
            [name]:value
        }) }

    
    const resetForm = () => {
        setFormData(initial)
    }    

    return [formData,handleInputs,resetForm]
}
