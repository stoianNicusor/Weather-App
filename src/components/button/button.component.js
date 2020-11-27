import React from 'react';
import './button.component.scss';

function Button(props){
    return(
        <button onClick={props.clickChange}>
            {props.city}
        
        </button>
    )
}

export default Button;