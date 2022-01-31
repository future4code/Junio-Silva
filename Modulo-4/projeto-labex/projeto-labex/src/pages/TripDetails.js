import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { UseTripRequest } from '../hooks/UseTripRequest';



const StyledContainer = styled.div`
height: 90vh;
width: 100vw;
display: flex;
justify-content: space-around   ;
align-items: center;`

const TripDetails = () => {

    const lista = UseTripRequest();

    return (
        <StyledContainer>


        </StyledContainer>
    )
}

export default TripDetails