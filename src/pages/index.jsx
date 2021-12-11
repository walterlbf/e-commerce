import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../componentes/Product';
import { fetchCurr } from '../redux/actions';

function home(props) {
  const { fetchApi, listStore } = props;

  useEffect(() => {
    fetchApi();
  }, []);

  const renderCards = () => {
    const NUMBER = 9;
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
      <ul>
        {listStore ? renderCards() : <h1>carregando loja</h1>}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  listStore: state.cartList.currStore,
});

const mapDispatchtoProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchCurr()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(home);
