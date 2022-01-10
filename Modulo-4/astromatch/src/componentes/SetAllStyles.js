import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
    box-sizing: border-box;
}


p{
    opacity: 0.7;
    line-height: 1.5;
    font-size: 20px;
}

img{
    max-width:100%
}
`

export default GlobalStyles