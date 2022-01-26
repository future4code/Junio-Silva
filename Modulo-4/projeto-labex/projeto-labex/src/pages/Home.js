import React from "react";
import styled from 'styled-components'
import fundo from "../assets/fundo.jpg"
import logoG from "../assets/logo-grande.png"


const MainContainerStyled = styled.div`
height: 90vh;
width: 100vw;
display: flex;
justify-content: space-around   ;
align-items: center;
position: relative;
>img{
   height: 50vh;
}
`

const CardsContainer = styled.div`
text-align: center;
margin: 10px;
height: 80vh;
width: 30vw;
background-color: rgba(255, 255, 255, 0.2);
border-radius: 5%;
>h3 {
   color: white;
   font-size: 20px;
}
`

 const Home = () => { 
    return (
    <MainContainerStyled>
      <CardsContainer>
       <h3>O céu é o limite dos passaros,<br /> 
          nao o seu!</h3>
      </CardsContainer>
      <img src={logoG} />
      <CardsContainer>

      </CardsContainer>

    </MainContainerStyled>
    
    );
 }  

 export default Home