import React, { useContext, useEffect, useRef } from "react";
import ConteinerMenuV from "../../../styles/menu/menu-v";
import Home, {Heart, Plus, Graphic} from "./icons";
import Collection from "../../../public/assets/collection1";
import { RouterContext} from "../../../hooks/useRouter";
import { FormContext } from "../../../pages";


export default function MenuV(props){
    const [route, setRoute] = useContext(RouterContext)
    const [,setRenderForm] = useContext(FormContext) 

    const home = useRef()
    const favorites = useRef()
    const playlist = useRef()
    const CreatePlaylist = useRef()
    const alta = useRef()

    function TextRoute(e){
        setRoute(e.target.innerText)

        if(e.target.innerText == "CRIAR PLAYLIST"){
            setRenderForm(true)
        }
    }

    useEffect(()=>{
        if(route == "HOME"){
            home.current.style.backgroundColor = "#585858cf"; 
        }else{
            home.current.style.backgroundColor = ""; 
        }

        if(route == "MY FAVORITES"){
            favorites.current.style.backgroundColor = "#585858cf"; 
        }else{
            favorites.current.style.backgroundColor = ""; 
        }

        if(route == "PLAYLISTS"){
            playlist.current.style.backgroundColor = "#585858cf"; 
        }else{
            playlist.current.style.backgroundColor = ""; 
        }

        if(route == "CRIAR PLAYLIST"){
            CreatePlaylist.current.style.backgroundColor = "#585858cf"
        }else{
            CreatePlaylist.current.style.backgroundColor = ""
        }

        if(route == "EM ALTA"){
            alta.current.style.backgroundColor = "#585858cf"; 
        }else{
            alta.current.style.backgroundColor = ""; 
        }

    }, [route])

    return(
        <ConteinerMenuV id="a">
            <nav className="nav">
                <ul className="conteiner-ul">
                    <ul className="bloco1">
                        <li onClick={TextRoute} ref={home}>
                            <Home />
                            <a href='#HOME' >HOME</a>
                        </li>
                        <li onClick={TextRoute} ref={favorites}>
                            <Heart />
                            <a href='#' >MY FAVORITES</a>
                        </li>
                        <li onClick={TextRoute} ref={playlist}>
                            <Collection />
                            <a href='#' >PLAYLISTS</a>
                        </li>
                    </ul>

                    <ul className="bloco2">
                        <li onClick={TextRoute} ref={CreatePlaylist}>
                            <Plus />
                            <a href='#' >CRIAR PLAYLIST</a>
                        </li>
                        <li onClick={TextRoute} ref={alta}>
                            <Graphic />
                            <a href='#' >EM ALTA</a>
                        </li>
                    </ul>
                </ul>
            </nav>
        </ConteinerMenuV>
    )
}

