import React from 'react';
import './styles/contact.css'; // Import the CSS file
import facebookLogo from './styles/images/facebook-logo.png'; // Adjust paths for images
import instaLogo from './styles/images/insta-logo.png';
import gmailLogo from './styles/images/gmail-logo.png';
import BkashLogo from './styles/images/bkash-logo.png';

const Contact = ({ changePage }) => {
  return (
    <div className='Body'>
      <h1 className='Title'>Contact Us</h1>
      <div className="Contact-Container">
        <ul className='SocialMediaList'>
          <li className='SocialMedia'>
            <img src={facebookLogo} alt="" width="50px" id='FBLogo'/>
            <a  href="https://www.facebook.com/profile.php?id=100089651915657"  target="_blank" className="Contact-Text" id="Contact-SocialMedia">
              Al-Khidmah Movement
            </a>
          </li>
          <li className='SocialMedia'>
            <img src={instaLogo} alt="" width="50px" id='InstaLogo'/>
            <a href="https://www.facebook.com/profile.php?id=100089651915657"  target="_blank" className="Contact-Text" id="Contact-SocialMedia">
              Al-Khidmah Movement
            </a>
          </li>
          <li className='SocialMedia'>
            <img src={gmailLogo} alt="" width="50px" id='GmailLogo'/>
            <p className="Contact-Text" id="Contact-SocialMedia">
              alkhidmahmovement@gmail.com
            </p>
          </li>
          <li id="Bkash" className='SocialMedia'>
            <img src={BkashLogo} alt="" height="50px" id='BkashLogo'/>
            <p className="Contact-Text">Donate: +8801609227117</p>
          </li>
        </ul>
      </div>
      <a href="#" className="Homepage-Link" onClick={() => changePage('about')}>
        <span className="red-asterisk">{'<<'}</span> Go back to homepage
      </a>
    </div>
  );
};

export default Contact;