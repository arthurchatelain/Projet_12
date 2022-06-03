import React, { useState, useEffect} from 'react'
import callApi from '../API/callApi'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import '../Style/Performance.css'
import PropTypes from 'prop-types'

/**
 * Return the performance graph.
 * @param {number} props.id - the id of the user
 * @const {object} dataPerformance - The performance of the user
 */

export default function Performance (props) {

    // API call
    const [dataPerformance, setdataPerformance] = useState('vide')
    useEffect(() => {callApi(props.id, '/performance', props.needMock).then(i => setdataPerformance(i))}, [])

    // So we dont return with void data
    if (dataPerformance !== 'vide') {

        // Adding the kind of the datas
        let data = dataPerformance.data
        for (let i = 0; i < data.length; i++) data[i].kind = dataPerformance.kind[i + 1]

        // return the component
        return (
            <section className='performance'>
                <RadarChart outerRadius={75} width={258} height={263} data={data}>
                    <PolarGrid stroke='#FFFFFF'/>
                    <PolarAngleAxis dataKey='kind' stroke="#FFFFFF" />
                    <Radar name="Mike" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.7}/>
                </RadarChart> 
            </section>
        )
    }
}

Performance.propTypes = {
    id: PropTypes.number.isRequired
}