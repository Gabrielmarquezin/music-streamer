import React from "react";
import Search from "./components/search";
import MainConteiner, {ConteinerCard} from "../../styles/card/card";
import AudioPlayer from "./components/audio/audioMusic";
import BarIcon from "./components/barIcon/barIcon";

export default function ConteinCard(props){
    const data = props.data

    return(
    <MainConteiner>
        <Search />
        
        <div className="conteiner-card">
            {data.map((element, index)=>(
                <Card  
                    music={element.preview} 
                    img={element.picture} 
                    artist={element.artist} 
                    musicName={element.title}
                    key={String(index)}
                />
            ))}     
            
        </div>
    </MainConteiner>
    )
}

export function Card(props){

    const {music, img, artist, musicName} = props

    return(
        <ConteinerCard>
            <div className="img">
                <img src={img} alt="Imagem Artist"></img>
            </div>

            <p className="text">
                {musicName+" "+artist}
            </p>

            <AudioPlayer music={music} />
            <BarIcon />

        </ConteinerCard>
    )
}