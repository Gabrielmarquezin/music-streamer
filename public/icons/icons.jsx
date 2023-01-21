import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPenToSquare} from '@fortawesome/free-regular-svg-icons';
import { faEllipsisVertical, faHeart as faHeartSolid, faCircleUser, faX} from '@fortawesome/free-solid-svg-icons';

export default function HeartRegular(){
    return(
        <FontAwesomeIcon icon={faHeart} className="icon"/>
    )
}

export function HeartSolid(){
    return(
        <FontAwesomeIcon icon={faHeartSolid} className="icon"/>
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

export function X(){
    return(
        <FontAwesomeIcon icon={faX} className="icon"/>
    )
}

export function PentSquare(){
    return(
        <FontAwesomeIcon icon={faPenToSquare} className='icon' />
    )
}
 