// export { ActionsTypes} from "../constants/actionsTypes"
import{ActionsTypes} from "../constants/ActionsTypes";
export const setproducts = (products)=>{
    return{
type :ActionsTypes.SET_PRODUCTS,
payload : products,
    };
};
export const selectedproduct = (product)=>{
    return{
type : ActionsTypes.SELECTED_PRODUCTS,
payload : product,
    };
};

export const removeSelectedProduct = () => {
    return {
      type: ActionsTypes.REMOVE_SELECTED_PRODUCT,
    };
  };
  