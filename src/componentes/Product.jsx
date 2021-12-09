import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../redux/actions';

const Product = function ({ wine, addItem }) {
  console.log(wine);
  return (
    <li>
      <img src={wine.image} alt="" style={{ width: 198.57 }} />
      <h3>{wine.name}</h3>
      <button onClick={() => addItem(wine)}>Adicionar</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(Product);
