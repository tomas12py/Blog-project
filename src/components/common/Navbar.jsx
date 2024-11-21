import logo from '../../assets/logo.png'
import { useState } from 'react'


export const Navbar = ({routes = {}}) => {
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
        {Object.entries(routes).map(([title, link], index) => ( <a key={index} href={link} className="navLink"> {title} </a> ))}
        </div>
      </div>
    </nav>
  );
};


