import React, { useState, useEffect} from 'react'
import callApi from '../API/callApi'
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import '../Style/SessionDuration.css'
import PropTypes from 'prop-types'

/**
 * Return the Average duration of sessions graph.
 * @param {number} props.id - the id of the user
 * @const {object} dataDuration - The duration of the sessions over a week
 */

export default function SessionDuration (props) {

    // API call
    const [dataDuration, setdataDuration] = useState('vide')
    useEffect(() => {callApi(props.id, '/average-sessions').then(i => setdataDuration(i.sessions))}, [])

    // So we dont return with void data
    if (dataDuration !== 'vide') {

        // We replace number day by letter day
        dataDuration.forEach(item => {
            switch(item.day.toString()) {
                case '1':
                    item.day = 'L'
                    break
                case '2':
                    item.day = 'M'
                    break
                case '3':
                    item.day = 'M'
                    break
                case '4':
                    item.day = 'J'
                    break
                case '5':
                    item.day = 'V'
                    break
                case '6':
                    item.day = 'S'
                    break
                case '7':
                    item.day = 'D'
                    break
            }
        })

        // Return the component
        return (
            <section className='sessionDuration'>
                <p className='p'>Durée moyenne des sessions</p>
                <LineChart width={234} height={191} data={dataDuration}>
                    <XAxis tickLine={false} axisLine={false} dataKey="day" dy={9} stroke="#FFFFFF" />
                    <YAxis hide={true}/>
                    <Tooltip content={data => {
                        if(data.payload.length !== 0) {
                            return (
                                <p>{data.payload[0].payload.sessionLength} min</p>
                            )
                    }}}/>
                    <Line stroke="#FFFFFF" strokeOpacity={0.7} strokeWidth={1.5} dot={false} type="basis" dataKey="sessionLength" />
                </LineChart>
            </section>
        )
    }
}

SessionDuration.propTypes = {
    id: PropTypes.number.isRequired
}