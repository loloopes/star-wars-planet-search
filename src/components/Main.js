import React, { useContext, useEffect } from 'react';
import Table from './Table';
import InputSearch from './InputSearch';
import Context from '../context/Context';
import FilterSelect from './FilterSelect';

function Main() {
  const { planets, filters, setFilteredPlanets } = useContext(Context);

  useEffect(() => {
    setFilteredPlanets(planets
      .filter((planet) => planet.name.includes(filters.filterByName.name)));
  }, [filters.filterByName.name, planets, setFilteredPlanets]);

  return (
    <>
      <InputSearch />
      <FilterSelect />
      <Table />
    </>
  );
}

export default Main;
