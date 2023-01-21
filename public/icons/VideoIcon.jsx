import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import { faCirclePlay, faCirclePause, faForwardStep, faRepeat, faShuffle} from '@fortawesome/free-solid-svg-icons';


export default function Play(props){
    return(
        <FontAwesomeIcon icon={faCirclePlay} className="icon iconPlay" onClick={props.onClick}/>
    )
}

export function Pause(props){
    return(
        <FontAwesomeIcon icon={faCirclePause} className="icon iconPause" onClick={props.onClick}/>
    )
}


export function Next(props){
    return(
        <FontAwesomeIcon icon={faForwardStep} className="icon iconBlocked" onClick={props.onClick} />
    )
}

export function Back(props){
    return(
        <FontAwesomeIcon icon={faForwardStep} className="icon iconBlocked" style={{rotate: '180deg'}} onClick={props.onClick}/>
    )
}

export function Repeat(){
    return(
        <FontAwesomeIcon icon={faRepeat} className="iconP iconBlocked"/>
    )
}

export function Shuffle(){
    return(
        <FontAwesomeIcon icon={faShuffle} className="iconP iconBlocked"/>
    )
}