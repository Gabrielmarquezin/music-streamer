import react, { useContext, useEffect, useState } from "react";
import { StyleAudio } from "../../../../../../styles/musicSelected/musicSelected";
import { renderContext } from "../../../../../../RenderControl/RenderCard";
import AudioPlayer from "../../../../components/audio/audioMusic";
import ContainerButonInfo from "../information/infoButtons";



export default function ContainerAudio(){
    const [,,,obj] = useContext(renderContext)
    
    return(
      
        <StyleAudio>
            <Audio />
        </StyleAudio>
    )
}

function Audio(){
    const [,,,obj] = useContext(renderContext)
    return(
        <>
            <Imagem img={obj.img || obj. picture}/>
            <ContainerButonInfo />
            <AudioPlayer music={obj.music || obj.preview} />
        </>
    )
}

function Imagem(props){

    return(
        <div className="img">
            <img src={props.img} alt="imagem carregando"/>
        </div>
    )
}