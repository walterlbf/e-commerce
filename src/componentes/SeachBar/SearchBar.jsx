import React from 'react';
import { connect } from 'react-redux';
import { searchItem } from '../../redux/actions/index';

const SearchBar = ({ listStore, attStore }) => {
  const handleChange = ({ target: { value } }) => {
    const newDisplay = listStore.filter(((wine) => {
      if (value === '') {
        return wine;
      } if (wine.name.toLowerCase().includes(value.toLocaleLowerCase())) {
        return wine;
      }
    }));
    attStore(newDisplay);

    if (value === '') {
      attStore([]);
    }
  };

  return (
    <form>
      <label htmlFor="buscar">
        <input type="text" name="" id="" onChange={handleChange} />
      </label>
    </form>
  );
};

const mapStateToProps = (state) => ({
  listStore: state.cartList.currStore,
});

const mapDispatchtoProps = (dispatch) => ({
  attStore: (items) => dispatch(searchItem(items)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(SearchBar);
