import logo from '../assets/logo.png'
import { useState } from 'react'
import '../styles/app.css'


export const Navbar = ({routes = ["Login"]}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navContainer">
        <div className="logo"><img className = "logo-img"src={logo} alt="" /></div>
        
        <button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`navLinks ${isOpen ? 'open' : ''}`}>
        {routes.map((route,index) => (
            <a
              key={index}
              href="#"
              className="navLink"
            >
              {route}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};


