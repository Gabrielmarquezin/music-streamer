
import styled from "styled-components";
import { device } from "../MediaQueries/medias";

export const LoadingStyles = styled.div`
    height: 100%;
    width: ${(props)=> {props.width ? props.width : 200+"px"}};
    display: flex;
    justify-content: center;
    align-items: center;

    .loading{
        height: 40px;
        width: 40px;
        
        border: 4px solid transparent;
        border-right-color: white;
        border-left-color: white;
        border-radius: 50%;

        animation: rotation 1s infinite;
    }


    @keyframes rotation{
        to{
            transform: rotate(1turn);
        }
    }

`

export const LoadinCardSelected = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`