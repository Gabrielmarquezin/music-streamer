import styled from "styled-components";
import { device } from "../../MediaQueries/medias";

const ConteinerSearch = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Montserrat:wght@900&display=swap');

    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
    align-items: center;

    .input input{
        outline: 0;
        border: none;
        background-color: transparent;
        width: 100%;
        color: white;
        font-size: 0.8rem;
    }

    input::placeholder{
        color: #D9D9D9;
    }

    .input{
        border-bottom: 1px solid #D9D9D9;
        height: 28px;
        width: 200px;
    }
    
    p{
        font-size: 2.5rem;
        color: white;
        font-family: 'Inter', sans-serif;
        font-family: 'Montserrat', sans-serif;
    }

    @media screen and (max-width: 820px) {
        .input input{
            height: 100%;
            font-size: 1rem;
            transform: translateY(10%);
        }

        input::placeholder{
        color: #d9d9d978;
    }

    @media screen and (${device.smartphone}){
      
    }
    }
`;

export default ConteinerSearch;