// import React, { useState } from 'react';
// import './Navbar.css';
// import logo from '../../assets/logo.jpg';
// import underline from '../../assets/nav_underline.svg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

// const Navbar = () => {
//   const [menu, setMenu] = useState('home');

//   const handleClick = (section) => {
//     setMenu(section);
//   };

//   return (
//     <nav className="navbar">
//       <img src={logo} alt="" />

//       <ul className="nav-menu">
//         <li>
//           <AnchorLink className="anchor-link" href='#home' onClick={() => handleClick('home')}>
//             <p>Home</p>
//             {menu === 'home' && <img src={underline} alt="underline" />}
//           </AnchorLink>
//         </li>
//         <li>
//           <AnchorLink className="anchor-link" href="#about" offset={50} onClick={() => handleClick('about')}>
//             <p>About Me</p>
//             {menu === 'about' && <img src={underline} alt="underline" />}
//           </AnchorLink>
//         </li>
//         <li>
//           <AnchorLink className="anchor-link" href="#services" offset={50} onClick={() => handleClick('services')}>
//             <p>Services</p>
//             {menu === 'services' && <img src={underline} alt="underline" />}
//           </AnchorLink>
//         </li>
//         <li>
//           <AnchorLink className="anchor-link" href="#work" offset={50} onClick={() => handleClick('work')}>
//             <p>Projects</p>
//             {menu === 'work' && <img src={underline} alt="underline" />}
//           </AnchorLink>
//         </li>
//         <li>
//           <AnchorLink className="anchor-link" href="#contact" offset={50} onClick={() => handleClick('contact')}>
//             <p>Contact</p>
//             {menu === 'contact' && <img src={underline} alt="underline" />}
//           </AnchorLink>
//         </li>
//       </ul>

//       <AnchorLink
//         className="nav-connect"
//         href="#contact"
//         offset={50}
//         onClick={() => handleClick('contact')}
//       >
//        Let's Talk
//       </AnchorLink>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.PNG';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  const handleClick = (section) => {
    setMenu(section);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />

      <ul className="nav-menu">
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