import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  window.navigator.geolocation.getCurrentPosition(
    // success and failure callback
    (location) => console.log(location),
    (error) => console.log(error)
  )
  return <div> App Setup </div>;
};

ReactDOM.render(
  <App />, document.querySelector('#root')
)
