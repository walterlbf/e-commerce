import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCurr } from '../redux/actions';

function home(props) {
  const { fetchApi, listCart, listStore } = props;

  useEffect(() => {
    fetchApi();
  }, []);

  // while (listStore.length === 0) {
  //   return (
  //     <h1>carregando loja</h1>
  //   );
  // }

  return (
    <div>
      <h1>Loja</h1>
      {listStore ? listStore.map((wine) => (
        <ul>
          <li>{wine.name}</li>
        </ul>
      ))
        : <h1>carregando loja</h1>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  listStore: state.storeList.currStore,
  listCart: state.cartList.list,
});

const mapDispatchtoProps = (dispatch) => ({
  fetchApi: () => dispatch(fetchCurr()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(home);
