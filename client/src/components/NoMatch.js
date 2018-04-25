import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>
        Oops, that path does not exist yet.  Click to go back: 
        <Link to='/'> Home</Link>
      </Header>
    );
  }
}

export default NoMatch;
