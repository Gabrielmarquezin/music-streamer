import react from "react";
import { Card } from "../../card";

export default function CardSearch(props){

    const {music, img, artist, musicName} = props

    return(
        <Card 
            music={music} 
            img={img} 
            artist={artist} 
            musicName={musicName}
        />
    )
}