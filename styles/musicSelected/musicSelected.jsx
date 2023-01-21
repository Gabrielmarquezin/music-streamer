import styled from "styled-components";
import { device } from "../MediaQueries/medias";

export const StyleAudio = styled.div`
   
    display: flex;
    flex-direction: column;
    width: min(50vw, 361px);
    max-width: 100%;
    gap: 18px;
    align-items: center;

    .img{
        width: 100%;
        height: 300px;
        max-height: 400px;
    }

    .img img{
        width: 100%;
        height: 100%;
    }

//audio
    .Container-audio{
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        width: 100%;
    }

    .bar-container{
        width: 100%;
        position: relative;
        cursor: pointer;
    }

    .bar-container .audio-loader{
        width: 100%;
        display: flex;
        align-items: center;
        position: absolute;
    }
    
    .bar-container .audio-loader .bar-loader{
        width: 1%;
        height: 3px;
        background-color: white;
    }

    .bar-container .audio-loader .boll{
        width: 8px;
        height: 8px;
        border-radius: 10px;
        background-color: white;
    }

    .bar-container .audio-progress{
        width: 100%;
        height: 3px;
        background-color: #161616;
        position: absolute;
        z-index: -1;
        top: 3px;
    }

    //icons
    .player-pause{
        width: 100%;
    }
    .player-pause .render-icon{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .render-icon .icon{
        font-size: 2.3rem;
    }

    .render-icon .iconP{
        font-size: 1rem;
    }

    .render-icon .iconP,
    .render-icon .icon{
        color: white;
        cursor: pointer;
    }

    @media screen and (${device.tabletS}){
        order: 2;
        width: 90%;

        .img{
            height: 100%;
        }

        .render-icon .icon{
            font-size: 3.4rem;
        }

        .render-icon .iconP
        {
            font-size: 1.5rem;
        }
        .bar-container .audio-loader .bar-loader,
        .bar-container .audio-progress{
            height: 5px;
        } 
        
        .bar-container .audio-progress{
           top: 2px;
        }
        .bar-container .audio-loader .boll{
            width: 10px;
            height: 10px;
            transform: translateX(-10%);
        }
    }

    @media screen and (${device.smartphone}) {
        .render-icon .icon{
            font-size: 2.5rem;
        }

        .render-icon .iconPlay,
        .render-icon .iconPause{
            font-size: 4rem;
        }

        .Container-audio{
            gap: 30px;
        }
    }

  
`;

 export const MusicSelectedStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 60px;
 `;


export const ExitStyle = styled.div`

    .icon-container{
        padding: 5px;
        margin-bottom: 15px;
        cursor: pointer;
    }
    .icon{
        color: white;
        font-size: 1.2rem;
        
    }


`