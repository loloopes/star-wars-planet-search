import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function Table() {
  const { planets, filteredPlanets, filters, setFilteredPlanets } = useContext(Context);

  const colHead = planets.length > 0
  && Object.keys(planets[0]).map((column, index) => <th key={ index }>{column}</th>);

  useEffect(() => {
    setFilteredPlanets(planets
      .filter((planet) => planet.name.includes(filters.filterByName.name)));
  }, [filters.filterByName.name, planets, setFilteredPlanets]);

  return (
    <table>
      <thead>
        <tr>{colHead}</tr>
      </thead>
      <tbody>
        { filteredPlanets.map(((planet, index) => (
          <tr key={ index }>
            {Object.values(planet).map((info) => (
              <td key={ info }>
                {info}
              </td>
            ))}
          </tr>))) }
      </tbody>
    </table>
  );
}

export default Table;
