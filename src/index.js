import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css'

import UserState from './context/user/UserState'

ReactDOM.render(
  <UserState>
    <App />
  </UserState>,
  document.getElementById('root')
);
