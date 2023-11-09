import React, { useState } from 'react';
import './styles/events.css';
import logo from './styles/images/logo.png';
import event1 from './styles/images/event1.jpg';
import event2 from './styles/images/event2.png';
import event3 from './styles/images/event3.png';

const Events = ({ changePage }) => {
  const [menuIcon, setMenuIcon] = useState('☰');
  const [hidden, setHidden] = useState(true);

  const toggleMenu = () => {
    setMenuIcon(menuIcon === '☰' ? '✕' : '☰');
    setHidden(!hidden);
  };

  return (
    <div>
      <nav className="mobile-menu">
        <img src={logo} alt="logo" height="70" width="92" className="logo-mobile" />
        <div className="menu-icon" onClick={toggleMenu}>
          {menuIcon}
        </div>
        <nav id="hidden" style={{ display: hidden ? 'none' : 'flex' }}>
        <ul className="hidden-menu-list">
                <li className="hidden-menu-item">
                  <a href="#" id="hidden-link-about" onClick={() => changePage('about')}>
                    About
                  </a>
                </li>
                <li className="hidden-menu-item">
                  <a href="#" id="hidden-link-events" onClick={() => changePage('events')}>
                    Events
                  </a>
                </li>
                <li className="hidden-menu-item">
                  <a href="#" id="hidden-link-contact" onClick={() => changePage('contact')}>
                    Contacts
                  </a>
                </li>
                <li className="hidden-menu-item">
                  <a href="#" id="hidden-link-login" onClick={() => changePage('login')}>
                    Login
                  </a>
                </li>
              </ul>
          </nav>
      </nav>
      <nav className="desktop-menu">
        <ul className="menu-list">
          <img src={logo} alt="logo" height="70" width="92" className="logo-desktop" />
              <li className="menu-item">
                <a href="#" id="link-login" onClick={() => changePage('login')}>
                  Login
                </a>
              </li>
              <li className="menu-item">
                <a href="#" id="link-contact" onClick={() => changePage('contact')}>
                  Contact
                </a>
              </li>
              <li className="menu-item">
                <a href="#" id="link-events" onClick={() => changePage('events')}>
                  Events
                </a>
              </li>
              <li className="menu-item">
                <a href="#" id="link-about" onClick={() => changePage('about')}>
                  About
                </a>
              </li>
        </ul>
      </nav>
      <div className="event" id="event1">
        <img src={event1} alt="event1" width="100%" />
        <p className="bangla-text">
        <p className="bangla-text">
          লোকটির নাম সাইদুল। থাকে ময়মনসিংহের গৌরীপুরের লক্ষীপুর গ্রামে। সাইদুল তার পরিবারের একমাত্র উপার্জনকারী। দুর্ঘটনার মুখোমুখি হয়ে সাইদুল পঙ্গুত্ব বরণ করে, ফলে সে ও তার পরিবার চরম অসহায় হয়ে পড়ে।
          'আল খিদমাহ মুভমেন্ট' আল্লাহর অশেষ রহমতে তার হাতে কিছু অর্থ সহায়তা পৌঁছে দিতে সক্ষম হয়েছে আলহামদুলিল্লাহ।<br />মানুষের কাছে সহায়তা... <a href="https://www.facebook.com/photo.php?fbid=232237453107984&set=a.119959587669105&type=3&ref=embed_post" target='_blank' className="facebook-link">See more</a>
        </p>
          <br />
          <br />
        </p>
      </div>
      <div className="event" id="event2">
            <img src={event2} alt="event2" width="100%" />
            <p className="bangla-text">
                আলহামদুলিল্লাহ আল্লাহ তায়ালার অশেষ রহমতে 'আল খিদমাহ মুভমেন্ট' আসন্ন ঈদুল ফিতর উপলক্ষে প্রায় ২০ দরিদ্র পরিবারের কাছে ঈদের সদাই পৌঁছে দিতে সক্ষম হয়েছে। এই কাজে সহযোগিতাকারী সকলের প্রতি 'আল খিদমাহ মুভমেন্ট' এর পক্ষ থেকে শোকর।
                <br /><br />প্রত্যেক প্যাকেজে সদাই এর আইটেম ছিল ৬ টি:-
            </p>
            <ul id="itemList">
                <li>সেমাইয়ের প্যাকেট ১ টি</li>
                <li>নুডলসের প্যাকেট ১ টি</li>
                <li>পোলাও এর চাল ১ কেজি</li>
                <li>চিনি ১/২ কেজি</li>
                <li>মশলার প্যাকেট ১ টি</li>
                <li>তেল ২৫০ মিলি... <a href="https://www.facebook.com/permalink.php?story_fbid=143981398600257&id=100089651915657&ref=embed_post" target='_blank' className="facebook-link">See more</a></li>
            </ul>
            <br />
            <br />
        </div>
        <div className="event" id="event3">
            <img src={event3} alt="event3" width="100%" />
            <p  className="bangla-text">
            আলহামদুলিল্লাহ আল্লাহ তায়ালার অশেষ রহমতে 'আল খিদমাহ মুভমেন্ট' এই রমাদানে প্রায় ১৫০ জন রোজাদার এবং নিম্নশ্রেণীর অসহায় মানুষের কাছে ইফতার পৌঁছে দিতে সক্ষম হয়েছে। এই উদ্যোগে যাঁরা আমাদের সহায়তা করেছেন তাঁদের উদ্দেশ্যে 'আল খিদমাহ মুভমেন্ট' এর পক্ষ থেকে শোকর। জাযাকুমুল্লাহু খাইরান।
              'আল খিদমাহ মুভমেন্ট' সকলের অন্তরে... <a href="https://www.facebook.com/permalink.php?story_fbid=137254182606312&id=100089651915657&ref=embed_post" target='_blank' className="facebook-link">See more</a>
              <br />
              <br />
              <br />
            </p>
        </div>
      <div id="bottomSpace"></div>
    </div>
  );
};

export default Events;