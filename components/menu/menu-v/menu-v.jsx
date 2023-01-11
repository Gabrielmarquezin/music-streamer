import React from "react";
import ConteinerMenuV from "../../../styles/menu/menu-v";
import Home, {Heart, Plus, Graphic} from "./icons";
import Collection from "../../../public/assets/collection 1";

export default function MenuV(props){
    return(
        <ConteinerMenuV>
            <nav className="nav">
                <ul className="conteiner-ul">
                    <ul className="bloco1">
                        <li onClick={props.router}>
                            <Home />
                            <a href='#HOME' >HOME</a>
                        </li>
                        <li onClick={props.router}>
                            <Heart />
                            <a href='#' >MY FAVORITES</a>
                        </li>
                        <li onClick={props.router}>
                            <Collection />
                            <a href='#' >PLAYLISTS</a>
                        </li>
                    </ul>

                    <ul className="bloco2">
                        <li onClick={props.router}>
                            <Plus />
                            <a href='#' >CRIAR PLAYLIST</a>
                        </li>
                        <li onClick={props.router}>
                            <Graphic />
                            <a href='#' >EM ALTA</a>
                        </li>
                    </ul>
                </ul>
            </nav>
        </ConteinerMenuV>
    )
}

