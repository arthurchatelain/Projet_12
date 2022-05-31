import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import React, { useState, useEffect} from 'react'
import callApi from '../API/callApi'
import '../Style/DailyActivity.css'

export default function DailyActivity (props) {
    const [dataActivity, setdataActivity] = useState('vide')
    useEffect(() => {callApi(props.id, '/activity').then(i => setdataActivity(i.sessions))}, [])
    if (dataActivity !== 'vide') {
        dataActivity.forEach(item => item.day = item.day.slice(-5))
        return (
            <section className='dailyActivity'>
                <p className="dailytitre">Activité quotidienne</p>
                <BarChart width={792} height={280} barSize={8} data={dataActivity} >
                    <CartesianGrid vertical={false} strokeDasharray={1}/>
                    <XAxis tickLine={false} axisLine={false} dataKey="day" />
                    <YAxis tickLine={false} axisLine={false} orientation="right" dataKey={'calories'}/>
                    <Tooltip />
                    <Legend iconSize={8} iconType={'circle'} layout="horizontal" verticalAlign="top" align="right" height={82} wordSpacing/>
                    <Bar name='Poids (kg)' dataKey="kilogram" fill="#000000" radius={[8, 8, 0, 0]}/>
                    <Bar name='Calories brûlées (kCal)' dataKey="calories" fill="#E60000" radius={[8, 8, 0, 0]}/>
                </BarChart>
            </section>
        )
    }
}