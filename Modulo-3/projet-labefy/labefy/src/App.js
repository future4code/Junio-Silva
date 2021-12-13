import React from 'react';
import './App.css';
import TelaCriarPlaylists from './components/TelaCriarPlayLists';
import TelaListaDePlaylists from './components/TelaListaDePlaylists';

class App extends React.Component {
  state  = {
    mostraPlaylists: false
  }

    mudaCondicionalDeLista =  () => {
    this.state.mostraPlaylists ? this.setState({mostraPlaylists: false}) : this.setState({mostraPlaylists: true})
    }

  render(){

    let mostraLista = <h1>Página de erro</h1> 
    if(this.state.mostraPlaylists){
      mostraLista = <TelaListaDePlaylists />
    }else{
      mostraLista= ""
    }

    return (
      <div>
        <TelaCriarPlaylists />
        <br/><hr />
        <br/><button onClick={this.mudaCondicionalDeLista}>Mostrar/Esconder Playlists</button>
        {mostraLista}
      </div>
    
  );
  }
}

export default App;
