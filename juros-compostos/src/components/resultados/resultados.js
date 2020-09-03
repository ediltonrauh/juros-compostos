import React from 'react';

function Resultados({results}) {
  return (
    <div>
      <ul>
        {results.map((row, i) => (
          <li key={i}>
            <strong>{row.month}</strong>
            <p>R${row.totalAmount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resultados;
