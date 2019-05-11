import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import './App.css';
import Things from './components/Things';
const store = configureStore

const App: React.FC = () => {
  return (
    <Provider  store={store(true)}>
        <Things />
      </Provider>
  );
}

export default App;
