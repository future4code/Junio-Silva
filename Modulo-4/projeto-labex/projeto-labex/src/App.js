import React from 'react';
import styled from 'styled-components'
import Home from './pages/Home'
import GlobalStyles from './Components/GlobalStyles'
import Header from "./Components/Header"
import fundo from "./assets/fundo.jpg"
import TripList from  './pages/TripList';
import ApplicationForm from './pages/ApplicationForm';

const MainContainer = styled.div`
background-image: url(${fundo}) ;
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
width: 100vw;
`



// const GlobalStyle = createGlobalStyle`

// @import url('https://fonts.googleapis.com/css2?family=Coda&family=Mochiy+Pop+P+One&display=swap');

// font-family: 'Mochiy Pop P One';

// *{
// font-family: 'Coda';
// font-size: 20px;
// }`

function App() {
  return (
    <MainContainer>
      <Header />
      <GlobalStyles />
      <ApplicationForm />
      {/* <TripList /> */}
    </MainContainer>
  );
}

export default App;
