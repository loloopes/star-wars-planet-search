import React, {useContext} from 'react';
import Table from './Table';
import InputSearch from './InputSearch';
import Context from '../context/Context';

function Main() {
  const { planets, filters, setFilteredPlanets } = useContext(Context);

  return (
    <>
      <InputSearch />
      <Table />
    </>
  );
}

export default Main;
