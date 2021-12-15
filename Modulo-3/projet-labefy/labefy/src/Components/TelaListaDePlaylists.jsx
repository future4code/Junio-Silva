import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

class TelaListaDePlaylists extends React.Component {

    state = {
        playlists: [],
        idPlaylist: '',
        nomeMusica: '',
        nomeArtista: '',
        urlMusica: '',
    }

    componentDidMount() {
        this.pegaPlaylists()
        console.log("componente carregou")
    }

    pegaPlaylists = () =>{
        let URL= "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        let autorizacao = {
            headers: {
                authorization: "Junio-Silva-Joy"
            }
        }
        axios.get(URL, autorizacao)
        .then((response)=>{ this.setState({playlists: response.data.result.list})})
        .catch((error)=>{console.log(error)})
    }

    mudaMusicaInput = (event) => {
      this.setState({nomeMusica: event.target.value})
      console.log(this.state.nomeMusica)
  }
  mudaArtistaInput = (event) => {
      this.setState({nomeArtista: event.target.value})
      console.log(this.state.nomeArtista)
  }
  mudaUrlInput = (event) => {
      this.setState({urlMusica: event.target.value})
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
  
      axios.post(URL, body, autorizacao)
      .then((response) => {
        this.setState({nomeMusica:"", nomeArtista:'', urlMusica:''})
        alert("Música adicionada com sucesso!")
      })
      .catch((error) => {alert(error)})
    }

    deletePlay = (id) => {

        axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers:{
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

        let playListsMap = this.state.playlists.map((playlist)=>{
            return <p> <strong> Nome:</strong> {playlist.name} <br /><button onClick={() => this.deletePlay(playlist.id)}>Deletar</button> 
              <button>Detalhes da Playlist</button> 
              <button>Salvar Playlist</button>
                
            </p>
        })

        return(
          <div>
            <div key={playListsMap.id}>
              <h2>Quantidade de playlists: {playListsMap.length}</h2>
              <p> {playListsMap} </p>
            </div>
<hr />
            <h3>Adicionar Musica a Playlist</h3>
            <div>
                <label>Nome da Musica</label><br />
                <input value={this.state.nomeMusica} onChange={this.mudaMusicaInput} /><br /><br />

                <label>Nome do artista</label><br />
                <input  value={this.state.nomeArtista} onChange={this.mudaArtistaInput} /><br /><br />
                <label>Link da Música</label><br />
                <input value={this.state.urlMusica} onChange={this.mudaUrlInput} /><br />
                <button onClick={this.AdicionaMusica}>Adicionar</button>
            </div>
          </div>
        )
    }

}
export default  TelaListaDePlaylists