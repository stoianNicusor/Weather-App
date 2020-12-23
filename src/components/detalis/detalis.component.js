import React from 'react';
import PropTypes from 'prop-types';
import './detalis.style.scss';

function Detalis(props){
    return(
        <div className='detalis'>
           {props.detalis}
        </div>
    )
}

Detalis.propTypes = { 
    detalis: PropTypes.string
}

export default Detalis;