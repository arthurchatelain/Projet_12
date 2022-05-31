import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style/index.css';
import Dashboard from './Components/Dashboard';
import SideIcons from './Components/Reusable/SideIcons'

const id = 12

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <header className="header">
        <img src='https://user.oc-static.com/upload/2020/08/18/15977560509272_logo%20%285%29.png' alt='logo' className='headerLinks'/>
        <p className='headerLinks'>Accueil</p>
        <p className='headerLinks'>Profil</p>
        <p className='headerLinks'>Réglage</p>
        <p className='headerLinks'>Communauté</p>
      </header>
      <div className='body'>
        <section className='Sidebar'>
          <SideIcons />
          <div className='SideTextContainer'><p className='SideText'>Copiryght, SportSee 2020</p></div>
        </section>
        <Dashboard id={id}/>
      </div>    
    </div>
  </React.StrictMode>
);