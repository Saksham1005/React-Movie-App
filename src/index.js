import React from 'react';
import { Provider } from 'react-redux';
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

// export const StoreContext=createContext();
// console.log("Store Context ", StoreContext);

let comment= "we make our Provider component";
// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

comment= "we make our connect function";
// const connectedComponent = connect(callback)(App);
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBeSentAsProps = callback(state);

//         return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
