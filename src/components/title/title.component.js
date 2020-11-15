import './title.style.scss';

function Title(props){
    return(
        <div className='title'>
            { props.text }
        </div>
    )
}

export default Title;