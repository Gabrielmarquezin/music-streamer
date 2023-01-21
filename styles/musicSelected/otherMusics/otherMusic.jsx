import styled from "styled-components";
import { device } from "../../MediaQueries/medias";

export const OtherMuscisStyles = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Montserrat:wght@900&display=swap');

    display: flex;
    flex-direction: column;
    width: 220px;
    max-height: 409px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 20px;

    
    .container{
        display: flex;
        height: 50px;
        margin-bottom: 8px;
        justify-content: space-between;
        cursor: pointer;
        width: 100%;
        gap: 8px;
    }

    .imagem-music{
        max-width: 55px;
        max-height: 50px;
    }

    .imagem-music img{
        width: 100%;
        height: 100%;
    }

    .info-music{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 80%;
        overflow: hidden;
    }

    .info-music p:first-child{
        font-size: 0.7rem;
        color: white;
     
    }

    .info-music p:nth-child(2n){    
        font-size: 0.6rem;
        color: #D9D9D9;
    }

    .info-music p:first-child,
    .info-music p:nth-child(2n){
        letter-spacing: 2px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-family: 'Inter', sans-serif;
        font-family: 'Montserrat', sans-serif;
        
    }

    //ADICONANDO CLASSE

    .container:hover .slide-text{
        animation: slide 3s  alternate ;
        animation-timing-function: ease-in-out;
    }

    .container:hover .slide-second{
        animation: slide 3s alternate;
        animation-delay: 3s;
    }
    @keyframes slide{
       from{
         transform: translateX(10%);
       }
       to{
         transform: translateX(-100%);
       }
    }

    .music-selected{
        background-color: #52525290;
        padding: 2px 2px 2px 5px;
    }

    //events

    .container:hover {
        opacity: 0.5;
    }

    @media screen and (${device.tabletS}){
        width: 100%;
        height: max(100%, 400px);

        .info-music p:first-child,
        .info-music p:nth-child(2n){
            font-size: 1rem;
        }

        .loading{
            display: none;
        }
    }

    @media screen and (${device.smartphone}) {
        padding-bottom: 20px;
        
        .container{
            margin-bottom: 10px;
        }
    }

 

`;

export const StyleContainer = styled.div`
    
`;