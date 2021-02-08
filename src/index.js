import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Comic Sans MS',
  },
  palette: {
    primary: {
      main: '#757de8',
      contrastText: '#fff',
    },
    secondary: {
      main: '#512da8',
      contrastText: '#fff',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#f5f5f5',
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
