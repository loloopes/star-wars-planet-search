import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/table';

function App() {
  return (
    <Provider>
      <span>Hello, App!</span>
      <Table />
    </Provider>
  );
}

export default App;
