import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
    box-sizing: border-box;
    scrollbar-width: thin;
  scrollbar-color: blue orange;
}



p{
    opacity: 0.8;
    line-height: 1.5;
    font-size: 20px;
}

img{
    max-width:100%
}
`

export default GlobalStyles