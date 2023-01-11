import React, { use, useEffect, useRef, useState } from "react";
import Search from "./components/search";
import MainConteiner, {ConteinerCard} from "../../styles/card/card";
import HeartRegular, {EllipsVertical, HeartSolid} from "../../public/icons/icons";
import Play, {Pause} from "../../public/icons/VideoIcon";
import { ConteinConfig } from "./components/config";


export default function ConteinCard(props){
    const data = props.data

    return(
    <MainConteiner>
        <Search text={props.text}/>
        
        <div className="conteiner-card">
            {data.map((element, index)=>(
                <Card  
                    index={index} 
                    music={element.preview} 
                    img={element.picture} 
                    artist={element.artist} 
                    musicName={element.title}
                    key={String(index)}
                />
            ))}     
            
        </div>
    </MainConteiner>
    )
}

export function Card(props){

    const[pause, setPause] = useState(false)
    const[config, setConfig] = useState(false)
    const[heart, setHeart] = useState(false)

    const {index, music, img, artist, musicName} = props
    const Interval = useRef()
  

    useEffect(()=>{
        const audio = document.getElementById('my-audio'+index)
        const conteinerBar = document.getElementById("audio-progress"+props.index)

        conteinerBar.addEventListener('click', (e)=>{

            const positionX = e.clientX - e.target.getBoundingClientRect().left
            const pctBar = (positionX / conteinerBar.clientWidth)*100
            audio.currentTime = (audio.duration * pctBar)/100
           
        })

    }, [])
    
    useEffect(()=>{
        
       if(pause){
          Interval.current = IntervalProgress()
       }else{
          clearInterval(Interval.current)
       }
       
    }, [pause])
    
    function ChangeIcon(e){

        const audio = document.getElementById('my-audio'+index)
        
        if(pause){
            setPause(false)
            audio.pause()
        
        }else{
            setPause(true)
            audio.play()          
        }  
    }

    function IntervalProgress(){

        const audio = document.getElementById('my-audio'+index)
        const progress_bar = document.getElementById('bar-loader'+props.index)
    
        return(
            setInterval(()=>{
                const progress = (audio.currentTime / audio.duration) * 100
                progress_bar.style.width= `calc(${progress}% + 1%)`
            })
        )
    }

    function handleConfig(){
        if(config){
            setConfig(false)
        }else{
            setConfig(true)
        }
    }

    function Heart(){
        if(heart){
            setHeart(false)
        }else{
            setHeart(true)
        }
    }

    return(
        <ConteinerCard>
            <div className="img">
                <img src={img} alt="Imagem Artist"></img>
            </div>

            <p className="text">
                {musicName+" "+artist}
            </p>

            <div className="player-audio">
                <audio id={"my-audio"+index} >
                    <source src={music} type="audio/mp3" />
                </audio>

                <div className="audio" >
                    <div className="audio-loader" id={"audio-progress"+index}>
                        <div className="bar-loader" id={"bar-loader"+index}></div>
                        <div className="boll"></div>
                    </div>

                    <div className="audio-progress" ></div>
                </div>

                <div className="player-pause">
                    <div className="render-icon" onClick={ChangeIcon}>
                        {pause ? <Pause/> : <Play />}
                    </div>

                    <div className="icons-info">
                        <div className="heart" onClick={Heart}>
                            {heart ? <HeartSolid /> : <HeartRegular />}
                        </div>
                        <div className="elipse" >
                            <div className="event-click" onClick={handleConfig}>
                                <EllipsVertical />
                            </div>
                            {config ? <ConteinConfig /> : ""}
                        </div>    
                    </div>
                </div>

            </div>
            

        </ConteinerCard>
    )
}