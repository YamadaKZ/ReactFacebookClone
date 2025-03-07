import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);



// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'


// createRoot(document.getElementById('root')).render(
//   <App />
// )
