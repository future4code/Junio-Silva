import React from 'react';
import axios from 'axios'
// import styled from 'styled-components'
import DetalhesPlay from './DetalhesPlay';
import AdicionaMusica from './AdicionaMusica';

class TelaListaDePlaylists extends React.Component {

    state = {
        idPlaylist: '',
        mostraLista: false,
        mostraDetalhe: false,
        infoplaylist: []
        // criar um estado para receber o valor da requisição.
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
          alert("Playlist apagado com sucesso!");
          this.props.pegaPlaylists();
        })
        .catch((err) => {
        })
      }

    addMusica = (id) => {
      this.state.mostraLista 
      ? this.setState({mostraLista:false})
      : this.setState({mostraLista:true})
      this.setState({idPlaylist:id})
    }

    getPlaylistinfo = (id) => {
      
      axios.get(
      

        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/`,
        {
          headers:{
            Authorization: "Junio-Silva-Joy"
          }
        }
      )
      .then((res) => {
        this.state.mostraDetalhe
        ? this.setState({mostraDetalhe:false})
        : this.setState({mostraDetalhe:true})
        

        this.setState({infoplaylist:res.data.result.tracks})
      })
      .catch((err) => {
        alert(err.message)
      })
    }

    render() {
        
    let mostraLista = <h1>Página de erro</h1> 
    if(this.state.mostraLista){
      mostraLista = <AdicionaMusica idPlaylist = {this.state.idPlaylist} />
    }else{
      mostraLista= ""
    }
    let mostraDetalhe = <h1>Página de erro</h1> 
    if(this.state.mostraDetalhe){
      mostraDetalhe = <DetalhesPlay stateDetalhes={this.state.infoplaylist} />

    }else{
      mostraDetalhe = <p></p>
    }

        let playListsMap = this.props.playlists.map((playlist)=>{
            return  (
              <div key={playlist.id}>
             <strong> Nome:</strong> {playlist.name} <br /> 
             <button onClick={() => this.deletePlay(playlist.id)}>Deletar</button> 
              <button onClick={() => this.getPlaylistinfo(playlist.id)}>Detalhes da Playlist</button> 
              <button onClick={() => this.addMusica(playlist.id)}>Adicionar Música</button><br /><br />
               </div>)
        })

        return(

            <div key={playListsMap.id}>
                <h2>Quantidade de Playlists salvas: {playListsMap.length}</h2>
                 <p> {playListsMap} </p>
                 <div>{mostraLista}{mostraDetalhe}</div>
            </div>
        )
    }

}
export default  TelaListaDePlaylists