  
import * as actionTypes from '../constants/productConstants';


export const getProductReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getProductDetailsReducer = (state = { product : {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return{ product: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return { error: action.payload }
        default:
            return state    
    }
}