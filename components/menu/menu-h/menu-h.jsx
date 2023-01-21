import React, { useContext, useEffect, useRef } from "react";
import ConteinerMenu from "../../../styles/menu/menu-h";
import {ConteinUserPerfil} from "./user";
import { RouterContext,  RouterProvider } from "../../../hooks/useRouter";

export default function MenuH(props){
  const [route, setRoute] = useContext(RouterContext)

  const Musics = useRef()
  const Albuns = useRef()

  useEffect(()=>{
    if(route == "Musics"){
        Musics.current.style.opacity = 0.6
    }else{
        Musics.current.style.opacity = 1;
    }

    if(route == "Albuns"){
        Albuns.current.style.opacity = 0.6
    }else{
        Albuns.current.style.opacity = 1;
    }

  }, [route])

    function TextRouter(e){
        setRoute(e.target.innerText)
    }

    return(
        <ConteinerMenu>
                <nav className="nav">
                    <ul>
                        <li onClick={TextRouter} ref={Musics}><a href="#">Musics</a></li>
                        <li onClick={TextRouter} ref={Albuns}><a href="#">Albuns</a></li>
                    </ul>
                </nav>
                
                <ConteinUserPerfil />
        </ConteinerMenu>
    )
}
