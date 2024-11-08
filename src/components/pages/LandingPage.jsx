import { AnimateTitle } from '../common/AnimateTitle'
import { ImageCard } from '../common/ImageCard'
import colombiaImg from '../../assets/colombiaImg.jpg'
import spainImg from '../../assets/spainImg.jpg'
import australiaImg from '../../assets/australiaImg.jpg'
import japanImg from "../../assets/japanImg.jpg"
import { TextCard } from '../common/TextCard'
import { Footer } from '../common/Footer'
import { Navbar } from '../common/Navbar'
import '../../styles/app.css'


export const LandingPage = () => {

  return (
    <main>
  <Navbar
  routes={["Login"]}
  />
  <AnimateTitle/>
  <div className="main-container">
    <div className="cards">
     <TextCard
     background='linear-gradient(to right top, #24b9c7, #00afea, #009eff, #517fff, #c241ec)'
     title='Quienes somos?'
     text='Somos una pagina web que esta orientada a la busqueda de viajes y a la proporcion de recursos para 
     que tengas la capacidad de crear el viaje que quieras, podras compartir tus experiencias para otros y conocer
     nuevas experiencia para ti.
     ' 
     />
     <TextCard
     background='linear-gradient(to right top, #24b9c7, #00afea, #009eff, #517fff, #c241ec)'
     title = "Que puedes hacer en esta plataforma?"
     text='Tendras la capacidad de plasmar tus viajes de la forma que lo prefieras, tienes total control
     sobre como deseas gestionar esto, tambien puedes ver los viajes de otros usuarios asi puedes disfrutar del
     increible mundo del viaje desde distintas perspectivas.
     '
     />
    </div>
  </div>
    <div className = "second-title">
    <h1 className = "gradient-title">Explora increibles lugares alrededor del mundo</h1>
    </div>
    <ul className="cards-img">
    <ImageCard
  title='Colombia'
  text='Colombia es un destino de vibrantes contrastes y asombrosa biodiversidad. 
  Desde las playas del Caribe en Cartagena hasta las selvas amazónicas, y de las históricas calles de Bogotá a las montañas de los Andes. 
  Su famosa región cafetera es imperdible, y ciudades como Medellín sorprenden con su modernidad y cultura. Además, no te puedes perder la magia del Parque Nacional Natural Tayrona y la belleza del Desierto de la Tatacoa. '
  backgroundImage = {`url(${colombiaImg})`}
  link= "https://colombia.travel/es/blog/conoce-colombia-traves-de-su-gente-y-descubre-el-pais-mas-acogedor-del-mundo"
  />
    <ImageCard
  title='España'
  text='España es sinónimo de diversidad cultural y paisajes impresionantes. 
  Desde las playas soleadas de la Costa del Sol y 
  las Islas Baleares hasta la rica historia de ciudades como Madrid, Barcelona y Sevilla. 
  Cada región ofrece una experiencia única, como el flamenco en Andalucía, la arquitectura modernista en Cataluña y la deliciosa gastronomía en el País Vasco. También destacan sus fiestas tradicionales, como La Tomatina y Las Fallas '
  backgroundImage={`url(${spainImg})`}
  link = "https://www.spain.info/es/"
  />
    <ImageCard
  title='Australia'
  text='Australia es conocida por su naturaleza espectacular y 
  su vida silvestre única. Sidney con su icónica Ópera y la Gran Barrera de Coral son solo el comienzo. 
  Melbourne impresiona con su arte y cultura, mientras que Uluru (Ayers Rock) ofrece una conexión espiritual con el desierto rojo. Además, la región de Queensland es perfecta para los amantes de la aventura, con playas paradisíacas y selvas tropicales.'
  backgroundImage={`url(${australiaImg})`}
  link = "https://www.smartraveller.gov.au/"
  />
    <ImageCard
  title='Japon'
  text='Japón mezcla a la perfección la tradición y la modernidad. Desde los templos antiguos de Kioto hasta los rascacielos futuristas de Tokio, el país ofrece una experiencia inigualable. La temporada de los cerezos en flor (sakura) es un espectáculo natural, y los baños termales (onsen) brindan una relajación incomparable. No te puedes perder el Monte Fuji, los jardines japoneses y la rica gastronomía, incluyendo sushi y ramen.'
  backgroundImage={`url(${japanImg})`}
  link = "https://www.japan.travel/es/es/"
  />
      </ul>
  <Footer/>
  </main>
  )
}
