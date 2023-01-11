import react, { useEffect, useRef, useState} from "react";
import Play, {Pause} from "../../../../public/icons/VideoIcon";

export default function AudioPlayer(props){

   const [pause, setPause] = useState(false)

   const audio = useRef(null)
   const barProgress = useRef(null)
   const barLoader = useRef(null)
   const IntervalBarProgress = useRef()
   
   useEffect(()=>{
        if(pause){
            IntervalBarProgress.current = IncreasingBar()
        }else{
            clearInterval(IntervalBarProgress.current)
        }
   },[pause])

   function ControllerAudio(){
        if(pause){
            setPause(false)
            audio.current.pause()
            
        }else{
            setPause(true)
            audio.current.play()
        }
   }

   function IncreasingBar(){
        return (
            setInterval(()=>{
                const progress = (audio.current.currentTime / audio.current.duration)*100
                barLoader.current.style.width = `calc(${progress}% + 1%)`

                console.log("render")
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
                    <div className="render-icon" onClick={ControllerAudio}>
                        {pause ? <Pause /> : <Play /> }
                    </div>
                </div>
        </div>
    )
}
