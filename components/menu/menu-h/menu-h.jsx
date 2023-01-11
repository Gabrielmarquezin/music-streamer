import React, { useContext } from "react";
import ConteinerMenu from "../../../styles/menu/menu-h";
import {ConteinUserPerfil} from "./user";
import { RouterContext,  RouterProvider } from "../../../hooks/useRouter";

export default function MenuH(props){
  const [, setRoute] = useContext(RouterContext)

    function TextRouter(e){
        setRoute(e.target.innerText)
    }

    return(
        <ConteinerMenu>
                <nav className="nav">
                    <ul>
                        <li onClick={TextRouter}><a href="#">Musics</a></li>
                        <li onClick={TextRouter}><a href="#">Albuns</a></li>
                    </ul>
                </nav>
                
                <ConteinUserPerfil />
        </ConteinerMenu>
    )
}
