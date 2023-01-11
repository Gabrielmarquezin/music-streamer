import styled from "styled-components";

const ConteinerMenu = styled.div`
    background-color: #2F2F2F;
    display: flex;
    justify-content: space-between;

    .nav{
        width: 100%;
    }

    .nav ul{
        display: flex;
        justify-content: space-evenly;
    }

    .nav ul li{
        list-style: none;
        padding: 20px;
        cursor: pointer;
    }

    .nav ul li a{
        text-decoration: none;
        color: white;
    }

   .nav ul li:hover{
       opacity: 0.6;
   }
   
`

export const StylePerfil = styled.div`
    position: relative;
    align-self: center;
    
    .nav-info{
        position: absolute;
        top: calc(100% + 5px);
        right: 25%;
        flex-direction: column;
        align-items: center;
        display: none;
   }

   .nav-info ul{
        background-color: black;
        padding: 5px;
   }

   .triangulo{
        width: 0px; height: 0px;
        border-right: 5.5px solid transparent;
        border-left: 5.5px solid transparent;
        border-bottom: 5.5px solid black;
    }

   .nav-info ul li{
        color: white;
        font-size: 0.9rem;
        text-decoration: none;
        list-style: none;
        cursor: pointer;
       
   }

   .icon-user{
       color: #a09d9d;
       font-size: 2rem;
       cursor: pointer;
       margin-right: 30px;
    }

    .perfil-img{
        width: 30px;
        height: 30px;
        border-radius: 20px;
        margin-right: 30px;
        cursor: pointer;
    }

    //events

    .nav-info ul li:hover{
        background-color: #1b1b1b;
        opacity: 0.8;
    }

   .icon-user:hover,
   .perfil-img:hover{
        outline: 5px solid #494949;
        outline-offset: -2px;
        border-radius: 20px;
   }

   .blocked{
        display: block;
        display: flex;
   }

`


export default ConteinerMenu;