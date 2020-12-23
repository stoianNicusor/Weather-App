import React from 'react';
import PropTypes from 'prop-types';
import './title.style.scss';

function Title(props){
    return(
        <div className='title'>
            { props.text }
        </div>
    )
}

Title.propTypes = {
    text: PropTypes.string
}

export default Title;