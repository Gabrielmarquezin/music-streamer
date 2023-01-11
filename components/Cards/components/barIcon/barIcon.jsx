import react, { useState } from "react";
import HeartRegular, {HeartSolid, EllipsVertical} from "../../../../public/icons/icons";
import { ConteinConfig } from "../config";

export default function BarIcon(){

    const [change, setChange] = useState(false)
    const [config, setConfig] = useState(false)

    function changeIcon(){
        if(change){
            setChange(false)
        }else{
            setChange(true)
        }
    }

    function renderConfig(){
        if(config){
            setConfig(false)
        }else{
            setConfig(true)
        }
    }

    return(
        <div className="icons-info">
            <div className="heart" onClick={changeIcon}>
                {change ? <HeartSolid /> : <HeartRegular />}
            </div>
            <div className="elipse" >
                <div className="event-click" onClick={renderConfig}>
                    <EllipsVertical />
                </div>
                {config ? <ConteinConfig /> : ""}
            </div>    
        </div>
    )
}