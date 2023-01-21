import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { DataMusicContext } from "../../../../../hooks/useMusic";
import { OtherMuscisStyles } from "../../../../../styles/musicSelected/otherMusics/otherMusic";
import { renderContext } from "../../../../../RenderControl/RenderCard";
import Loading from "../../../load/load";
import { RenderLoading } from "../../cardSelected";


export default function ContainerOtherMusics(){

    const [,,setObj,obj] = useContext(renderContext)
    const [,, getOtherMusic] = useContext(DataMusicContext)

    const [otherMusic, setOtherMusic] = useState('')
    const [load, setLoad] = useState(true)

    //loading's cardSelected and Next music
    const [loading,setLoading,, setMusicNext] = useContext(RenderLoading)

    useEffect(()=>{

        setLoad(true)
        setLoading(true)

        if(obj.artist !== ""){
            getOtherMusic(obj.artist).then(musics=>{
                setOtherMusic(musics)
                setMusicNext(musics)
                setLoad(false)
                setLoading(false)
            })
        }
    }, [obj])


    const handleObj = (music, img, artist, musicName)=>{
        setObj({
            music: music,
            img: img,
            artist: artist,
            musicName: musicName
        })
    }

    return(
        <OtherMuscisStyles id="position">
            {load && <Loading />}
            {!load && otherMusic.map((music, index)=>(

                <OtherMusic img={music.picture} 
                            musicName={music.title} 
                            artist={music.artist}
                            music={music.preview}
                            function={handleObj}
                            key={index.toString()}
                />
            ))}
        </OtherMuscisStyles>
    )
}


function OtherMusic(props){
    const textMusic = useRef('')
    const imgContainer = useRef('')

    const handleObj = props.function

    const container = useRef('')

    const [,,,obj] = useContext(renderContext)

    //setLoading for cardSelected
    const [,setLoading] = useContext(RenderLoading)


    function setParams(e) {
        setLoading(true)
        handleObj(props.music, props.img, props.artist, props.musicName)
    }

    // useEffect(()=>{
    
    //     const firstChild = textMusic.current.firstChild
    //     const textFirtstchild = firstChild.innerHTML

    //     const lastChild = textMusic.current.lastChild
    //     const textLastchild = lastChild.innerHTML
        
    //     const width = container.current.clientWidth *  (8 / 1000)

        

    //     firstChild.classList.remove('slide-text')
    //     lastChild.classList.remove('slide-second')

    //    console.log(firstChild.style.textOverflow)

    //     if(textLastchild.length > 7){
    //         lastChild.classList.add('slide-second')
    //     }

    // }, [props.musicName])
    
    useEffect(()=>{
        const nomeMusic = obj.title || obj.musicName
    
        if(nomeMusic == textMusic.current.firstChild.innerHTML){
            container.current.classList.add('music-selected');
            
        }else{
            container.current.classList.remove('music-selected')
        }
    }, [obj])

    return(
        <div className="container" onClick={setParams} ref={container}>
            <div className="info-music" ref={textMusic}>
                <p>{props.musicName}</p>
                <p>{props.artist}</p>
            </div>

            <div className="imagem-music" ref={imgContainer}>
                <img src={props.img} alt="" />
            </div>
        </div>
    )
}