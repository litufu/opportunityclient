import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Container from '@material-ui/core/Container';
import Main from './Main'
import Company from './Company'
import BackStage from './BackStage'




export default function App() {

  function IsLoggedIn() {
    return (<Router primary={false} component={Fragment}>
      <Main path="/" />
      <Company path="company/:symbol" />
      <BackStage path="backStage" />
    </Router>);
  }

  return (
    <Fragment>
      <Container>
        <IsLoggedIn />
      </Container>
    </Fragment>
  );
}