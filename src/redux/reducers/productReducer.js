import { ActionsTypes } from "../constants/ActionsTypes"
const initialState = {
    product :[]
}

export const productReducer = (state=initialState, {type, payload})=>{
switch(type){
    case ActionsTypes.SET_PRODUCTS:
    return {...state, product:payload};
    default :
    return state;
}
};

export const selectedProductReducer = (state={}, {type,payload})=>{
    switch(type){
        case ActionsTypes.SELECTED_PRODUCTS:
            return{...state, ...payload};
            case ActionsTypes.REMOVE_SELECTED_PRODUCT:
                return {};
            default: 
            return state;
    }
}
export const removeSelectedProduct = () => {
    return {
      type: ActionsTypes.REMOVE_SELECTED_PRODUCT,
    };
  };