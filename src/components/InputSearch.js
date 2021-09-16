import React, { useContext } from 'react';
import Context from '../context/Context';

const InputSearch = () => {
  const {
    setFilters,
  } = useContext(Context);

  function handleChange({ target: { value } }) {
    setFilters({ filterByName: value });
  }

  return (
    <input
      type="text"
      onChange={ handleChange }
    />
  );
};

export default InputSearch;
