import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import root_reducer from './reducers';

// Writing a middleware
// function logger(obj, next, action) 
// logger(obj)(next)(action)

// const logger=function({dispatch, getState}){
//   return function(next){
//     return function(action){
//       // middleware code
//       console.log("Action Type "+action.type);
//       next(action);
//     }
//   }
// }
const logger=({dispatch, getState})=>(next)=>(action)=>{
  if(typeof action !== 'function')
      console.log("Action Type "+action.type);
      next(action);
}

// const thunk = store => next => action => {
//   if (typeof action === 'function') {
//     return action(store.dispatch);
//   }

//   next(action);
// };

const store=createStore(root_reducer, applyMiddleware(logger,thunk));
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
