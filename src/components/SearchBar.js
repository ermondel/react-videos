import React, { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={onSubmit}>
        <div className='ui fluid action input'>
          <input
            type='text'
            placeholder='Video search'
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <button className='ui blue button'>Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
