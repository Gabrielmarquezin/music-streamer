import React, { useContext, useEffect } from "react";
import ConteinerSearch from "../../../styles/card/search/search";
import { RouterContext, RouterProvider} from "../../../hooks/useRouter";



export default function Search(props){
    const [route] = useContext(RouterContext)

    return(
        <ConteinerSearch>
                <p>{route}</p>

                <div className="input">
                    <input type="text"  placeholder="PESQUISAR MUSICA"/>
                </div>
        </ConteinerSearch>
    )
}