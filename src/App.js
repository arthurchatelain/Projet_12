import React from 'react';
import './Style/index.css';
import Dashboard from './Components/Dashboard';
import SideIcons from './Components/Reusable/SideIcons'
import { useParams } from "react-router-dom"
import { useState, useEffect} from 'react'
import callApi from './API/callApi';

/**
 * Return the App component.
 * @param {number} params.id - the id of the user that we get from the url
 */

export default function App () {

    // recuperation of the id frome the url
    let params = useParams()
    let id = parseInt(params.id)

    // Test de l'API
    const [needMock, setNeedMock] = useState('vide')
    useEffect(() => {callApi(id, '', false).then(i => {i === false ? setNeedMock(true) : setNeedMock(false)})}, [])

    // return the component
    if (needMock === true || needMock === false) {
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
                    <Dashboard id={id} needMock={needMock}/>
                </div>    
            </div>
        )
    }
}