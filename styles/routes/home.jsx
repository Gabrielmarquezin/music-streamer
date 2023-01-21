import styled from "styled-components";

export const Apresentation = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Montserrat:wght@900&display=swap');

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .container{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 10%;
    }

    .btn{
        align-self: flex-end;
    }

    .btn button{
        background-color: transparent;
        border: 1px solid #e4e4e4c5;
        border-radius: 30px;
        padding: 8px;
        color: #e4e4e4c5;
        letter-spacing: 2px;
        cursor: pointer;
        transition: ease-in 0.5s;
    }

    .container p:nth-child(1){
        font-size: 3rem;
        font-family: 'Inter', sans-serif;
        font-family: 'Montserrat', sans-serif;
        font-weight: 900;
        color: white;
    }

    .container p:nth-child(2n){
        font-family: 'Inter', sans-serif;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.8rem;
        color: #e2e2e2e6;
    }

    .btn:hover button{
        background-color: white;
        color: black;
    }
    

    @media (max-width: 820px){
        transform: translateY(50%);
    }

`