import React from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';
import Link from 'next/link';
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
      <div>
        <img src={wine.image} alt="" width={198} height={178} />
        <h3>{wine.name}</h3>
      </div>
      <Link href="/details">
        <button type="button">Adicionar</button>
      </Link>
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
