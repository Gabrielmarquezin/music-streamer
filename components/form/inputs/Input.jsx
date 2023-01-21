import React, { useContext, useState }  from "react";
import { InputValueContext } from "../form";

export default function Input(){
    const [value, setValue] = useState('')
    const [setTitle] = useContext(InputValueContext)

    function handleInput(e){
        const inputValue = e.target.value
        setValue(inputValue)
        
    }

    return(
        <div className="input-text">
            <input type="text" placeholder="Digite o nome da Playlist" 
                   value={value} 
                   onChange={handleInput}
            />
        </div>
    )
}

