import React, { useState } from 'react';
import { connect } from 'react-redux';

const SearchBar = function ({ listStore }) {
  const [input, setInput] = useState('');

  // console.log(listStore);
  const handleChange = ({ target: { value } }) => {
    setInput(value);

    const newDisplay = listStore.filter(((item) => {
      if (input === '') {
        return item;
      } if (item.name.toLowerCase().includes(input.toLocaleLowerCase())) {
        return item;
      }
    }));

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

});

export default connect(mapStateToProps, mapDispatchtoProps)(SearchBar);
