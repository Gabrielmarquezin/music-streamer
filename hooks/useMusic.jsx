import { async } from "@firebase/util";
import { faL } from "@fortawesome/free-solid-svg-icons";
import react, { createContext, useContext, useEffect, useState } from "react";

export const DataMusicContext = createContext('')

export function DataMusicProvider({children}){

    const [music, setMusic] = useState(false)

    const getMusic =  (filter)=>{
        setMusic(fetchDataMusic(filter))
    }

    const getOtherMusic = (artist)=>{
        return fetchDataMusic(artist)
    }

    const fetchDataMusic = async (filter)=>{
        try {
            const fetch = require('node-fetch');
         
             const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${filter}`;
            

            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b2c77a5f1cmsh8f70bea2fb802efp1dc74cjsnf36e1bc0867b',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
            };
    
            const response = await fetch(url, options)
            const Data = await response.json()

            const MusicData = Data.data.map((element)=>{
                const id = element.id
                const title = element.title
                const preview = element.preview
                const artist = element.artist.name
                const picture = element.artist.picture
        
                return {
                    id: id,
                    title: title,
                    preview: preview,
                    artist: artist,
                    picture: picture
                 }
        
            })

            return MusicData


        } catch (error) {
            console.log("ESSE E O ERRO: "+error)
            setMusic({error: "NaoTem", error: error})
        }
    }

    return(
        <DataMusicContext.Provider value={[music, getMusic, getOtherMusic, setMusic]}>
            {children}
        </DataMusicContext.Provider>
    )
}