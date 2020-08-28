import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

export default function loading(){
  return (
    <div className="loading">
      <h4>room data is loading... </h4>
      <img src={loadingGif} alt="page is loading" />
    </div>
  )
}
