import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import styles from './Product.module.css';
import { addItemToCart } from '../../redux/actions/index';

function Product({ wine, addItem, listCart }) {
  const addCart = () => {
    addItem(wine);
    console.log(listCart);
    localStorage.setItem('cartList', JSON.stringify([...listCart]));
    console.log('e la vamos nos');
  };

  return (
    <li className={styles.container}>
      <div className={styles.vitrine}>
        <img src={wine.image} alt="" width={178} height={199} />
        <h3>{wine.name}</h3>
      </div>
      <div className={styles.buttonBox}>
        <Link href="/details">
          <button className={styles.buttonStyle} type="button">Adicionar</button>
        </Link>
      </div>
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
