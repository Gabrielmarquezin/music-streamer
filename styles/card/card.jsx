import styled from "styled-components";

const MainConteiner = styled.div`
    width: 100%;
    padding: 0px 40px 0px 40px;
    
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
        
    }

    .img img{
        width: 100%;
    }

    .text{
        color: white;
        font-size: 0.8rem;
        margin-top: 10px;
    }

    .icons-info{
        display: flex;
        justify-content: space-between;
        color: white;
    }

    .icons-info .elipese{
        position: relative;
    }
    

    //Video
    .player-audio{
        display: flex;
        flex-direction: column;
        gap: 15px;
        height: 100%;
    }
    .audio{
        position: relative;
        margin-top: 10px;
       
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

`


export default MainConteiner;