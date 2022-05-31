import React, { useState, useEffect} from 'react'
import callApi from '../API/callApi'
import PieChart from './Reusable/PieChart'
import '../Style/Score.css'

export default function Score (props) {

    // API call
    const [percentage, setpercentage] = useState(0)
    useEffect(() => {callApi(props.id).then(i => setpercentage((i.todayScore || i.score) * 100))}, [])
    return (
        <section className='score'>
            <h1>Score</h1>
            <PieChart percentage={percentage} />
        </section>
    );
}
