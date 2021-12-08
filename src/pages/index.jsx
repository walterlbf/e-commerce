import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCurr } from '../redux/actions';

function home(props) {
  const { fetchApi, listCart, listStore } = props;
  const [wines, setWines] = useState([]);

  useEffect(() => {
    fetchApi();
    setWines(listStore);
  }, []);

  console.log(wines);

  return (
    <div>
      <h1>Loja</h1>
      {/* {wines.map(() => {
        {}
      })} */}
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
