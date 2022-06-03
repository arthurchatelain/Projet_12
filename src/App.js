import React from 'react';
import './Style/index.css';
import Dashboard from './Components/Dashboard';
import SideIcons from './Components/Reusable/SideIcons'
import { useParams } from "react-router-dom"

/**
 * Return the App component.
 * @param {number} params.id - the id of the user that we get from the url
 */

export default function App () {

    // recuperation of the id frome the url
    let params = useParams()
    let id = params.id

    // return the component
    return (
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
    )
}