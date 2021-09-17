import React, { useContext } from 'react';
import Context from '../context/Context';

function FilterSelect() {
  const { filters,
    setFilters,
    setFilteredPlanets,
    filteredPlanets } = useContext(Context);

  function handleChange({ target }) {
    setFilters({ ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          [target.name]: target.value,
        },
      ] });
  }

  function filterClick() {
    const { value } = filters.filterByNumericValues[0];

    switch (filters.filterByNumericValues[0].comparison) {
    case 'maior que':
      return setFilteredPlanets(filteredPlanets
        .filter((planet) => Number(planet[filters.filterByNumericValues[0].column])
        > Number(value)));
    case 'menor que':
      return setFilteredPlanets(filteredPlanets
        .filter((planet) => Number(planet[filters.filterByNumericValues[0].column])
        < Number(value)));
    case 'igual a':
      return setFilteredPlanets(filteredPlanets
        .filter((planet) => Number(planet[filters.filterByNumericValues[0].column])
        === Number(value)));
    default:
      return filteredPlanets;
    }
  }

  return (
    <>
      <select name="column" onChange={ handleChange } data-testid="column-filter">
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select name="comparison" onChange={ handleChange } data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        onChange={ handleChange }
        type="number"
        data-testid="value-filter"
        name="value"
      />
      <button
        onClick={ filterClick }
        type="button"
        data-testid="button-filter"
      >
        OnOffFilter
      </button>
    </>
  );
}

export default FilterSelect;
