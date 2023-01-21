import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import ConteinerSearch from "../../../../styles/card/search/search";
import { RouterContext, RouterProvider} from "../../../../hooks/useRouter";
import { DataMusicContext } from "../../../../hooks/useMusic";
import { renderContext } from "../../../../RenderControl/RenderCard";
import { faL } from "@fortawesome/free-solid-svg-icons";



const SearchContext = createContext('')


export function ContainerSearch(){
    const [search, setSearch] = useState('')
    const [,getMusic,,setMusic] = useContext(DataMusicContext)
    const [render,setRender,,,,setLoading] = useContext(renderContext)

    const [route] = useContext(RouterContext)

    const handleInput = (e)=>{
        const value = e.target.value

        setSearch(value)

        if(value == ''){
            setMusic(false)
        }
    }

    useEffect(()=>{
        if(route !== "HOME"){
            const input = document.getElementById('text')

            input.addEventListener('keypress', (e)=>{
                if(e.key == "Enter"){
                    getMusic(e.target.value)
                    setRender(true)
                }
            })
        }
    }, [route])
    
    return(
        <SearchContext.Provider value={[search, handleInput]}>
            <ConteinerSearch>
                <p>{route}</p>
                {route == "HOME" ? "" : <Search />}
            </ConteinerSearch>
        </SearchContext.Provider>
    )
}


export default function Search(props){

    const [search, handleInput] = useContext(SearchContext)
          
    return(      
        <div className="input">
            <input type="text" 
                id="text"
                placeholder="PESQUISAR MUSICA"
                onChange={handleInput}
                values={search}
            />
        </div>
    )
}



