import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";
import React, { useState } from "react";
import HeartRegular, { HeartSolid } from "../../../../../../public/icons/icons";
import { ButtonInfoStyles } from "../../../../../../styles/musicSelected/playerStyle/playerStyle";
import { Plus } from "../../../../../menu/menu-v/icons";


export default function ContainerButonInfo(){
    
    return(
        <ButtonInfoStyles>
            <ButtonsInfo  />
        </ButtonInfoStyles>
    )
}


function ButtonsInfo(props){
    const [heart, setHeart] = useState(false)

    function handleHeart(){
        if(heart){
            setHeart(false)
        }else{
            setHeart(true)
        }
    }
    

    return(
        <>
            <div className="create-playlist">
                <Plus />
                <p>ADD PLAYLIST </p>
            </div>

            <div className="heart" onClick={handleHeart}>
                {heart ? <HeartSolid /> : <HeartRegular />}
            </div>
        </>
    )
}