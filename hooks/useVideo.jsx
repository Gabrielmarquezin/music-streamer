let pause;

export default function useVideo(){

    function ChangeIcon(){
        if(pause){
            clearInterval(a)
            setPause(false)
            audio.pause()
        
        }else{
            setPause(true)
            audio.play()          
        }  
    }

    function setPause(boolean){
        pause = boolean
    }
    return(
        {}
    )
}