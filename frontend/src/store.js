 import { createStore, combineReducers, applyMiddleware } from 'redux';
 import thunk from 'react-thunk';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import { productListReducer } from './reducers/productReducers';

 const reducer = combineReducers({
     productList: productListReducer,
 });

 const initialState = {};

 const middleware = [];

 const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); 

 export default store; 