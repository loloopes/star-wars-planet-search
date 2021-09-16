import React, { useContext } from 'react';
import Context from '../context/Context';

const InputSearch = () => {
  const {
    filters,
    setFilters,
  } = useContext(Context);

  function handleChange({ target: { value } }) {
    setFilters({ ...filters, filterByName: { name: value } });
  }

  return (
    <input
      type="text"
      onChange={ handleChange }
      data-testid="name-filter"
    />
  );
};

export default InputSearch;
