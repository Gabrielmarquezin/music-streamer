import react from "react";
import React, { useState } from "react";

export default function useOtherMusic(){
    const [dataOther, setDataOther] = useState('')

    const fechOthersMusics = async (artist) => {
        try {
            const fetch = require('node-fetch');

            const url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${artist}`;

            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b2c77a5f1cmsh8f70bea2fb802efp1dc74cjsnf36e1bc0867b',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
            };

           const response = await fetch(url, options)
           const data = await response.json()
            
           const filterData = data.map(()=>{
                
           })

               
        } catch (error) {
            
        }
    }
}