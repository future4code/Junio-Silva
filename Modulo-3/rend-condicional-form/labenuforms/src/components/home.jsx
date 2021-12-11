import React from "react";
import styled from 'styled-components'

const Titulo = styled.h2`
text-align: center
`

const Formulario = styled.div`


display: flex ;
justify-content: space-around;
flex-direction: column;
align-items: center;
text-align: center;
`

export default class Home extends React.Component {
    render() {

        return (
        <div>
            <Titulo> Etapa 1 - Dados gerais </Titulo>

            <Formulario>
                <div>
                    <p>1. Qual seu nome?</p>
                    <input type="text" />
                </div>
                
                <div>
                    <p>2. Qual sua idade?</p>
                    <input type="number" />
                </div>

                <div>
                    <p>3. Qual seu email?</p>
                    <input type="email" />
                </div>
                
                <div>
                    <p>4. Qual a sua escolaridade?</p>
                    <select type="text">
                        <option>Ensino médio incompleto</option>
                        <option>Ensino médio Completo</option>
                        <option>Ensino Superior incompleto</option>
                        <option>Ensino Superior completo</option>
                    </select>
                </div>
                <br />
                <button>Proxima etapa </button>

            </Formulario>
        </div>
)
    }


}