import react, { useContext, useEffect, useRef, useState} from "react";
import useChangeMusic from "../../../../hooks/useChangeMusic";
import Play, {Back, Next, Pause, Repeat, Shuffle} from "../../../../public/icons/VideoIcon";
import { renderContext } from "../../../../RenderControl/RenderCard";
import { AudioContext } from "../../card";
import { RenderLoading } from "../../cardSelected/cardSelected";

export default function AudioPlayer(props){

   const [pause, setPause] = useState(false)
   const [resetAudio, setResetAudio] = useContext(AudioContext) 

   const audio = useRef()
   const barProgress = useRef()
   const barLoader = useRef()
   const IntervalBarProgress = useRef()

   const [render] = useContext(renderContext)

   //Next music e loading
   const [loading,setLoading,musicNext,,index, setIndex] = useContext(RenderLoading)
   const [,,setObj,obj] = useContext(renderContext)
  
   const [MusicChaged] = useChangeMusic()
    
   useEffect(()=>{
        if(pause){
            IntervalBarProgress.current = IncreasingBar()
        }else{
            clearInterval(IntervalBarProgress.current)
        }
   },[pause])


   useEffect(()=>{   
        if(resetAudio){
            setPause(false)
            audio.current.pause()
        }  
   }, [render])

   function ControllerAudio(){
        if(pause){
            setPause(false)
            audio.current.pause()
            
        }else{
            setPause(true)
            audio.current.load()
            audio.current.play()
        }
   }

   function IncreasingBar(){
        return (
            setInterval(()=>{
                if(audio.current == null){
                    clearInterval(IntervalBarProgress.current)
                    
                    return
                }
                
                const progress = (audio.current.currentTime / audio.current.duration)*100
                barLoader.current.style.width = `calc(${progress}% + 1%)`
            })
        )
   }

   function cutAudio(e){
        const positionX = e.clientX - e.target.getBoundingClientRect().left
        const pctBar = (positionX / barProgress.current.clientWidth)*100
        audio.current.currentTime = (audio.current.duration * pctBar)/100
        
        const widthBar = (positionX * 100) / barProgress.current.clientWidth 
        
        barLoader.current.style.width = `${widthBar}%`
        
   }

   function changeMusic(index){
        setLoading(true)

        const musicData = MusicChaged(musicNext, obj.musicName, index)
        musicData.then(music =>{
            setLoading(false)
            setObj(music)

        }).catch(error =>{
            setIndex(0)
            setLoading(false)
            console.log(error)
        })
   }

   function NextMusic(){
        changeMusic(index)
        setIndex(index + 1)
   }

   function ComeMusic(){
        setIndex(index - 1)
        changeMusic(index)
        console.log(index)
   }
    
    return(
        <div className="Container-audio">

                <audio id="my-audio" ref={audio}>
                    <source src={props.music} type="audio/mp3" />
                </audio>
               
                <div className="bar-container" ref={barProgress} onClick={cutAudio}>
                    <div className="audio-loader">
                        <div className="bar-loader" ref={barLoader}></div>
                        <div className="boll"></div>
                    </div>

                    <div className="audio-progress" ></div>
                </div>

                <div className="player-pause">
                    <div className="render-icon" >
                        <Shuffle />
                        <Back onClick={ComeMusic}/>
                        {pause ? <Pause onClick={ControllerAudio}/> : <Play onClick={ControllerAudio}/> }
                        <Next onClick={NextMusic}/>
                        <Repeat />
                    </div>
                </div>
        </div>
    )
}
