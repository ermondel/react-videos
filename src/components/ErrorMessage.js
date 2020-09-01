import React from 'react';

const ErrorMessage = () => (
  <div className='ui segment'>
    <div className='ui message'>
      <div className='header'>Server is not available</div>
      <p>Sorry, the service is currently unavailable. Please come back later.</p>
    </div>
  </div>
);

export default ErrorMessage;
