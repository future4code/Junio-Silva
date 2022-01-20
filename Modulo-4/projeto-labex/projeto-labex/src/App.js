import React from 'react';
import Home from './pages/Home'
import createGlobalStyle from 'styled-components'

// const GlobalStyle = createGlobalStyle`
// font-size: 10px;
// `

function App() {
  return (
    <div className="App">
      {/* <GlobalStyle /> */}
      <Home />
    </div>
  );
}

export default App;
