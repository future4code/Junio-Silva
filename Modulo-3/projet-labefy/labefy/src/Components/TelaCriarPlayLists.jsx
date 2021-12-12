import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

class TelaCriarPlaylists extends React.Component {

  state = {
    textoInput: ""
  }

  mudaTextoInput = (event) => {
    this.setState({textoInput: event.target.value})
    console.log(this.state.textoInput)
  }

  CriarPlaylist = () => {
    let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    let body = {
        "name": this.state.textoInput 
    }
    let autorizacao = {
      headers: {
        Authorization: "Junio-Silva-Joy"
      }
    }

    axios.post(URL, body, autorizacao)
    .then((response) => {
      this.setState({textoInput:""})
      alert("Playlist Criada com sucesso!")
    })
    .catch((error) => {alert(error)})
  }
  render(){
  return (


     <div>
        <h3>Criar Playlist</h3>
        <div>
            <input placeholder="Nome da Playlist" value={this.state.textoInput} onChange={this.mudaTextoInput} />
            <button onClick={this.CriarPlaylist}>Criar</button>
        </div>
      </div>
  )}
}

export default TelaCriarPlaylists