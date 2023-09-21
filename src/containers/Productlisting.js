import React, {useEffect} from 'react'
import ProductComponent from './ProductComponent'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setproducts } from '../redux/actions/productAction'
const Productlisting = () => {
  const products = useSelector((state)=> state);
  const dispatch = useDispatch();
  const fetchProducts = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
      console.log("Err", err);
    });
    dispatch(setproducts(response.data));
  };
  useEffect(()=>{
    fetchProducts()
  },[])
  console.log("products :", products)
  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  )
}
export default Productlisting;
