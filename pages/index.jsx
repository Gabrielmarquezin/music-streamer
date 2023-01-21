import React, {createContext, useContext, useEffect, useState} from "react";
import GlobalStyle from "../styles/GlobalStyled";
import MenuH from "../components/menu/menu-h/menu-h";
import Conteiner from "../styles/index/Conteiner";
import MenuV from "../components/menu/menu-v/menu-v";
import ConteinCard from "../components/Cards/card";
import { RouterContext, RouterProvider } from "../hooks/useRouter";
import { DataMusicProvider } from "../hooks/useMusic";
import RenderCard from "../RenderControl/RenderCard";
import ContainerForm from "../components/form/form";


export const FormContext = createContext('')
export default function handle({dados}){
   
    const [renderForm, setRenderForm] = useState(false)

    useEffect(()=>{
        //renderizando novamente o component
    },[renderForm])
   
   return(
    <>
    <FormContext.Provider value={[renderForm, setRenderForm]}>
        <RouterProvider>
            <GlobalStyle form={renderForm} />
            {renderForm &&  <ContainerForm />}
            <MenuH />
            <Conteiner>
                <MenuV />
                <DataMusicProvider>
                    <RenderCard data={dados} />
                </DataMusicProvider>
            </Conteiner>
        </RouterProvider>
    </FormContext.Provider>
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

