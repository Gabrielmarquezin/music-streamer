import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical, faHeart as faHeartSolid, faCircleUser } from '@fortawesome/free-solid-svg-icons';

export default function HeartRegular(){
    return(
        <FontAwesomeIcon icon={faHeart} />
    )
}

export function HeartSolid(){
    return(
        <FontAwesomeIcon icon={faHeartSolid} />
    )
}

export function EllipsVertical(){
    return(
        <FontAwesomeIcon icon={faEllipsisVertical} />
    )
}

export function PerfilIcon(props){
    return(
        <FontAwesomeIcon icon={faCircleUser} className="icon-user" onClick={props.onClick}/>
    )
}
 