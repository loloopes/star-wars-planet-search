import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/Context';

function FilterSelect() {
  const { filters,
    setFilters,
    setFilteredPlanets,
    planets,
    filteredPlanets,
  } = useContext(Context);

  const { filterByNumericValues } = filters;

  const options1 = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const options2 = ['maior que', 'menor que', 'igual a'];

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  // function handleChange({ target }) {
  //   setFilters({ ...filters,
  //     filterByNumericValues: [
  //       {
  //         ...filterByNumericValues[filterByNumericValues.length - 1],
  //         [target.name]: target.value,
  //       },
  //     ] });
  // }

  // logica com a ajuda do Guilherme Costa =)
  const removeUsedOptions = () => {
    filterByNumericValues.forEach(({ column: coluna }) => {
      options1.splice(options1.indexOf(coluna), 1);
    });
    return options1;
  };

  // function handleColumnChange = ({target}) => {
  //   setFilters({
  //     ...filters,
  //     filterByNumericValues: [{
  //       ...filterByNumericValues,
  //       column: target.value,
  //     }]
  //   })
  // }

  const addFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filterByNumericValues, { column, comparison, value }],
    });
  };

  // function filterPlanets() {
  //   // const { value } = filterByNumericValues[filterByNumericValues.length - 1];
  //   switch (filterByNumericValues[filterByNumericValues.length - 1].comparison) {
  //   case 'maior que':
  //     return setFilteredPlanets(planets
  //       .filter((planet) => Number(planet[filterByNumericValues[filterByNumericValues.length - 1].column])
  //       > Number(filterByNumericValues[filterByNumericValues.length - 1].value)));
  //   case 'menor que':
  //     return setFilteredPlanets(planets
  //       .filter((planet) => Number(planet[filterByNumericValues[filterByNumericValues.length - 1].column])
  //       < Number(filterByNumericValues[filterByNumericValues.length - 1].value)));
  //   case 'igual a':
  //     return setFilteredPlanets(planets
  //       .filter((planet) => Number(planet[filterByNumericValues[filterByNumericValues.length - 1].column])
  //       === Number(filterByNumericValues[filterByNumericValues.length - 1].value)));
  //   default:
  //     return filteredPlanets;
  //   }
  // }

  // {
  //   if (!filterByNumericValues) {
  //     return planets;
  //   } switch (filterByNumericValues[filterByNumericValues.length -1].comparison) {
  //     case:
  //     default:
  //       return planets,
  //   }
  // };
  // logica desenvolvida com ajuda do Felipe Ventorim
  useEffect(() => {
    console.log('test');
    setFilteredPlanets(
      !filterByNumericValues.length
        ? filteredPlanets
        : filterByNumericValues
          .reduce((acc, { column: coluna, comparison: compa, value: valor }) => (
            acc.filter((planet) => {
              switch (compa) {
              case 'maior que':
                return Number(planet[coluna]) > Number(valor);
              case 'menor que':
                return Number(planet[coluna]) < Number(valor);
              case 'igual a':
                return Number(planet[coluna]) === Number(valor);
              default:
                return false;
              }
            })
          ), planets),
    );
  }, [filterByNumericValues]);

  return (
    <>
      <select
        name="column"
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
      >
        {removeUsedOptions()
          .map((option) => <option key={ option } value={ option }>{option}</option>)}
      </select>
      <select
        name="comparison"
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        {options2.map((option) => <option key={ option }>{option}</option>)}
      </select>
      <input
        onChange={ ({ target }) => setValue(target.value) }
        type="number"
        data-testid="value-filter"
        name="value"
      />
      <button
        onClick={ () => {
          addFilter();
          removeUsedOptions();
        } }
        type="button"
        data-testid="button-filter"
      >
        OnOffFilter
      </button>
    </>
  );
}

export default FilterSelect;
