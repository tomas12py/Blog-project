import { IoLocationOutline } from "react-icons/io5";
import { PiShootingStarThin } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { API } from "../../config/constants/api";
import { useEffect,useState } from "react";
import { axiosInstance } from "../../config/axios";
import Modal from 'react-modal';
import { InputForm } from "./InputForm";
Modal.setAppElement('#root'); 

export const CardTravel = () => {
    const [data, setData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [formData, setFormData] = useState({ location: '', rating: '', review: '', createdAt: '',name: '' });
  
    useEffect(() => {
      const apiGet = async () => {
        try {
          const response = await axiosInstance.get(API.ENDPOINTS.PRIVATE_ROUTES.CREATE_TRAVEL);
          setData(response.data);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
      apiGet();
    }, []);
  
    const handleDelete = async (id) => {
      try {
        await axiosInstance.delete(`${API.ENDPOINTS.PRIVATE_ROUTES.CREATE_TRAVEL}/${id}`);
        setData(data.filter(item => item.id !== id));
        console.log('This item was eliminated', id);
      } catch (error) {
        console.error('There is a error for eliminate this file:', error);
      }
    };
  
    const openModal = (item) => {
      setSelectedItem(item);
      setFormData({ location: item.location, rating: item.rating, review: item.review, createdAt: item.createdAt,name:item.name });
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setSelectedItem(null);
    };
  
    const handleEditSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axiosInstance.put(`${API.ENDPOINTS.PRIVATE_ROUTES.CREATE_TRAVEL}/${selectedItem.id}`, formData);
        setData(data.map(item => (item.id === selectedItem.id ? response.data : item)));
        closeModal();
        console.log('Item was updated', response.data);
      } catch (error) {
        console.error('There is a error with the update of the item', error);
      }
    };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const customStyles = {
      content: {
        width: '50%',
        height: '60%',
        margin: 'auto',
        padding: '20px',
        background:'linear-gradient(to right top, #24b9c7, #00afea, #009eff, #517fff, #c241ec)'
      },
    };
  
    return (
      <>
        {data.map((item) => (
          <div className="travel" key={item.id}>
            <div className="card-title-travel">{item.name}</div>
            <div className="card-content-travel">
              <IoLocationOutline className="card-icon-travel" />
              <div className="card-text-travel">{item.location}</div>
            </div>
            <div className="card-content-travel">
              <PiShootingStarThin className="card-icon-travel" />
              <div className="card-text-travel">{item.rating}</div>
            </div>
            <div className="card-content-travel">
              <MdOutlineReviews className="card-icon-travel" />
              <div className="card-text-travel">{item.review}</div>
            </div>
            <div className="card-content-travel">
              <CiClock2 className="card-icon-travel" />
              <div className="card-text-travel">{item.createdAt}</div>
            </div>
            <div className="card-buttons-travel">
              <button className="card-button-travel edit" onClick={() => openModal(item)}>Editar</button>
              <button className="card-button-travel delete" onClick={() => handleDelete(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Editar Viaje"
          style={customStyles}
        >
          <h2 className="label-modal">Editar Viaje</h2>
          {selectedItem && (
            <form onSubmit={handleEditSubmit}>
              <div>
                <label className = "label-modal">Ingresa el lugar de viaje</label>
                <InputForm
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className = "label-modal">Rating:</label>
                <InputForm
                  type="text"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className = "label-modal">Review:</label>
                <InputForm
                  type="text"
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className = "label-modal">Created At:</label>
                <InputForm
                  type="text"
                  name="createdAt"
                  value={formData.createdAt}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className = "label-modal">Ingresa el nombre de la publicacion</label>
              <InputForm
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                </div>
              <button type="submit" className="button-modal">Guardar</button>
              <button type="button" className = "button-modal" onClick={closeModal}>Cancelar</button>
            </form>
          )}
        </Modal>
      </>
    );
  };

export default CardTravel;
