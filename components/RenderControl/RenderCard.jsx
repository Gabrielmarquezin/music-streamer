import React, { createContext, useContext, useEffect, useState } from "react";
import { RouterContext } from "../hooks/useRouter";
import MainConteiner from "../styles/card/card";
import ConteinCard from "../components/Cards/card";
import { ContainerSearch } from "../components/Cards/components/search/search";
import Home from "../routes/home";
import Playlist from "../routes/playlists";


export const renderContext = createContext('')

export default function RenderCard(props){

    const [route] = useContext(RouterContext)
    const [render, setRender] = useState(true)
    const [loading, setLoading] = useState(false)
    const [screen, setScreen] = useState('')

    const [obj, setObj] = useState({
        music: '',
        img: '',
        artist: '',
        musicName: ''
    })
    
    const router = ()=>{
         switch(route){
            case "HOME":
                return <Home />
            
    
            case "PLAYLIST":
                return <Playlist />
          

            case "Musics":
                return <ConteinCard data={props.data} />
        
        }
    }

  

    return(
        <>
        <MainConteiner>
            <renderContext.Provider value={[render, setRender, setObj, obj, loading, setLoading]}>
                <ContainerSearch />
                {router()}
            </renderContext.Provider>
        </MainConteiner>
        </>
    )
}