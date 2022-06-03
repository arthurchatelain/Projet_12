import PropTypes from 'prop-types'

/**
 * Return an svg PieChart.
 * @const {number} percentage - The percentage the PieChart will be fill with
 * @const {number} size - The size of the PieChart
 */

export default function PieChart (props) {
    const percentage = props.percentage
    const strokeWidth = 10
    const size = 175
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * Math.PI * 2;
    const dash = (percentage * circumference) / 100;
    return (
        <svg  width={size} height={size}>
            <circle fill="#FFFFFF" stroke="none" cx={size / 2} cy={size / 2} r={radius} strokeWidth={`${strokeWidth}px`} />
            <circle fill='none' stroke='#FF0000' cx={size / 2} cy={size / 2} r={radius} strokeWidth={`${strokeWidth}px`} transform={`rotate(-90 ${size / 2} ${size / 2})`} strokeDasharray={[dash, circumference - dash]} strokeLinecap="round" style={{ transition: "all 1.5s" }} />
            <text fill="black" fontWeight={700} fontSize="25px" x="50%" y="50%" dy={-5} textAnchor="middle" >{`${percentage}%`}</text>
            <text fill="black" fontWeight={500} fontSize="15px" x="50%" y="50%" dy={20} textAnchor="middle" >de votre objectif</text>
        </svg>
    )
}

PieChart.propTypes = {
    percentage: PropTypes.number.isRequired
}