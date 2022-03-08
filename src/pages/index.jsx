import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Found from '../componentes/Found/Found';
import Product from '../componentes/Product/Product';
import { fetchCurr } from '../redux/actions';
import styles from './Index.module.css';

function home(props) {
  const { fetchApi, listStore, searchBar } = props;

  useEffect(() => {
    fetchApi();
    // localStorage.setItem('cartList', JSON.stringify([]));
  }, []);

  const renderCards = () => {
    const NUMBER = 9;

    if (searchBar.length > 0) {
      return searchBar.map((wine, index) => {
        if (index < NUMBER) {
          return (<Product key={wine.id} wine={wine} />);
        }
        return null;
      });
    }
    return listStore.map((wine, index) => {
      if (index < NUMBER) {
        return (<Product key={wine.id} wine={wine} />);
      }
      return null;
    });
  };

  return (
    <div>
      <h1>Loja</h1>
      <Found />
      <ul className={styles.container}>
        {listStore ? renderCards() : <h1>carregando loja</h1>}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  listStore: state.cartList.currStore,
  searchBar: state.cartList.searchResult,
});

const mapDispatchtoProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchCurr()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(home);
