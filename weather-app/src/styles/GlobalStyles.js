import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #e0f7fa;
        color: #333;
    }

    #root {
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }
`;

export default GlobalStyles;