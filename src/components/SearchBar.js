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
        <div className='field'>
          <label>Video Search</label>
          <input
            type='text'
            onChange={(event) => setTerm(event.target.value)}
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
