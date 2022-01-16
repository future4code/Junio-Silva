import React from 'react';
import axios from 'axios'
// import styled from 'styled-components'

class AdicionaMusica extends React.Component {

    state = {
        nomeMusica: '',
        nomeArtista: '',
        urlMusica: '',
        listaMusicas: []
    }

    mudaMusicaInput = (event) => {
        this.setState({nomeMusica: event.target.value})

    }
    mudaArtistaInput = (event) => {
        this.setState({nomeArtista: event.target.value})
    }
    mudaUrlInput = (event) => {
        this.setState({urlMusica: event.target.value})
     }


    adicionaMusica = (id) => {
        let URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`
    
        let body = {
            name: this.state.nomeMusica,
            artist: this.state.nomeArtista,
            url: this.state.urlMusica
        }
        let autorizacao = {
          headers: {
            Authorization: "Junio-Silva-Joy"
          }
        }
    
        axios.post(URL, body, autorizacao)
        .then((response) => {
          this.setState({nomeMusica:"", nomeArtista:'', urlMusica:''})
          alert("Música adicionada com sucesso!")
        })
        .catch((error) => {alert(error)})
      }

    render() {

    return (

    <div>
        <hr />
        <h3>Adicionar musica à playlist selecionada:</h3>
        <div>
            Nome da Música<br />
            <input value={this.state.nomeMusica} onChange={this.mudaMusicaInput} /><br /><br />
            Nome do Artista<br />
            <input value={this.state.nomeArtista} onChange={this.mudaArtistaInput} /><br /><br />
            Link da Musica<br />
            <input value={this.state.urlMusica} onChange={this.mudaUrlInput} /><br /><br />
            <button onClick={this.adicionaMusica}>Adicionar</button>
        </div>
      </div>)
}




}

export default AdicionaMusica