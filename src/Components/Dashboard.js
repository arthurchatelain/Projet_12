import '../Style/Dashboard.css'
import React, { useState, useEffect } from 'react'
import callApi from '../API/callApi'
import DailyActivity from './DailyActivity'
import Performance from './Performance'
import Score from './Score'
import SessionDuration from './SessionDuration'
import Nutriment from './Nutriment'
import PropTypes from 'prop-types'

/**
 * Return the Dashboard with all the graphics.
 * @param {number} props.id - the id of the user
 * @const {string} userName - The name the user ( from the api )
 */

export default function Dashboard (props) {

    // API call + validation de l'id 
    const [userName, setName] = useState('Visiteur')
    useEffect(() => {callApi(props.id, '', props.needMock).then(i => {setName(i.userInfos.firstName) })}, [])

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
                        <DailyActivity id={props.id} needMock={props.needMock}/>

                        {/* Bottom left */}
                        <section className='dashboardBottom'>
                            <SessionDuration id={props.id} needMock={props.needMock}/>
                            <Performance id={props.id} needMock={props.needMock}/>
                            <Score id={props.id} needMock={props.needMock}/>
                        </section>
                    </section>
                    <section className='dashboardRight'>
                        <Nutriment id={props.id} needMock={props.needMock} call='calorie' name="Calories" unit="kCal"/>
                        <Nutriment id={props.id} needMock={props.needMock} call='protein' name="Protéines" unit="g"/>
                        <Nutriment id={props.id} needMock={props.needMock} call='carbohydrate' name="Glucides" unit="g"/>
                        <Nutriment id={props.id} needMock={props.needMock} call='lipid' name="Lipides" unit="g"/>
                    </section>
                </div>
            </div>
        ) 
    }
}

Dashboard.propTypes = {
    id: PropTypes.number.isRequired
}