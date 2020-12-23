import React from 'react';
import PropTypes from 'prop-types';
import './button.component.scss';

function Button(props){
    return(
        <button onClick={props.clickChange}>
            {props.city}
        
        </button>
    )
}

Button.propTypes = {
    city: PropTypes.string,
    clickChange: PropTypes.any
}

export default Button;