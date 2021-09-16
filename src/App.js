import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import InputSearch from './components/InputSearch';

function App() {
  return (
    <Provider>
      <span>Hello, App!</span>
      <Table />
      <InputSearch />
    </Provider>
  );
}

export default App;
