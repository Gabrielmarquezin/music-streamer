import styled from "styled-components";
import { device } from "../../MediaQueries/medias";

export const CardCategoriaStyles = styled.div`

    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
   

    .img-categoria{
        position: relative;
        width: 301px;
        max-height: 252px;
        display: flex;
    }

    .img-categoria img{
        width: 100%;
        height: 100%;
    }
    
    p{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.9rem;
        color: white;
    }

    @media screen and (${device.tabletS}){
        display: none;
    }

`;