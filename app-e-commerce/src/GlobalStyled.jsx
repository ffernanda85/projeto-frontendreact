import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, "Liberation Sans", Roboto, sans-serif;
    }

    body {
        min-height: 100vh;
        max-width: 100vw;
        background-color: rgb(220,220,220);
    }

    #root {
        width: 100%;
        height: 100%;
    }
`