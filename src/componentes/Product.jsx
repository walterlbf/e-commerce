import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../redux/actions';

const Product = function ({ wine, addItem, listCart }) {
  const addCart = () => {
    addItem(wine);
    console.log(listCart);
    localStorage.setItem('cartList', JSON.stringify([...listCart]));
    console.log('e la vamos nos');
  };

  return (
    <li>
      <img src={wine.image} alt="" style={{ width: 198.57 }} />
      <h3>{wine.name}</h3>
      <button type="button" onClick={addCart}>Adicionar</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

const mapStateToProps = (state) => ({
  listCart: state.cartList.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
