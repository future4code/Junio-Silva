import React from 'react';
import './App.css';
import TelaCriarPlaylists from './Components/TelaCriarPlayLists';
import TelaListaDePlaylists from './Components/TelaListaDePlaylists';

class App extends React.Component {
  status  = {
    mostraPlaylists: true
  }
//FALTA FAZER A RENDERIZAÇÃO CONDICIONAL AQUI!
  // mudaCondicionalDeLista =  () => {
  //   if(this.state.mostraPlaylists === true) 
  // }

  render(){
    return (
      <div>
        <TelaCriarPlaylists />
        <br/><hr />
        <br/><button>Mostrar Playlist</button>
        <TelaListaDePlaylists  />
      </div>
    
  );
  }
}

export default App;
