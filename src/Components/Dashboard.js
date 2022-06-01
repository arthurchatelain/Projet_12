import '../Style/Dashboard.css'
import React, { useState, useEffect } from 'react'
import callApi from '../API/callApi'
import DailyActivity from './DailyActivity';
import Performance from './Performance';
import Score from './Score'
import SessionDuration from './SessionDuration';
import Nutriment from './Nutriment';
import { useNavigate } from 'react-router-dom';

export default function Dashboard (props) {

    // API call + validation de l'id 
    let navigate = useNavigate()
    const [userName, setName] = useState('Visiteur')
    useEffect(() => {callApi(props.id).then(i => {
        if (i === undefined) navigate('/')
        else setName(i.userInfos.firstName) 
    })}, [])

    // So we dont return with void data
    if (userName !== 'Visiteur') {
        return (
            <div className='dashboard'>
                <div className='dashboardHeader'>
                    <h1 className='title'>Bonjour <p className='name'>{userName}</p></h1>
                    <h2 className='subtitle'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
                </div>
                <div className='dashboardBody'>
                    <section className='dashboardLeft'>
                        <DailyActivity id={props.id}/>

                        {/* Bottom left */}
                        <section className='dashboardBottom'>
                            <SessionDuration id={props.id}/>
                            <Performance id={props.id}/>
                            <Score id={props.id}/>
                        </section>
                    </section>
                    <section className='dashboardRight'>
                        <Nutriment id={props.id} call='calorie' name="Calories" unit="kCal"/>
                        <Nutriment id={props.id} call='protein' name="Protéines" unit="g"/>
                        <Nutriment id={props.id} call='carbohydrate' name="Glucides" unit="g"/>
                        <Nutriment id={props.id} call='lipid' name="Lipides" unit="g"/>
                    </section>
                </div>
            </div>
        ) 
    }
}