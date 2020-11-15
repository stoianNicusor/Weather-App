import './detalis.style.scss';
import {FaPowerOff} from 'react-icons/fa';

function Detalis(props){
    return(
        <div className='detalis'>
           {props.detalis}
        </div>
    )
}

export default Detalis;