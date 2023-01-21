import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faSquarePlus, faChartSimple} from '@fortawesome/free-solid-svg-icons';

export default function Home(){
    return(
        <FontAwesomeIcon icon={faHome} />
    )
}

export function Heart(){
    return(
        <FontAwesomeIcon icon={faHeart} />
    )
}

export function Plus(){
    return(
        <FontAwesomeIcon icon={faSquarePlus} className="icon"/>
    )
}

export function Graphic(){
    return(
        <FontAwesomeIcon icon={faChartSimple} />
    )
}


