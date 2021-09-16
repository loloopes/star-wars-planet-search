import React, { useState, useEffect } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);

  function fetchPlanets() {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((result) => result.json())
      .then((data) => {
        data.results.forEach((planet) => delete planet.residents);
        setPlanets(data.results);
      });
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  const contextData = {
    planets,
  };

  return (
    <Context.Provider value={ contextData }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
