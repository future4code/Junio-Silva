import React from 'react';
import styled from 'styled-components'
import MainContainer from './componentes/MainContainer'

let Center = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 3rem;

`

function App() {
  return (
    <Center>
      <MainContainer />
    </Center>
  );
}

export default App;
