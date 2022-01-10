import React from 'react';
import styled from 'styled-components'
import MainScreen from './componentes/MainScreen'
import SetAll from "./componentes/SetAllStyles"

let Center = styled.div`
display: flex;
justify-content: center;
align-items: center;  
margin-top: 2em;
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
