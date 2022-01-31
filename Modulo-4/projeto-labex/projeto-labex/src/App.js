
import styled from 'styled-components'
import Home from './pages/Home'
import GlobalStyles from './components/GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "./components/Header"
import fundo from "./assets/fundo.jpg"
import ApplicationForm from './pages/ApplicationForm'
import CreateTrip from './pages/CreateTrip'
import LoginPage from './pages/LoginPage'
import TripDetails from './pages/TripDetails'
import TripList from './pages/TripList';
import AdminHome from './pages/AdminHome';
import ErrorPage from './pages/ErrorPage';
import { ChakraProvider } from '@chakra-ui/react'

const MainContainer = styled.div`
background-image: url(${fundo}) ;
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
width: 100vw;
`


function App() {
  
  return (
    <ChakraProvider>
    <MainContainer>
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>

          <Route exact path={"/triplist"}>
            <TripList />
          </Route>

          <Route exact path={"/triplist"}>
            <TripList />
          </Route>

          <Route exact path={"/admin"}>
            <AdminHome />
          </Route>
          
          <Route exact path={"/applicationform/:id/:name"}>
            <ApplicationForm />
          </Route>

          <Route exact path={"/createtrip"}>
            <CreateTrip />
          </Route>

          <Route exact path={"/loginpage"}>
            <LoginPage />
          </Route>

          <Route exact path={"/tripdetails/:id"} >
            <TripDetails/>
          </Route>

          <Route>
            <ErrorPage />
          </Route>

        </Switch>
      </BrowserRouter>
    </MainContainer>
    </ChakraProvider>

  );
}

export default App;
