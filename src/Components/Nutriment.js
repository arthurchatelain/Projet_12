import callApi from "../API/callApi";
import React, { useState, useEffect} from 'react'
import NutrIcon from "./Reusable/NutrIcon";
import '../Style/Nutriment.css'

export default function Nutriment (props) {
    const [data, setdata] = useState('vide')
    useEffect(() => {callApi(props.id).then(i => setdata(i.keyData[props.call + 'Count']))}, [])
    if (data !== 'vide') {
        const Svg = NutrIcon(props.call)
        return (
            <div className="nutrits">
                {Svg}
                <div className="text">
                    <p className="quantity">{data + props.unit}</p>
                    <p className="nutriment">{props.name}</p>
                </div>
            </div>
        )
    }
}