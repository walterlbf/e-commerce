import { connect } from 'react-redux';

const Found = function ({ searchBar }) {
  return (
    searchBar.length === 0 ? null : (
      <p>
        <h3>{searchBar.length}</h3>
        produtos encontrados
      </p>
    )
  );
};

const mapStateToProps = (state) => ({
  searchBar: state.cartList.searchResult,
});

export default connect(mapStateToProps)(Found);
