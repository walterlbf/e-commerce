import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../componentes/CartItem/CartItem';

function cart({ listCart }) {
  // const localCart = localStorage.getItem('cartList');
  // console.log(localCart);
  return (
    <>
      <div>
        pagina do carrinho
      </div>
      <ul>
        {listCart ? listCart.map((wine, index) => (
          <CartItem key={wine.id} wine={wine} index={index} />
        ))
          : <h1>carregando carrinho</h1>}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  listCart: state.cartList.list,
});

export default connect(mapStateToProps)(cart);
