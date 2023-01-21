import styled from "styled-components";

export const StylesForm = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    z-index: 3;
    
    .form{
        background-color: #1A1818;
        display: flex;
        flex-direction: column;
        padding: 30px;
        gap: 30px;
    }

    input[type='text']{
        width: 100%;
        outline: 0;
        border: none;
        background-color: transparent;
        color: #DDDDDD;
        padding-bottom: 5px;
        font-size: 1rem;
    }

    input::placeholder{
        color: #FFFFFF;
    }

    .input-text{
        min-width: 424px;
        border-bottom: 1px solid #DDDDDD;
        cursor: pointer;
    }
    

    //buttons
    .buttons{
        display: flex;
        justify-content: space-between;
        
    }

    .buttons input{
        padding: 10px;
        border: solid 1px #CECECE;
        background-color: transparent;
        color: #CECECE;
        transition: ease-in-out 0.5s;
        cursor: pointer;
    }

    .buttons input:hover{
        background-color: white;
        color: #1A1818;
    }

    .buttons,
    .input-text{
       z-index: ${(props)=> props.load && -1};
    }

    .load{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

`