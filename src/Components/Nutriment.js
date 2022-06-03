import callApi from "../API/callApi";
import React, { useState, useEffect} from 'react'
import NutrIcon from "./Reusable/NutrIcon";
import '../Style/Nutriment.css'
import PropTypes from 'prop-types'

/**
 * Return a nutriment component.
 * @param {number} props.id - the id of the user
 * @param {string} props.call - the callname of the nutriment
 * @param {string} props.unit - the unit of the nutriment
 * @param {string} props.name - the name of the nutriment
 * @const {number} data - the quantity of that nutriment
 */


export default function Nutriment (props) {

    // API call
    const [data, setdata] = useState('vide')
    useEffect(() => {callApi(props.id).then(i => setdata(i.keyData[props.call + 'Count']))}, [])

    // So we dont return with void data
    if (data !== 'vide') {

        // svg icon that correspond to the nutrient
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

Nutriment.propTypes = {
    id: PropTypes.number.isRequired,
    call: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired
}