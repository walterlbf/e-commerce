import React from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/actions/index';

function Product({ wine, addItem, listCart }) {
  const addCart = () => {
    addItem(wine);
    console.log(listCart);
    localStorage.setItem('cartList', JSON.stringify([...listCart]));
    console.log('e la vamos nos');
  };

  return (
    <li>
      <Image src={wine.image} alt="" width={198} height={178} />
      <h3>{wine.name}</h3>
      <button type="button" onClick={addCart}>Adicionar</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

const mapStateToProps = (state) => ({
  listCart: state.cartList.list,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
