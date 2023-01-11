import React from "react";
import ConteinerSearch from "../../../styles/card/search/search";

export default function Search(props){
   
    
    return(
        <ConteinerSearch>
            <p>{props.text}</p>

            <div className="input">
                <input type="text"  placeholder="PESQUISAR MUSICA"/>
            </div>
        </ConteinerSearch>
    )
}