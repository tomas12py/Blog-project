import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export const Footer = () => {
  return (
<footer className="footer">
    <h3 className="footer-phrase">Redes sociales y contactos</h3>
    <div className="social-icons">
      <a 
        href="https://www.facebook.com"
        target="_blank"
        className="social-icon"
      >
       <FaFacebook/>
      </a>
      <a href="https://www.twitter.com" target="_blank" className="social-icon">
      <FaSquareXTwitter/>
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        className="social-icon"
      >
       <FaInstagram/>
      </a>
      <a
        href="mailto:tomi12mc@gmail.com"
        target="_blank"
        className="social-icon"
      >
       <MdOutlineMail/>
      </a>
      <a
        href="https://wa.link/6oibtt"
        target="_blank"
        className="social-icon"
      >
       <FaWhatsapp/>
      </a>
    </div>
  </footer>

  )
}
