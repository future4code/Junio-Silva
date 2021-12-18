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
          console.log(err.message)
        })
      }

    addMusica = (id) => {
      this.state.mostraLista 
      ? this.setState({mostraLista:false})
      : this.setState({mostraLista:true})
      this.setState({idPlaylist:id})
      console.log(this.state.mostraLista)
    }
    detalhesDaPlay = (id) => {

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
        
        console.log(typeof res.data.result.tracks)
        // this.setState({infoplaylist:res.data.result.tracks})
          console.log("Stateinforplaylist:", this.state.infoplaylist, "typeof:", typeof this.state.infoplaylist)
      })
      .catch((err) => {
        console.log(err.message)
      })
    }

    render() {this.state.infoplaylist
        
    let mostraLista = <h1>Página de erro</h1> 
    if(this.state.mostraLista){
      mostraLista = <AdicionaMusica idPlaylist = {this.state.idPlaylist} />
    }else{
      mostraLista= ""
    }
    let mostraDetalhe = <h1>Página de erro</h1> 
    if(this.state.mostraDetalhe){
      mostraDetalhe = <DetalhesPlay stateDetalhes={this.state.infoplaylist} />
      // passar o estado por props para renderizar dentro do componente

    }else{
      mostraDetalhe= <p>nada para mostrar</p>
    }

        let playListsMap = this.props.playlists.map((playlist)=>{
            return <p> <strong> Nome:</strong> {playlist.name} <br /> <button onClick={() => this.deletePlay(playlist.id)}>Deletar</button> 
              <button onClick={() => this.getPlaylistinfo(playlist.id)}>Detalhes da Playlist</button> 
              <button onClick={() => this.addMusica(playlist.id)}>Adicionar Música</button>
             
               </p>
        })

        return(

            <div key={playListsMap.id}>
                <h2>Quantidade de playlists: {playListsMap.length}</h2>
                 <p> {playListsMap} </p>
                 <div>{mostraLista}{mostraDetalhe}</div>
            </div>
        )
    }

}
export default  TelaListaDePlaylists