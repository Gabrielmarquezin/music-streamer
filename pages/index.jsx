import React, {useState} from "react";
import RenderMenu from "../components/menu/menu";
import GlobalStyle from "../styles/GlobalStyled";
import MenuH from "../components/menu/menu-h/menu-h";
import Conteiner from "../styles/index/Conteiner";
import MenuV from "../components/menu/menu-v/menu-v";
import ConteinCard from "../components/Cards/card";

export default function handle({dados}){
    const [text, setText] = useState('Home')

    function handleRouter(e){
        const text = e.target.innerText ? e.target.innerText : "Home"
        setText(text)
    }

   return(
    <>
        <GlobalStyle />
        <MenuH router={handleRouter}/>
        <Conteiner>
            <MenuV router={handleRouter}/>
            <ConteinCard text={text} data={dados}/>
        </Conteiner>
    </>
   )
}

export async function getServerSideProps() {
    
    const fetch = require('node-fetch')
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=*';

    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b2c77a5f1cmsh8f70bea2fb802efp1dc74cjsnf36e1bc0867b',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
    };

    const response = await fetch(url, options)
    const data = await response.json()

   

    const filterData = data.data.map((element)=>{
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
              
    return { props: {dados: filterData} }
  }
