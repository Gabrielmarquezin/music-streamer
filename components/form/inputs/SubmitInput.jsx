import React, { useContext, useEffect, useState } from "react";
import { useFile } from "../../../hooks/useFile";
import { FormContext } from "../../../pages";
import { InputValueContext } from "../form";

export default function InputSubmit(){
    const [,setRenderForm] = useContext(FormContext)
    const [setTitle, setUrlImage, urlImage, setLoad] = useContext(InputValueContext)
    const [urlFile, uploadFile,] = useFile()


    function handleForm(e){
        e.preventDefault()

        setRenderForm(false)
    }


    function handleSubmit(){
        const title = document.querySelector('.input-text input').value
        setTitle(title)

        setLoad(true)
        uploadFile(urlImage)
    }

    useEffect(()=>{
        if(urlFile){
            setUrlImage(urlFile)
            setLoad(false)
        }
    },[urlFile])

    return(
        <Input cancel={handleForm} submit={handleSubmit}/>
    )
}

export function Input(props){
    return(
        <div className="buttons">
            <input type="button" value="CANCEL" onClick={props.cancel} />
            <input type="submit" value="ENVIAR" onClick={props.submit}/>        
        </div>
    )
}