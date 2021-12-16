import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../redux/actions';

const CartItem = function ({
  wine, toDelete, listCart, index,
}) {
  console.log(listCart);

  const removeItem = () => {
    localStorage.setItem('cartList');
  };

  return (
    <li>
      <img src={wine.image} alt="" style={{ width: 198.57 }} />
      <h3>{wine.name}</h3>
      <button type="button" onClick={() => toDelete(wine.id)}>Remover</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toDelete: (id) => dispatch(deleteItem(id)),
});

const mapStateToProps = (state) => ({
  listCart: state.cartList.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
