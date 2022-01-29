import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { Input, Select, Button } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';
import { UseTripRequest } from '../hooks/UseTripRequest'
import { useHistory } from 'react-router-dom'

const StyledContainer = styled.div`
    height: 85vh;
    width: 100vw;
    display: flex;

    justify-content: space-around   ;
    align-items: center;
`

const FormContainer = styled.div`
    background-color: rgba(0 ,0 ,0 , 0.7);
    height: 65vh;
    width: 40vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    border: 1px rgba(255, 255, 255, 0.8)solid;

>div {
    color: black;
    width: 80%;
    height: 10vh;
    justify-content: center;
    >label {color: white;}
}

input, select { 
    padding-left: 10px
}

>h2{
    font-weight: 700;
    margin: .5em 0;
    font-size:35px;
    color: white;
}
`

const ContainerBotao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: .2  em;
    justify-content: center;
`



const CreateTrip = () => {

    
    return (
        <ChakraProvider>
            <StyledContainer>

                <FormContainer>
                    <h2>Criar Viagem</h2>

                    <div>
                        <label>Nome</label><br />
                        <Input bg="white" placeholder='nome' />
                    </div>
                    <div>
                        <label>Escolha um planeta</label><br />
                        <Select bg="white"  placeholder="Selecione">

                        </Select>
                    </div>

                    <div>
                        <label>Data</label><br />
                        <Input bg="white" placeholder='data' />
                    </div>

                    <div>
                        <label>Descrição</label><br />
                        <Input  bg="white" placeholder='digite seu texto' />
                    </div>

                    <div>
                        <label>Duração em dias</label><br />
                        <Input bg="white" placeholder='duração' />
                    </div>

                    <ContainerBotao>
                        <Button                   
                        colorScheme='purple' 
                        variant='solid'> Criar </Button>
                    </ContainerBotao>
                </FormContainer>
            </StyledContainer>
        </ChakraProvider>
    )
}

export default CreateTrip