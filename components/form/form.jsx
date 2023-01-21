import React, { createContext, useContext, useEffect, useState } from "react";
import { FormContext } from "../../pages";
import { StylesForm } from "../../styles/form/form";
import Loading from "../Cards/load/load";
import Input from "./inputs/Input";
import InputFile from "./inputs/inputFile";
import InputSubmit from "./inputs/SubmitInput";
import LoadingForm from "./loading";

export const InputValueContext = createContext({})
export default function ContainerForm(){
    
    const [title, setTitle] = useState('')
    const [urlImage, setUrlImage] = useState('')
    const [load, setLoad] = useState(false)

    useEffect(()=>{
        console.log(title +"   "+urlImage)
    }, [title, urlImage])

    return(
        <StylesForm load={load}>
            <InputValueContext.Provider value={[setTitle, setUrlImage, urlImage, setLoad, load]}>
                <Form />
            </InputValueContext.Provider>
        </StylesForm>
    )
}


function Form(props){
    const [,,,,load] = useContext(InputValueContext)
 
    return(
        <form action="" className="form">
           <Input />
           <InputFile />
           <InputSubmit />
           {load && <LoadingForm />}
        </form>
    )
}

