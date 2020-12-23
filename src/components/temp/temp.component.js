import React from 'react';
import PropTypes from 'prop-types';
import './temp.style.scss';


function Temp(props){
    return(
        <div className='temp'>
            { props.temp }
            { props.isCeleus ? '°C' : '°' }
        </div>
    )
}

Temp.propTypes = {
    temp: PropTypes.number,
    isCeleus: PropTypes.any
}

export default Temp;