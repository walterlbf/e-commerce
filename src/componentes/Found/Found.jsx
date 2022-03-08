import React from 'react';
import { connect } from 'react-redux';

function Found({ searchBar }) {
  return (
    searchBar.length === 0 ? null : (
      <p>
        <h3>{searchBar.length}</h3>
        produtos encontrados
      </p>
    )
  );
}

const mapStateToProps = (state) => ({
  searchBar: state.cartList.searchResult,
});

export default connect(mapStateToProps)(Found);
