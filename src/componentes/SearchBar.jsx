import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchItem } from '../redux/actions';

const SearchBar = function ({ listStore, attStore }) {
  const [input, setInput] = useState('');

  const handleChange = ({ target: { value } }) => {
    setInput(value);

    console.log(listStore);
    const newDisplay = listStore.filter(((item) => {
      if (input === '') {
        return item;
      } if (item.name.toLowerCase().includes(input.toLocaleLowerCase())) {
        return item;
      }
    }));
    attStore(newDisplay);
    console.log(newDisplay);
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
