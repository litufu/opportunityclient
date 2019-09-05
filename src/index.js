import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider} from '@apollo/react-hooks';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import App from './pages';
import * as serviceWorker from './serviceWorker';


const cache = new InMemoryCache();
const httpLink = new HttpLink({ uri: 'http://localhost:7000/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache,
  connectToDevTools: true,
})


ReactDOM.render(
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>,
    document.getElementById('root'),
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
