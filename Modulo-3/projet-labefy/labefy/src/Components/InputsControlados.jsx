import React from 'react';

class InputsControlados extends React.Component {
    render(){
        return(

        <div>
          <h3>Adicionar Musica à Playlist:</h3><h2> {this.props.addMusica}</h2>
  
          <label>Nome da Musica</label><br />
          <input value={this.props.nomeMusica} onChange={this.props.mudaMusicaInput } /><br /><br />
  
          <label>Nome do artista</label><br />
          <input value={this.props.nomeArtista} onChange={this.props.mudaArtistaInput} /><br /><br />
          <label>Link da Música</label><br />
          <input value={this.props.urlMusica} onChange={this.props.mudaUrlInput} /><br />
          <button onClick={this.props.AdicionaMusica}>Adicionar</button>
        </div>
        )
    }
}

export default InputsControlados