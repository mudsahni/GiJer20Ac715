import * as React from 'react';
import 'semantic-ui-css/semantic.min.css'

import logo from './logo.svg';
import './App.css';
import { Me } from './page/Me';

function App() {
  return (
    <div className="main-container">
      <Me />
    </div>
  );
}

export default App;
