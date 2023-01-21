import React, { createContext, useContext, useState } from "react";
import HeartRegular, { HeartSolid } from "../../../../../../public/icons/icons";
import { InformationStyle } from "../../../../../../styles/musicSelected/playerStyle/playerStyle";
import { Plus } from "../../../../../menu/menu-v/icons";
import { renderContext } from "../../../../../../RenderControl/RenderCard";
import { CardDataContext } from "../../../../card";


export default function ContainerInfo(){
    const [,,,obj] = useContext(renderContext)

    return(
        <InformationStyle>
            <Info data={obj}/>
        </InformationStyle>
    )
}

export function Info(props){
    const data = props.data
   
    return(
        <>
            <div className="music-info">
                <p>{data.musicName || data.title}</p>
                <p>{data.artist}</p>
            </div>
        </>
    )
}