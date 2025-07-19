mport React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.PNG';
import underline from '../../assets/nav_underline.svg';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu toggle

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = (section) => {
    setMenu(section);
    setIsMobileMenuOpen(false); // Close mobile menu on selection
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <a href="#home" onClick={() => handleClick('home')}>
            <p>Home</p>
            {menu === 'home' && <img src={underline} alt="underline" />}
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handleClick('about')}>
            <p>About Me</p>
            {menu === 'about' && <img src={underline} alt="underline" />}
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => handleClick('services')}>
            <p>Services</p>
            {menu === 'services' && <img src={underline} alt="underline" />}
          </a>
        </li>
        <li>
          <a href="#work" onClick={() => handleClick('work')}>
            <p>Projects</p>
            {menu === 'work' && <img src={underline} alt="underline" />}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handleClick('contact')}>
            <p>Contact</p>
            {menu === 'contact' && <img src={underline} alt="underline" />}
          </a>
        </li>
      </ul>

      <a className="nav-connect" href="#contact" onClick={() => handleClick('contact')}>
        Let's Talk
      </a>
    </nav>
  );
};

export default Navbar;
