import styled from "styled-components";

const ConteinerConfig = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;

    .triangle{
        width: 0px; height: 0px;
        border-right: 5.5px solid transparent;
        border-left: 5.5px solid transparent;
        border-bottom: 5.5px solid black;
        margin-left: 2px;
    }
    
    nav{
        background-color: black;
        cursor: pointer;
    }

    nav ul li{
        list-style: none;
        font-size: 0.7rem;
        padding: 5px;
    }

    nav:hover li{
        background-color: #161616d1;
    }
`;

export default ConteinerConfig;