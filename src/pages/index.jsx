import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../componentes/Product';
import { fetchCurr } from '../redux/actions';

function home(props) {
  const { fetchApi, listCart, listStore } = props;

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <h1>Loja</h1>
      <ul>
        {listStore ? listStore.map((wine) => (
          <Product key={wine.id} wine={wine} />
        ))
          : <h1>carregando loja</h1>}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  listStore: state.cartList.currStore,
  listCart: state.cartList.list,
});

const mapDispatchtoProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchCurr()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(home);
