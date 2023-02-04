import { createGlobalStyle } from 'styled-components'



export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
      
    }

    :focus {
        outline: 0;
    }

    body {
       
        //background-color: #C9C9C9;
        -webkit-font-smoothing: antialgit iased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`