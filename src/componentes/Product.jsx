import React from 'react';

export default function Product({ wine }) {
  console.log(wine);
  return (
    <li>
      <img src={wine.image} alt="" style={{ width: 198 }} />
      <h3>{wine.name}</h3>
      <button>Adicionar</button>
    </li>
  );
}
