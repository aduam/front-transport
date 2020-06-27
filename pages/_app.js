import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import 'react-notifications/lib/notifications.css';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #fafafa;
    color: rgba(38,38,38, 0.7);
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    color: rgba(38,38,38, 0.7);
  }
  input {
    border: none;
    background-color: transparent;
    outline: none;
    font-family: 'Lato', sans-serif;
    color: rgba(38,38,38, 0.7);
    &:hover, &:active, &:active, &:focus {
      border: none;
      outline: none;
    }
  }
  button {
    border: none;
    background-color: transparent;
    outline: none;
    font-family: 'Lato', sans-serif;
    color: rgba(38,38,38, 0.7);
    &:hover, &:active, &:active, &:focus {
      border: none;
      outline: none;
    }
  }
  a {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    cursor: pointer;
    color: rgba(38,38,38, 0.7);
  }
`;

const MyApp = (props) => {
  const { Component, pageProps, router } = props
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component { ...pageProps } router={ router } />
    </ThemeProvider>
  );
}

export default MyApp;
