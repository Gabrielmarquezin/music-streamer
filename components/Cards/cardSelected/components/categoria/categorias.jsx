import React from "react";
import { CardCategoriaStyles } from "../../../../../styles/musicSelected/categorias/categoria";
import Imagem1 from "../../../../../public/assets/Rectangle 12.jpg"
import Imagem2 from "../../../../../public/assets/Rectangle 13.jpg"
import Imagem3 from "../../../../../public/assets/Rectangle 14.jpg"

export default function ContainerCardCategoria(){

    const titles = [{title: "ALL MUSICS", img: Imagem1.src}, {title: "ARTIST", img: Imagem2.src}, {title: "ALBUNS", img: Imagem3.src}]
    
    return(
        <CardCategoriaStyles>
            {titles.map((title, index)=>(
                <CardCategoria title={title.title} img={title.img} key={index.toString()}/>
            ))}
        </CardCategoriaStyles>
    )
}


export function CardCategoria(props){

    return(
            <div className="img-categoria">
                <img src={props.img} alt="card" />
                <p>{props.title}</p>
            </div>
    )
}