import React from 'react';
// import axios from 'axios'
// import styled from 'styled-components'

class DetalhesPlay extends React.Component {


    detalhes = this.props.stateDetalhes
    detalhesMapeados = this.detalhes.map((musica)=> {
        return (
            <div key={musica.id}>
                <strong>Artista: </strong>{musica.artist}<br />
                <strong>Musica:  </strong>{musica.name}<br />
                <button>Deletar da Playlist</button><br /><br />
            </div>)
    }) 
    render() {
    return (

        <div><hr />
            <h2>Lista de musicas nesta playlist: {this.detalhesMapeados.length}</h2>
            <p>{this.detalhesMapeados} </p>      
        </div>)
}


}

export default DetalhesPlay