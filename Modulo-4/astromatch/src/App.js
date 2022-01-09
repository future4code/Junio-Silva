import React from 'react';
import styled from 'styled-components'
import MainScreen from './componentes/MainScreen'

let Center = styled.div`
display: flex;
justify-content: center;
align-items: center;  
margin-top: 2em;
`

function App() {
  return (
    <Center>
      <MainScreen />
    </Center>
  );
}

export default App;
