import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PerfilIcon } from "../../../public/icons/icons";
import { StylePerfil } from "../../../styles/menu/menu-h";
import { auth } from "../../../infra/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export default function UserPerfil(props){
    
    function changeClass(e){
        const info = document.querySelector('.nav-info')
        info.classList.toggle('blocked')
    }

    return(
        <StylePerfil>
            {props.photo 
                ?
            <Perfil photo={props.photo} onClick={changeClass} />
                :
            <PerfilIcon onClick={changeClass} /> 
            }
       
            <nav className="nav-info">
                <div className="triangulo"></div>
                <ul>
                    <li onClick={props.signIn}>entrar</li>
                    <li>sair</li>
                    <li>editar</li>
                </ul>
            </nav>
        </StylePerfil>
    )
}

export function ConteinUserPerfil(){

    const [photo, setPhoto] = useState(false)

    function SignIn(){
       
        signInWithPopup(auth, provider)
          .then((result) => {
      
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            setPhoto(user.photoURL)
       
          }).catch((error) => {
       
            const errorCode = error.code;
            const errorMessage = error.message;
            

            const email = error.customData.email;
            
            const credential = GoogleAuthProvider.credentialFromError(error);
           
          });

          
    }

    return (
        <UserPerfil signIn={SignIn} photo={photo}/>
    )
}



function Perfil(props){
    return(
        <img className="perfil-img" src={props.photo} onClick={props.onClick}/>
    )
}