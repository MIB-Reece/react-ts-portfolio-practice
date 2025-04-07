import * as React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';
import { ThemeProvider, CssBaseline } from '@mui/material';
import GlobalStyles from './GlobalStyles';
import { makeStyles } from '@mui/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from './theme';
import Home from './components/Home';

const useStyles = makeStyles((theme) => {
  root: {
    // some CSS that access to theme
  }
});

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Reece Onyeani'
    };
  }

  render() {
    return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline /><GlobalStyles />
        <Navbar name={this.state.name} />
        <Home />
      </ThemeProvider>
      </BrowserRouter>
    );
  }
}


render(<App />, document.getElementById('root'));
