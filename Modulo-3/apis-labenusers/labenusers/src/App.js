import React from "react";
import axios from "axios";
import styled from "styled-components";

class App extends React.Component {

  state = {
    inputNome: "",
    inputEmail: "",
    listaDeUsuarios: [],
    paginaCondicional: false
  }

  componentDidMount() {
    this.pegarListaUsuarios()
  }

   mudarStateNome = (event) => {
    this.setState({ inputNome: event.target.value})
  }

   mudarStateEmail = (event) => {
    this.setState({ inputEmail: event.target.value})
  }

   pegarListaUsuarios = () => {

    let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    let header = {
      headers: {
        Authorization: "junio-silva-joy"
      }
    }

    axios.get(URL, header)
    .then((response)=>{this.setState({listaDeUsuarios: response.data}) })  
    .catch((error)=>{alert(error.response.data)}) 
    
    console.log("chamada ok")
  }

   criaUsuario = () =>{
    let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    let body = {
      "name": this.state.inputNome,
      "email": this.state.inputEmail
    }
    let header = {
      headers: {
        Authorization: "junio-silva-joy"
      }
    }

    axios.post(URL, body, header)
    .then((res) => {
      alert("Usuário adicionado com sucesso!")
      this.pegarListaUsuarios()
    })
    .catch((err) => {alert(err.response.data.message)})
  }
    
  render() { 

    const listaUsuariosMapeada = this.state.listaDeUsuarios
    .map((usuario)=>{
      return (
      <div>
        <p>{usuario.name}</p>
      </div>)
    })

    return (

      <div>
        <button>Trocar de tela</button><br />

        <div>
            {listaUsuariosMapeada}

            <input 
            placeholder="Nome" 
            onChange={this.mudarStateNome} 
            value={this.state.inputNome} 
            />

            <input 
            type="email" 
            placeholder="E-mail" 
            value={this.state.inputEmail} 
            onChange={this.mudarStateEmail} 
            />
            <button 
            onClick={this.criaUsuario}
            >Criar Usuário</button>
          </div>
      </div>
    )}
}

export default App;
