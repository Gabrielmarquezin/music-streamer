import React, { useContext, useEffect, useState } from "react";
import { useFile } from "../../../hooks/useFile";
import { StyleFileInput } from "../../../styles/form/inputFile";
import { InputValueContext } from "../form";

export default function InputFile(){

    const [arquivo, setArquivo] = useState(false)

    const [,setUrlImage,,,load] = useContext(InputValueContext)

    function handleFile(e){
        const file = e.target.files[0]

        setArquivo(file)

        const spanText = document.getElementsByTagName('span')

       if(file){
         const reader = new FileReader()
         const labelFile = document.getElementById('labelFile')
       
         reader.addEventListener('load', async (e)=>{
            const target = e.target

            const img = document.createElement('img')
            img.classList.add('picture')
            img.src = target.result

            labelFile.innerHTML = ""
            
            labelFile.appendChild(img)
            setArquivo(file)
         })

         reader.readAsDataURL(file)

       }else{
         spanText.innerHTML = "Choose a Image"
       }
    }

    useEffect(()=>{
        if(arquivo){
            setUrlImage("")
            setUrlImage(arquivo)
        }

    }, [arquivo])

    return(
        <StyleFileInput load={load}>
            <File onChange={handleFile} />
        </StyleFileInput>
    )
}

function File(props){

    return(
        <>
            <input type="file" name="" id="fileInput" onChange={props.onChange}/>
            <label htmlFor="fileInput" id="labelFile">
                <span>Choose a Image</span>
            </label>
        </>
    )
}