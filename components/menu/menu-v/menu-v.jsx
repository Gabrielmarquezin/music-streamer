import React, { useContext } from "react";
import ConteinerMenuV from "../../../styles/menu/menu-v";
import Home, {Heart, Plus, Graphic} from "./icons";
import Collection from "../../../public/assets/collection 1";
import { RouterContext} from "../../../hooks/useRouter";

export default function MenuV(props){
    const [, setRoute] = useContext(RouterContext)

    function TextRoute(e){
        setRoute(e.target.innerText)
    }

    return(
        <ConteinerMenuV>
            <nav className="nav">
                <ul className="conteiner-ul">
                    <ul className="bloco1">
                        <li onClick={TextRoute}>
                            <Home />
                            <a href='#HOME' >HOME</a>
                        </li>
                        <li onClick={TextRoute}>
                            <Heart />
                            <a href='#' >MY FAVORITES</a>
                        </li>
                        <li onClick={TextRoute}>
                            <Collection />
                            <a href='#' >PLAYLISTS</a>
                        </li>
                    </ul>

                    <ul className="bloco2">
                        <li onClick={TextRoute}>
                            <Plus />
                            <a href='#' >CRIAR PLAYLIST</a>
                        </li>
                        <li onClick={TextRoute}>
                            <Graphic />
                            <a href='#' >EM ALTA</a>
                        </li>
                    </ul>
                </ul>
            </nav>
        </ConteinerMenuV>
    )
}

