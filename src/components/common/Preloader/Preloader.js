import React from 'react';
import loader from '../../../assets/images/loader.gif';

let Preloader = () => {
  return (
    <div>
      <img src={loader} alt="loading" />
    </div>
  )
}

export default Preloader;
