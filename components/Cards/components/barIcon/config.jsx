import React, { useState } from "react";
import { EllipsVertical } from "../../../../public/icons/icons";
import { ConteinConfig } from "../config";

export function ConfigIcon(){

    const [config, setConfig] = useState(false)

    function renderConfig(){
        if(config){
            setConfig(false)
        }else{
            setConfig(true)
        }
    }

    return(
        <div className="elipse" >
            <div className="event-click" onClick={renderConfig}>
                <EllipsVertical />
            </div>
            {config ? <ConteinConfig /> : ""}
        </div>    
    )
}