import React, { useState, useEffect} from 'react'
import callApi from '../API/callApi'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";
import '../Style/Performance.css'

export default function Performance (props) {
    const [dataPerformance, setdataPerformance] = useState('vide')
    useEffect(() => {callApi(props.id, '/performance').then(i => setdataPerformance(i))}, [])
    if (dataPerformance !== 'vide') {
        let data = dataPerformance.data
        for (let i = 0; i < data.length; i++) data[i].kind = dataPerformance.kind[i + 1]
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