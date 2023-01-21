import styled from "styled-components";
import { device } from "../../MediaQueries/medias";

export const PlayerStyler = styled.div`
    display: flex;
    gap: 30px;

    @media screen and (${device.tabletS}){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 10px;
    }
`;

export const InformationStyle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Montserrat:wght@900&display=swap');

    width: 290px;
    max-width: 90%;

    .music-info p{
        font-size: 0.9rem;
        color: white;
        font-family: 'Inter', sans-serif;
        font-family: 'Montserrat', sans-serif;
    }

    .music-info p:last-child{
        color: #c9c9c9;;
    }
    
    @media screen and (${device.tabletS}){
        order: 1;
        width: 90%;

        .music-info p{
            font-size: 1.1rem;
        }
    }

`;

export const ButtonInfoStyles = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-between;

   
    .create-playlist p{
        font-size: 0.7rem;
        color: white;
    }

    .create-playlist{
        display: flex;
        align-items: center;
    }

    .create-playlist,
    .heart{
        display: flex;
        gap: 10px;
        cursor: pointer;
    }

    .create-playlist .icon,
    .heart .icon{
        color: white;
        font-size: 1.4rem;
    }


    @media screen and (${device.tabletS}){
        .create-playlist .icon,
        .heart .icon{
            font-size: 2rem;
        }
        .create-playlist p{
            font-size: 0.9rem;
        } 
    }

`

export const PlayerLoadingStyle = styled.div`
    width: min(28vw,361px);
    min-height: 261px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (${device.tabletS}){
       width: 100%;
       height: 500px;
    }

`