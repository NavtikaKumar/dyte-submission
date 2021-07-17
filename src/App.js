import React from 'react';
import logo from './logo.svg';
import './App.css';

import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer>
      <MDBRow className='mb-3'>
        <MDBCol size='4' className='col-example'>
          col="4"
        </MDBCol>
        <MDBCol size='4' className='col-example'>
          col="4"
        </MDBCol>
        <MDBCol size='4' className='col-example'>
          col="4"
        </MDBCol>
      </MDBRow>
</MDBContainer>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );

}

export default App;
