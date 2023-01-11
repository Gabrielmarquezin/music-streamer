import React from "react";
import ConteinerMenu from "../../../styles/menu/menu-h";
import {ConteinUserPerfil} from "./user";


export default function MenuH(props){
    return(
        <ConteinerMenu>
            <nav className="nav">
                <ul>
                    <li onClick={props.router}><a href="#">Musics</a></li>
                    <li onClick={props.router}><a href="#">Albuns</a></li>
                </ul>
            </nav>
            
            <ConteinUserPerfil />
        </ConteinerMenu>
    )
}

export function Teste(){
    function handleChage(){
        console.log("deu certo")
    }

    return(
        <MenuH />
    )
}