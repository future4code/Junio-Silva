import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import InputsControlados from './InputsControlados'

class TelaListaDePlaylists extends React.Component {

  state = {
    playlists: [],
    addMusica: '',
    idPlaylist: '',
    nomeMusica: '',
    nomeArtista: '',
    urlMusica: '',
  }

  componentDidMount() {
    this.pegaPlaylists()
    console.log("componente carregou")
  }



  pegaPlaylists = () => {
    let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    let autorizacao = {
      headers: {
        authorization: "Junio-Silva-Joy"
      }
    }
    axios.get(URL, autorizacao)
      .then((response) => { this.setState({ playlists: response.data.result.list }) })
      .catch((error) => { console.log(error) })
  }



  mudaMusicaInput = (event) => {
    this.setState({ nomeMusica: event.target.value })

  }
  mudaArtistaInput = (event) => {
    this.setState({ nomeArtista: event.target.value })
    console.log(this.state.nomeArtista)
  }
  mudaUrlInput = (event) => {
    this.setState({ urlMusica: event.target.value })
    console.log(this.state.urlMusica)
  }


  AdicionaMusica = (id) => {
    let URL = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

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
    console.log(this.state.urlMusica)
    console.log(this.state.nomeArtista)
    console.log(this.state.urlMusica)

    axios.post(URL, body, autorizacao)
      .then((response) => {
        // this.setState({nomeMusica:'', nomeArtista:'', urlMusica:''})
        alert("Música adicionada com sucesso!")
      })
      .catch((error) => { console.log(error.data) })
  }

  deletePlay = (id) => {

    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
      {
        headers: {
          Authorization: "Junio-Silva-Joy"
        }
      }
    )
      .then(() => {
        alert("Playlist apagada com sucesso!");
        this.pegaPlaylists();
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  render() {
    let mudaCondicional = (id, nome) => {

      if (this.state.addMusica === nome) {
        this.setState({ idPlaylist: id, addMusica: "" })
      } else {
        this.setState({ idPlaylist: id, addMusica: nome })
      }
    }

    let playListsMap = this.state.playlists.map((playlist) => {
      return <p key={playlist.id}> <strong> Nome:</strong> {playlist.name} <br /><button onClick={() => this.deletePlay(playlist.id)}>Deletar</button>
        <button>Detalhes da Playlist</button>
        <button onClick={() => mudaCondicional(playlist.id, playlist.name)}>Adicionar Musica</button>

      </p>
    })

    return (
      <div>
        <div key={playListsMap.id}>
          <h2>Quantidade de playlists: {playListsMap.length}</h2>
          <p> {playListsMap} </p><hr />
        </div>
        {this.state.addMusica && <InputsControlados
          addMusica ={this.state.addMusica}
          nomeMusica={this.state.nomeMusica}
          mudaMusicaInput={this.mudaMusicaInput}
          nomeArtista={this.state.nomeArtista}
          mudaArtistaInput={this.mudaArtistaInput}
          urlMusica={this.state.urlMusica}
          mudaUrlInput={this.mudaUrlInput}
          AdicionaMusica={this.AdicionaMusica}
          
        />}
      </div>
    )
  }

}
export default TelaListaDePlaylists