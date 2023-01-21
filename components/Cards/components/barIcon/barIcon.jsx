import react, { useState } from "react";
import HeartRegular, {HeartSolid, EllipsVertical} from "../../../../public/icons/icons";
import { ConteinConfig } from "../config";
import { ConfigIcon } from "./config";

export default function BarIcon(){

    const [change, setChange] = useState(false)
    
    function changeIcon(){
        if(change){
            setChange(false)
        }else{
            setChange(true)
        }
    }


    return(
        <div className="icons-info">
            <div className="heart" onClick={changeIcon}>
                {change ? <HeartSolid /> : <HeartRegular />}
            </div>
           <ConfigIcon />
        </div>
    )
}