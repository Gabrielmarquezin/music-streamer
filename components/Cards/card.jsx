import React, { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore } from "react";
import AudioPlayer from "./components/audio/audioMusic";
import BarIcon from "./components/barIcon/barIcon";
import { DataMusicContext } from "../../hooks/useMusic";
import { ConteinerCard } from "../../styles/card/card";
import CardSearch from "./components/search/carSearch";
import ContainerCardSelected from "./cardSelected/cardSelected";
import {renderContext } from "../../RenderControl/RenderCard";
import Loading from "./load/load";


export const CardDataContext = createContext('')
export const AudioContext = createContext('')

export default function ConteinCard(props){
    const propsData = props.data

    const [music] = useContext(DataMusicContext)
    const [render, setRender,,,loading,setLoading] = useContext(renderContext)
    const [dataMusic, setDataMusic] = useState(false) 

    const [resetAudio, setResetAudio] = useState(false)
  
    useEffect(()=>{
        if(music){
            setLoading(true)
            music.then(data =>{
                setDataMusic(data)
                setLoading(false)
            })
            console.log(music)
        }else{
            setDataMusic(false)
        }
    }, [music])

    useEffect(()=>{
        if(!render){
            const conteiner_card = document.querySelector('.conteiner-card')
            conteiner_card.classList.add('blocked')
        
            const teste = document.querySelector('.teste')
            teste.classList.remove('blocked')

        }else{
            const conteiner_card = document.querySelector('.conteiner-card')
            conteiner_card.classList.remove('blocked')

            const teste = document.querySelector('.teste')
            teste.classList.add('blocked')
        }

    }, [render])



    useEffect(()=>{
        if(loading){
            const container_card = document.querySelector('.conteiner-card')
            container_card.classList.add('center-loading')
        }else{
            const container_card = document.querySelector('.conteiner-card')
            container_card.classList.remove('center-loading')
        }
    }, [loading])

    
    return(
    <>
     <AudioContext.Provider value={[resetAudio, setResetAudio]}>
        <div className="conteiner-card">
            {loading ? <Loading /> :
            dataMusic ? dataMusic.map((element, index)=>(
                <CardSearch  
                    music={element.preview} 
                    img={element.picture} 
                    artist={element.artist} 
                    musicName={element.title}
                    key={String(index)}
                />
            ))
                  : propsData.map((element, index)=>(
                    <Card  
                        music={element.preview} 
                        img={element.picture} 
                        artist={element.artist} 
                        musicName={element.title}
                        key={String(index)}
                    />
                ))
            
            }
        </div>
        <div className="teste blocked"> 
            {<ContainerCardSelected />}
        </div>
    </AudioContext.Provider>
    </>
    )
}



export function Card(props){

    const {music, img, artist, musicName} = props
    const [render,setRender, setObj] = useContext(renderContext)
    const [, setResetAudio] = useContext(AudioContext)

    const eventHover = useRef('')
    
    function Render(){
        setResetAudio(true)

        if(render){
            setRender(false)
            setObj({
                music: music,
                img: img,
                artist: artist,
                musicName: musicName
            })
        }
    }

    function MouseEnter(){
       eventHover.current.style.transform = "scale(1.1, 1.1)";
       eventHover.current.style.boxShadow = "12px 3px 19px 5px rgba(0,0,0,0.35)";
    }
    

    function MouseOut(){
        eventHover.current.style.transform = "scale(1)";
        eventHover.current.style.boxShadow = "0 0 0 0";
    }
    return(
        <ConteinerCard  ref={eventHover}>
           
            <div className="img" onClick={Render} onMouseEnter={MouseEnter} onMouseOut={MouseOut}>
                <img src={img} alt="Imagem Artist"></img>
            </div>

            <p className="text" onClick={Render} onMouseEnter={MouseEnter} onMouseOut={MouseOut}>
                {musicName+" "+artist}
            </p>

           
            <AudioPlayer music={props.music} />
            <BarIcon />
        
        </ConteinerCard>
    )
}

