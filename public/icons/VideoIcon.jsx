import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons';


export default function Play(){
    return(
        <FontAwesomeIcon icon={faCirclePlay} className="icon"/>
    )
}

export function Pause(){
    return(
        <FontAwesomeIcon icon={faCirclePause} className="icon"/>
    )
}