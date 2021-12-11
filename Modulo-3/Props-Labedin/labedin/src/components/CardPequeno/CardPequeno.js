import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="CardPequeno-container">
            <img src={ props.imagem } />
            <h4>{ props.descricao }</h4>
        </div>
    )
}
export default CardPequeno;