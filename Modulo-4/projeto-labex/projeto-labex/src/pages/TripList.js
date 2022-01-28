import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { UseTripRequest } from '../Hooks/UseTripRequest';
import { ChakraProvider } from '@chakra-ui/react';
import { Button , ButtonGroup } from '@chakra-ui/react'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';


const StyledContainer = styled.div`
height: 90vh;
width: 100vw;
display: flex;
justify-content: space-around   ;
align-items: center;
display: flex;
justify-content: space-around;`

const ApplyCard = styled.div`
width: 25vw;
height: 90%;
display: flex;
flex-direction: column;
justify-content:space-around;
align-items: center;
>h1{
    font-size: 40px;
    font-weight: 700;
    color: white;
    text-align:center;
}

>img{
    height: 22em;
    width: 15em;
    border-radius: 10%;
}
`
const TripsCard = styled.div`
width: 70vw;
height: 97%;
background-color: rgba(0 ,0 ,0 , 0.7);
border: 1px solid rgba(145,21,255, 0.9);
overflow: auto;
display:flex;
flex-direction: column;
align-items: center;
>h2{color: #fff;
    margin-top:20px;
}
` 
const TripContainer =  styled.div`
height:10em;
width: 95%;
background-color: rgba(255,255,255, 0.8);
margin: 10px;
line-height: 1.5em;
letter-spacing: 0.1em;
border-radius: 5px;
padding: 10px 15px;
-webkit-box-shadow: inset 0px 0px 4px 4px rgba(50, 50, 50, 0.75);
-moz-box-shadow:    inset 0px 0px 4px 4px rgba(50, 50, 50, 0.75);
box-shadow:         inset 0px 0px 4px 2px rgba(0,0,0, 0.5);

>p{
    font-family: 'Courier New';
}
`
const TripList = () => {

    const listOfTrips  = UseTripRequest("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips", [])
    
    const MappedTrips = listOfTrips.map( trip => {
        return(
        <TripContainer key={trip.id}>
            <p> <strong>Nome:</strong> {trip.name} </p>
            <p> <strong>Data:</strong> {trip.date} </p>
            <p><strong>Planeta:</strong> {trip.planet}</p>
            <p><strong>Descrição:</strong> {trip.description}</p>
            <p><strong>Duração(dias):</strong>  {trip.durationInDays}</p>
        </TripContainer>)
    })


        const history = useHistory()

        const SignToTrip = () => {
            history.push("/applicationform")
            console.log("clicou sign to trip")
         }

    return (
        <StyledContainer>
            <ChakraProvider>
            <ApplyCard>
                <h1> A LabeX te proporciona as viagens mais seguras da galáxia. </h1>
                <img src="https://media0.giphy.com/media/j5zUrmQ4VgJbV3pzPU/giphy.gif?cid=ecf05e47gffl65ltptctsjg9fv1c3xv6iul66gcabctq9s66&rid=giphy.gif&ct=g" />
                <Button 
                onClick={SignToTrip}
                rightIcon={<BsArrowRight/>}  
                colorScheme='purple' 
                variant='solid'> Inscrever para viagem </Button>
                        
            </ApplyCard>

            <TripsCard>
                <h2> Temos {MappedTrips.length} viagens com inscrições abertas.</h2>
                {MappedTrips}
            </TripsCard>
            </ChakraProvider>
        </StyledContainer>
    )
}

export default TripList