import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

import './index.css';
import App from './components/App';
import root_reducer from './reducers';

const store=createStore(root_reducer);
console.log(store);

// console.log("Before State",store.getState());
// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:"Superman"}]
// })
// console.log("After State",store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
