import React from 'react';
import ReactDOM from 'react-dom';

const placeHolder = (
  <div>
    <h1 className='static_home'> Welcome to kokoveli </h1>
    <br />
    <h2 className='static_home2'> This Is Still In The Development Stage </h2>
    <h2 className='static_home2'> Please Check Back Soon </h2>
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(placeHolder, root);
});