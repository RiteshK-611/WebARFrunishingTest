import { createStore, applyMiddleware, combineReducers  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductReducer, getProductDetailsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer, 

})

const middleware = [thunk];

// console.log("Middleware: ", middleware)

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;