import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [options1, setOptions1] = useState(filters.options1);

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
    filters,
    setFilters,
    filteredPlanets,
    setFilteredPlanets,
    options1,
    setOptions1,
  };

  return (
    <Context.Provider value={ contextData }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: propTypes.node.isRequired,
};

export default Provider;
