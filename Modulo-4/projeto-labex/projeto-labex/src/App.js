import React from 'react';
import styled from 'styled-components'
import Home from './pages/Home'
import GlobalStyles from './Components/GlobalStyles'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./Components/Header"
import fundo from "./assets/fundo.jpg"
import ApplicationForm from './pages/ApplicationForm' 
import CreateTrip from './pages/CreateTrip'  
import LoginPage from './pages/LoginPage' 
import TripDetails from './pages/TripDetails' 
import TripList from  './pages/TripList';
import AdminHome from './pages/AdminHome';
import ErrorPage from './pages/ErrorPage';

const MainContainer = styled.div`
background-image: url(${fundo}) ;
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
width: 100vw;
`


function App() {
  return (
    <BrowserRouter>
      <MainContainer>
      <GlobalStyles />
      <Header />
        <Switch>
          
          <Route exact path={"/"}>
            <Home  />
          </Route>

          <Route>
            <TripList exact path={"/triplist"} />
          </Route>

          <Route>
            <ErrorPage />
          </Route>

          <Route>
            <AdminHome exact path={"/adminhome"} />
          </Route>
        
        </Switch>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
