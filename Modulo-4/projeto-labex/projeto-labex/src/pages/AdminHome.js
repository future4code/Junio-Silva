import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

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
width: 60vw;
justify-content: space-around;  
background-color: rgba(255, 255, 255, 0.4);
justify-content: center;
flex-direction: column;
align-items: center;
border-radius: 8px;
border: 1px rgba(255, 255, 255, 0.8)solid;
> h1 {
    margin: 1em 0;
    color: white;
}

>div{
    margin: 1em 0;
    display: flex;
    justify-content:space-around;
    width:98%;
}
`

const MapViagensContainer = styled.div`
height: 50vh;
background-color: rgba(200, 200, 255, 0.6);
width:98%;
height: 80%;
`

const AdminHome = () => {
    return (
        <StyledContainer>
            <AdminHomeContainer>
                <h1> Painel Administrativo </h1>
                <div>
                    <button>Voltar</button>
                    <button>Criar Viagem</button>
                    <button>Logout</button>
                </div>
                <MapViagensContainer> 
                     map de viagens aq
                </MapViagensContainer>
            </AdminHomeContainer>
        </StyledContainer>
    )
}

export default AdminHome