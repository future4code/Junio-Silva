import React from 'react';
import styled from 'styled-components'
import MainScreen from './componentes/MainScreen'
import SetAll from "./componentes/SetAllStyles"

let Center = styled.div`
display: flex;
height: 100vh;
justify-content: center;
/* align-items: center;  */
/* margin-top: 2em; */
background-color:rgba(128, 128, 128, 0.3);
padding-top: 5em

`

function App() {
  return (
    <Center>
      <SetAll />
      <MainScreen />
    </Center>
    );
}

export default App;
