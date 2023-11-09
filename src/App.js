import './App.css';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Events from './components/Events.js';
import Login from './components/Login.js';
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'about' && <About changePage={changePage} />}
      {currentPage === 'contact' && <Contact changePage={changePage} />}
      {currentPage === 'events' && <Events changePage={changePage} />}
      {currentPage === 'login' && <Login changePage={changePage} />}
    </div>
  );
}

export default App;