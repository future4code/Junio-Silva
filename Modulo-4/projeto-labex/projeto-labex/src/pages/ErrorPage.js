import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

const StyledContainer = styled.div`
height: 90vh;
width: 100vw;
display: flex;
justify-content: space-around   ;
align-items: center;`

const Teste = styled.div`
height: 50vh;
width: 50vw;
background-color: brown;
>p { color: white ;

}
`

const CreateTrip = () => {
    return (
        <StyledContainer>
            <Teste>
                <p>TESTANDOOOO PÁGINA DE ERRO!</p>
            </Teste>
        </StyledContainer>
    )
}

export default CreateTrip