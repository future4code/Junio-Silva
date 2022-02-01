import React from 'react';
import styled from 'styled-components'
import axios from 'axios';

const StyledContainer = styled.div`
height: 85vh;
width: 100vw;
display: flex;
justify-content: space-around   ;
align-items: center;
>*{
    color: white
}`

const FormContainer = styled.div`
background-color: rgba(0 ,0 ,0 , 0.7);
height: 50%;
width: 30%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border-radius: 8px;
border: 1px rgba(255, 255, 255, 0.8)solid;
>div {
justify-content: center;
margin: 15px 0;
}
>h2{margin-bottom: .3em;}
`

const InputEstilizado = styled.input`
padding: .6em;
width: 25em;
margin-top: 5px;
`


const LoginPage = () => {
    return (
        <StyledContainer>

            <FormContainer>
                <h2>Login</h2>
                    <label>Para ter acesso administrativo</label><br />
                    <div>
                        <label>E-mail</label><br />
                        <InputEstilizado />
                    </div>

                    <div>
                        <label>Senha</label><br />
                        <InputEstilizado />
                    </div>

                    <button> Entrar </button>
            </FormContainer>
        </StyledContainer>
    )
}

export default LoginPage