import React, {useState} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {BASE_URL} from '../constants/constants'

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

    const [email, setEmail] =  useState("")
    const [password, setPassword] = useState("")

    const handleEmail =  ({target}) => {
        setEmail(target.value)
        console.log("email",email)
    }

    const handlePassword =  ({target}) => {
        setPassword(target.value)
        console.log("senha",password)
    }

    const onSubmitLogin = () =>{
        axios.post(`${BASE_URL}/login`, {
            email,
            password
        }).then(({data})=>{
            localStorage.setItem("token", data.token )
            console.log(data)
            setEmail("")
            setPassword("")

        }).catch((res)=>{
            console.log("erro", res)
        })
    }

    console.log(`${BASE_URL}/LOGIN`)

    return (
        <StyledContainer>

            <FormContainer>
                <h2>Login</h2>
                    <label>Para ter acesso administrativo</label><br />
                    <div>
                        <label>E-mail</label><br />
                        <InputEstilizado value={email} onChange={handleEmail} />
                    </div>

                    <div>
                        <label>Senha</label><br />
                        <InputEstilizado value={password} onChange={handlePassword} />
                    </div>

                    <button onClick={onSubmitLogin}> Entrar </button>
            </FormContainer>
        </StyledContainer>
    )
}

export default LoginPage