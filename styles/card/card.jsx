import styled from "styled-components";
import { device } from "../MediaQueries/medias";

const MainConteiner = styled.div`
    width: 100%;
    padding: 0px 40px 0px 40px;
    display: flex;
    flex-direction: column;
    
    .conteiner-card{
        width: 100%;
        margin-top: 10px;
        padding-bottom: 30px;
        display: grid;
        grid-template-columns: repeat(auto-fit, 237px);
        justify-content: space-between;
        direction : rtl;
        grid-row-gap: 30px;
        
    }

    .blocked{
        display: none;
    }

    .center-loading{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .teste{
        height: 100%;
    }

    @media screen and (${device.smartphone}) {
        padding: 0 3px 5px 3px;
    }


`

export const ConteinerCard = styled.div`
    height: 350px;
    width: 100%;
    background-color: #2F2F2F;
    display: flex;
    flex-direction: column;
    padding: 28px 28px 10px 28px;
    direction : ltr;


    .img{
        width: 100%;
        cursor: pointer;
        
    }

    .img img{
        width: 100%;
    }

    .text{
        color: white;
        font-size: 0.8rem;
        margin-top: 10px;
        cursor: pointer;
    }

    .icons-info{
        display: flex;
        justify-content: space-between;
        color: white;
    }

    .icons-info .elipese{
        position: relative;
    }
    
    .icon{
        cursor: pointer;
    }
    //Video
    .Container-audio{
        display: flex;
        flex-direction: column;
        gap: 15px;
        height: 100%;
    }
    .bar-container{
        position: relative;
        margin-top: 10px;
        cursor: pointer;
       
    }
   .audio-loader{
        display: flex;
        align-items: center;
        position: absolute;
        width: 100%;
    }

   .bar-loader{
        width: 1%;
        height: 3px;
        background-color: white;
        z-index: 2;
        
    }

   .boll{
        height: 8px;
        min-width: 8px;
        border-radius: 10px;
        background-color: white;
        z-index: 2;
    }

   .audio-progress{
        width: 100%;
        height: 2px;
        background-color: #242424;
        position: absolute;
        top: 4px;
    }

   .player-pause{
        color: white;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .render-icon{
        align-self: center;
    }

    .render-icon .icon{
        font-size: 2.3rem;
        margin-top: 8px;
    }

    .iconBlocked{
        display: none;
    }
    
    //event
    .hover-class{
        transform: scale(2, 2);
    }

    @media screen and (max-width: 820px){
        height: 100%;
    }
`


export default MainConteiner;