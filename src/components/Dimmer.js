import React from 'react';

const Dimmer = () => (
  <div className='ui container'>
    <div className='ui active transition visible dimmer'>
      <div className='content'>
        <div className='ui indeterminate text loader'>
          Request to a remote server. Please wait a few seconds.
        </div>
      </div>
    </div>
    <img
      src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png'
      className='ui image'
      alt='dimmer'
    />
  </div>
);

export default Dimmer;
