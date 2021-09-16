import React, { useContext } from 'react';
import Context from '../context/Context';

function Table() {
  const { planets } = useContext(Context);

  const colHead = planets.length > 0
  && Object.keys(planets[0]).map((column, index) => <th key={ index }>{column}</th>);

  return (
    <table>
      <thead>
        <tr>{colHead}</tr>
      </thead>
      <tbody>
        { planets.map(((planet, index) => (
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
