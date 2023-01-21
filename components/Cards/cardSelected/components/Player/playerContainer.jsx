import React, { useContext } from "react";
import ContainerInfo from "./information/information";
import ContainerAudio from "./audio/audio";
import { PlayerLoadingStyle, PlayerStyler } from "../../../../../styles/musicSelected/playerStyle/playerStyle";
import { RenderLoading } from "../../cardSelected";
import Loading from "../../../load/load";



export default function ContainerPlayer(){
    const [loading] = useContext(RenderLoading)

    return(
        <>
           {loading ? <CardPlayLoading /> : <CardPlay />}
        </>
    )
}

function CardPlay(){
    return(
        <PlayerStyler>
            <ContainerAudio />
            <ContainerInfo />
        </PlayerStyler>  
    )
}

function CardPlayLoading(){
    return(
        <PlayerLoadingStyle>
            <Loading />
        </PlayerLoadingStyle>
    )
}