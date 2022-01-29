import React from "react";
import styled from 'styled-components'
import fundo from "../assets/fundo.jpg"
import logoG from "../assets/logo-grande.png"
import { useHistory } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';


const MainContainerStyled = styled.div`
height: 91vh;
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;
position: relative;

>img{
   height: 85%;
   margin-top: 4em;
   /* position: absolute;
   top: 20vh; */
}
>div{display:flex;
   flex-direction: column;
}
`

const CardsContainer = styled.div`
padding: 3em;
display: flex;
flex-direction: column;
justify-content: space-around   ;
text-align: center;
height: 25vh;
width: 25vw;
background-color: rgba(255, 255, 255, 0.4);
border-radius: 5%;
margin: 20px .5em;
>h3 {
   color: white;
   font-size: 20px;
}
`



const Home = () => {

   const history = useHistory()

   const goToListPage = () => {
      history.push("/triplist")
      console.log("clicou home")
   }

   
   const goToAdminPage = () => {
      history.push("/admin")
      console.log("clicou adm")
   }

   return (
      <ChakraProvider>
      <MainContainerStyled>

            <CardsContainer>
               <h3>Conhecer ou aplicar para alguma de nossas viagens </h3>
               <Button 
                  onClick={goToListPage}
                  leftIcon={<BsFillArrowLeftSquareFill />} c
                  colorScheme='purple' 
                  variant='solid'> Ir para área Pública 
               </Button>
            </CardsContainer>

            <img src={logoG} />
            <CardsContainer>
               <h3> Se você é um dos nossos administradores de viagens</h3>
               <Button 
                  onClick={goToAdminPage}
                  rightIcon={<BsFillArrowRightSquareFill />} 
                  colorScheme='purple' 
                  variant='solid'>
                   Ir para área Administrativa
               </Button>
            </CardsContainer>

      </MainContainerStyled>
    </ChakraProvider>
   );
}

export default Home