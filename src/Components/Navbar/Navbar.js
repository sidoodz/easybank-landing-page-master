import React ,{useState}from 'react';
import './Navbar.css';
// import { Link } from 'react-router-dom';
const  Navbar = () => {
  const[click ,setClick] =useState(false);
  const closeMobileMenu = () => setClick(false);
  const menuToggle=()=>{
    setClick(!click);
  }
 

  return (
    <div className="header">
      <div className="header-container">
      <div className="header-logo">
        <img src="./images/logo.svg" className="logo-img" alt="logo" />
      </div>
      <ul className={click ? "nav active" :  "nav"}>
        <li className="nav-item"> <a href="#home" onClick={closeMobileMenu}>Home</a></li>
    
        <li className="nav-item"><a href="#about" onClick={closeMobileMenu}>About</a></li>
        <li className="nav-item"><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        <li className="nav-item"><a href="#blog"onClick={closeMobileMenu}>Blog</a></li>
        <li className="nav-item"><a href="#careers" onClick={closeMobileMenu}>Careers</a></li>
      </ul>
      <button className="request-invite-btn">Request invite</button>
      <button className="dropDown-toggle" onClick ={menuToggle}>
        {click ?<img src="./images/icon-close.svg"/> :<img src="./images/icon-hamburger.svg"/>}
        </button>
    </div>
    </div>
  );
}

export default Navbar;