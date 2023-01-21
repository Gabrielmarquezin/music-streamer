import styled from "styled-components";

export const StyleFileInput = styled.div`

    display: flex;
    align-self: center;
    border: 2px dashed #363636;
    z-index: ${(props)=>props.load && -1};

     input[type='file']{
        display: none;
       
    }
    
    label{
        width: 301px;
        height: 252px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #363636;
    }

    .picture{
        max-width: 100%;
        height: 100%;
    }
`