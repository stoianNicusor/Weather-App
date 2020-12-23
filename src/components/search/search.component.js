import React from 'react';
import PropTypes from 'prop-types';
import './search.style.scss';

function Search(props){
    return(
        <div>
            <input placeholder={props.placeholder} id='searchTxt'/>
            <button onClick={props.clickChange} id='button'>
                Submit
            </button>
           
        </div>
    )
}

Search.propTypes = {
    clickChange: PropTypes.any,
    placeholder: PropTypes.string,
}

export default Search;