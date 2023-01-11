import styled from "styled-components";

const ConteinerSearch = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Montserrat:wght@900&display=swap');

    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: calc(30px);
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
`;

export default ConteinerSearch;