import React, { useState } from "react";
import MenuH from "./menu-h/menu-h";
import MenuV from "./menu-v/menu-v";
import Conteiner from "../../styles/index/Conteiner";
import ConteinCard from "../Cards/card";

export default function RenderMenu(){
    const [text, setText] = useState('Home')


    function handleRouter(e){
        const text = e.target.innerText ? e.target.innerText : "Home"
        setText(text)
    }

    return(
        <>
            <MenuH router={handleRouter}/>
            <Conteiner>
                <MenuV router={handleRouter}/>
                <ConteinCard text={text}/>
            </Conteiner>
        </>
    )
}


