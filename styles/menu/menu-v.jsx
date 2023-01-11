import styled from "styled-components";

const ConteinerMenuV = styled.div`
   
    width: 280px;    
    background-color: #2F2F2F;

    .nav .conteiner-ul{
        display: flex;
        flex-direction: column;
        gap: 171px;
        padding-top: 30px;
    }

    .conteiner-ul ul li{
        display: flex;
        gap: 15px;
        color: white;
        padding: 20px 20px 20px 40px;
        cursor: pointer;
    }

    .conteiner-ul ul li a{
        list-style: none;
        color: white;
        font-size: 0.9rem;
        text-decoration: none;
    }

    //events

    .conteiner-ul ul li:hover{
        background-color: #585858cf;
    }
`;

export default ConteinerMenuV;