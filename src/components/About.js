import React, { useState } from 'react';
import './styles/about.css';
import logo from './styles/images/logo.png';

const About = ({ changePage }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [containerPadding, setContainerPadding] = useState('100px');

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    setContainerPadding(menuIsOpen ? '100px' : '180px');
  };

  return (
    <div>
      <nav className="Mobile-Menu">
        <img src={logo} alt="logo" height="70" width="92" className="Logo-Mobile" />
        <div className="Menu-Icon" onClick={toggleMenu}>
          {menuIsOpen ? '✕' : '☰'}
        </div>
        <nav id="Hidden-Container" style={{ display: menuIsOpen ? 'flex' : 'none' }}>
          <ul className="Hidden-Menu-List">
            <li className="Hidden-Menu-Item">
              <a href="#" id="Hidden-Link-About" onClick={() => changePage('about')}>
                About
              </a>
            </li>
            <li className="Hidden-Menu-Item">
              <a href="#" id="Hidden-Link-Events" onClick={() => changePage('events')}>
                Events
              </a>
            </li>
            <li className="Hidden-Menu-Item">
              <a href="#" id="Hidden-Link-Contact"onClick={() => changePage('contact')}>
                Contacts
              </a>
            </li>
            <li className="Hidden-Menu-Item">
              <a href="#" id="Hidden-Link-Login" onClick={() => changePage('login')}>
                Login
              </a>
            </li>
          </ul>
        </nav>
      </nav>
      <nav className="Desktop-Menu">
        <ul className="Menu-List">
          <img src={logo} alt="logo" height="70" width="92" className="Logo-Desktop" />
          <li className="Menu-Item">
            <a href="#" id="Link-Login" onClick={() => changePage('login')}>
              Login
            </a>
          </li>
          <li className="Menu-Item">
            <a href="#" id="Link-Contact" onClick={() => changePage('contact')}>
              Contact
            </a>
          </li>
          <li className="Menu-Item">
            <a href="#" id="Link-Events" onClick={() => changePage('events')}>
              Events
            </a>
          </li>
          <li className="Menu-Item">
            <a href="#" id="Link-About" onClick={() => changePage('about')}>
              About
            </a>
          </li>
        </ul>
      </nav>
      <div className="Container" style={{ paddingTop: containerPadding }}>
        <div className="Banner">
          <p className="Banner-Text">Donate now, <br />Make a difference</p>
        </div>
      </div>
      <h1 className='H1'>Who are we?</h1>
      <hr className='HR'/>
      <p className="Text">
            We are Al-Khidmah Movement, a legally authorized charity organization based in Mymensingh, Bangladesh. Our main goal is simple: to help those in need within our community. We are a non-profit group with a clear mission – to support people who are struggling.
            Our focus is on making life better for those who are hungry, disabled, injured, or simply finding it tough to feed their families. We want to bring hope to those who feel they have none, especially among the poorest in Bangladesh.
            <br /><br />
            Al-Khidma Movement works to make a difference in the lives of those who need it most. We provide food to those who are hungry, help individuals and families who can't support themselves due to disabilities or injuries, and bring hope to those who are struggling because of poverty.
            <br /><br />
            Our aim is to create a more caring and fair society. We believe that by working together and supporting each other, we can make life better for everyone. We're a group of people who care, working hard to help those who need it the most.
            <br /><br /> 
            Join us in our mission to give hope to those who feel they have none and to lend a hand to those in need. Together, we can make a real difference and create a more caring environment for everyone in Bangladesh. 
            <br /><br /><br />
      </p>
    </div>
  );
};

export default About;