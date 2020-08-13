import React from 'react';
import spinner from '../spinner.gif';

const Spinner = () => (
  <div>
    <img
      src={spinner}
      style={{ width: 200, margin: 'auto', display: 'block' }}
      alt="loading...."
    />
  </div>
);

export default Spinner;
