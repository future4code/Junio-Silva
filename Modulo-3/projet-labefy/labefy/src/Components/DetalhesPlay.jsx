import React from 'react';
// import axios from 'axios'
// import styled from 'styled-components'

class DetalhesPlay extends React.Component {

  

    render() {

        let detalhesmapeados = this.props.stateDetalhes
        console.log(typeof detalhesmapeados)
    return (

        <div>
            <p>Olá {detalhesmapeados} </p>      
        </div>)
}


}

export default DetalhesPlay