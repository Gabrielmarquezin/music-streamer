import React, { useState } from "react";
import { resolve } from "styled-jsx/css";

export default function useChangeMusic(){
    
    const MusicChaged = (musicsObj, musicName, index)=>{


        const filterMusic = musicsObj.filter(allMuiscs => !allMuiscs.title.includes(musicName))
        const music = filterMusic[index]

        const promisse = new Promise((resolve, reject)=>{
            if(index < 0 || index > musicsObj.length -1){
                reject({message: 'limite'})
            }else{
                resolve(music)
            }
        })
        return promisse
    }

    
    

    return([MusicChaged])
}