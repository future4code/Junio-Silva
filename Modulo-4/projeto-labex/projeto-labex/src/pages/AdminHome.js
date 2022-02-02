import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { UseTripRequest } from '../hooks/UseTripRequest'
import { IconButton } from '@chakra-ui/react'
import {BsTrashFill} from 'react-icons/bs';
import { useHistory, useParams } from 'react-router-dom';
import {BASE_URL} from '../constants/constants'

const StyledContainer = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: space-around   ;
    align-items: center;
    display: flex;
`

const AdminHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 88vh;
    width: 70vw;
    justify-content: space-around;  
    background-color: rgba(255, 255, 255, 0.1);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 8px; 
    border: 1px rgba(255, 255, 255, 0.8)solid;
    > h1 {
        margin: .3em 0;
        color: white;
        font-size: 35px;
        font-weight: 600;
}`

const TripContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
margin: 10px 0;
height:10em;
width: 75%;
background-color: rgba(255,255,255, 0.8);
margin: 10px;
line-height: 1.5em;
letter-spacing: 0.1em;
border-radius: 5px;
padding: 10px 15px;
-webkit-box-shadow: inset 0px 0px 4px 4px rgba(50, 50, 50, 0.75);
-moz-box-shadow:    inset 0px 0px 4px 4px rgba(50, 50, 50, 0.75);
box-shadow:         inset 0px 0px 4px 2px rgba(0,0,0, 0.5);

>div{
    width: 90%;
}
`

const ButtonsContainer = styled.div`
 height: 60px;
 width: 97%;
 margin-right: 10px;
 display: flex;
 justify-content: space-around;
 align-items: center;
 `

const MapViagensContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 50vh;
    width:100%;
    height: 80%;
    overflow: auto;
`


const AdminHome = () => {

    const {id} = useParams()
    const history = useHistory()

    const goToCreateTrip = () => {
       history.push("/createtrip")
       console.log("clicked createtrip")
    }

    const deleteTrip = (id) => {
        axios.delete(`${BASE_URL}/trips/${id}`)
    }

    const goBack = () => {
        history.goBack()
        console.log("clicked")
     }

    const list = UseTripRequest(`${BASE_URL}/trips`, [])
    const MappedTrips = list.map(trip => {
        return (
            <TripContainer 
            onClick={() =>{
                history.push(`/tripdetails/${trip.id}`)
            }}
            key={trip.id}>
                <div>
                    <p> <strong>Nome:</strong> {trip.name} </p>
                    <p> <strong>Data:</strong> {trip.date} </p>
                    <p><strong>Planeta:</strong> {trip.planet}</p>
                    <p><strong>Descrição:</strong> {trip.description}</p>
                    <p><strong>Duração(dias):</strong>  {trip.durationInDays}</p>
                </div>
                <IconButton
                    colorScheme='purple'
                    aria-label='Search database'
                    variant='outline'
                    size='lg'
                    icon={<BsTrashFill />}
                />
            </TripContainer>

        )
    })

    return (

        <StyledContainer>
            <ChakraProvider>
                <AdminHomeContainer>
                    <h1> Painel Administrativo </h1>
                    <ButtonsContainer>
                        <Button
                            onClick={goBack}
                            colorScheme='purple'
                            variant='solid'> Voltar
                        </Button>

                        <Button
                            onClick={goToCreateTrip}
                            colorScheme='purple'
                            variant='solid'> Criar Viagem
                        </Button>

                        <Button
                            colorScheme='purple'
                            variant='solid'> Logout
                        </Button>
                    </ButtonsContainer>
                    <MapViagensContainer>
                        {MappedTrips}
                    </MapViagensContainer>
                </AdminHomeContainer>
            </ChakraProvider>
        </StyledContainer>

    )
}

export default AdminHome