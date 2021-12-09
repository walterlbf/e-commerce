import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../componentes/CartItem';

function cart({ listCart }) {
  return (
    <>
      <div>
        pagina do carrinho
      </div>
      <ul>
        {listCart ? listCart.map((wine) => (
          <CartItem key={wine.id} wine={wine} />
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
