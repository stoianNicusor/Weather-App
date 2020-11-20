import './temp.style.scss';

function Temp(props){
    return(
        <div className='temp'>
            { props.temp }
            { props.isCeleus ? '°C' : '°' }
        </div>
    )
}

export default Temp;