import React, { createContext, useContext, useEffect, useState } from "react";
import { render } from "react-dom";
import { X } from "../../../public/icons/icons";
import { ExitStyle, MusicSelectedStyles } from "../../../styles/musicSelected/musicSelected";
import { renderContext } from "../../../RenderControl/RenderCard";
import { AudioContext } from "../card";
import ContainerCardCategoria from "./components/categoria/categorias";
import ContainerOtherMusics from "./components/otherMusics/Othermusic";
import ContainerPlayer from "./components/Player/playerContainer";

export const RenderLoading = createContext('')

export default function ContainerCardSelected(){
    const [render, setRender] = useContext(renderContext)
    const [loading, setLoading] = useState(false)
    const [resetAudio, setResetAudio] = useContext(AudioContext)
    
    //nextMusic
    const [musicNext, setMusicNext] = useState({})
    const [index, setIndex] = useState(0)

    function closeCard(){
        setResetAudio(true)
        setRender(true)
    }

    useEffect(()=>{
        if(resetAudio){
            setResetAudio(false)
        }
    }, [render])

    return(
        <RenderLoading.Provider value={[loading, setLoading, musicNext, setMusicNext, index, setIndex]}>
            <CardSelected close={closeCard}/>
        </RenderLoading.Provider>
    )
}



function CardSelected(props){

    const [loading] = useContext(RenderLoading)


    return(
        <>
            <Icon close={props.close}/>
            <MusicSelectedStyles>
                <ContainerPlayer />
                <ContainerOtherMusics />
                <ContainerCardCategoria />
            </MusicSelectedStyles>
        </>
    )
}


function Icon(props){
    return(
        <ExitStyle>
            <div className="icon-container" onClick={props.close}>
                <X/>
            </div>
        </ExitStyle>
    )
}

