import * as React from 'react';
import 'semantic-ui-css/semantic.min.css'

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './page/Home';
import { Me } from './page/Me';

function App() {
  return (
    <Router>
      <div className="main-container">
        <main>
          <Route path='/' component={Home} exact />
          <Route path='/me' component={Me} exact />

        </main>
      </div>
    </Router>
  );
}

export default App;
