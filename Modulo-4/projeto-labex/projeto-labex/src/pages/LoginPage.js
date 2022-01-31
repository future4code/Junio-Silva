import React, {useState} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {BASE_URL} from '../constants/constants'
import { Button, ButtonGroup } from '@chakra-ui/react'

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
height: 35%;
width: 30%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border-radius: 8px;
border: 1px rgba(255, 255, 255, 0.8)solid;
padding:20px;
>div {
justify-content: center;
margin: 15px 0;
}`

const InputEstilizado = styled.input`
padding: .6em;
width: 25em;
margin-top: 5px;
`


const LoginPage = () => {

    const [formLogin, setFormLogin] =  useState({})

    const handleInput = ({target}) => {
        setFormLogin({...formLogin, [target.name]: target.value})
    }

    const onSubmitLogin = (event) =>{
        event.preventDefault()

        axios.post(`${BASE_URL}/login`, {
            "email": formLogin.email,
            "password": formLogin.password
        }).then(({data})=>{
            localStorage.setItem("token", data.token )
            console.log("deu certo",data)

        }).catch((res)=>{
            console.log("erro", res)
        })
    }

    const Label= styled.label`
        color: white;
    `

    return (
        <StyledContainer>

            <FormContainer>
                <h2>Login</h2>
                    <label>Para ter acesso administrativo</label><br />
                    <form onSubmit={onSubmitLogin}>
                    <div>
                        <Label>E-mail</Label><br />
                        <InputEstilizado 
                        name="email"
                        value={formLogin.email} 
                        onChange={handleInput}/>
                    </div>

                    <div>
                        <label>Senha</label><br />
                        <InputEstilizado 
                        name="password"
                        value={formLogin.password} 
                        onChange={handleInput} />
                    </div>

                    <button > Entrar </button>
                    </form>
            </FormContainer>
        </StyledContainer>
    )
}

export default LoginPage