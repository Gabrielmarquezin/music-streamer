import React from "react";
import ConteinerConfig from "../../../styles/card/config/config";


export default function Config(props){
    return(
        <ConteinerConfig>
            <div className="triangle"></div>
            <nav>
                <ul>
                    <li>Adicionar a Playlist</li>
                </ul>
            </nav>
        </ConteinerConfig>
    )
}

export function ConteinConfig(){

    
    return(
        <Config />
    )
}