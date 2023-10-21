import React from 'react'
import {Heart,Currency,Plus} from 'lucide-react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import {toast} from 'react-hot-toast'
import {DollarSign} from 'lucide-react'

const Product = ({product}) => {
  const dispatch = useDispatch()

  const addToCartHandler = (product) =>{
    dispatch(addToCart(product));
    toast.success(`${product.title} is added to cart`)
  } 

  return (
    <div className='p-5 transition-all duration-100 hover:scale-105 cursor-pointer'>
        <div className='bg-[#f9f9f9]  max-w-[250px] rounded-xl py-4 p-4 relative'>
          <img className='w-full h-[180px]  bg-slate-50 object-contain' src={product.image} alt="singleimg" />
          <Heart className='bg-white w-7 h-7 p-1 rounded-full absolute top-3 right-4'/>
        </div>

        <div className='flex justify-between pt-2 max-w-[250px]'>
             <p className='text-md font-bold'>{product.title}</p>
             <p className='text-base font-bold flex items-center'>
              <DollarSign size={14} strokeWidth={1.25} />
              {product.price}
              </p>
        </div>

        <div className='flex flex-col gap-2 pt-2 mb-2'>
            <p className='text-base font-medium'>{(product.description.substring(0,30)+ "...")}</p>
              <Rating rating={product.rating.rate} count={product.rating.count}/>

           <div className='flex items-cener gap-2'>
           <Link to={`product/${product.id}`}>
             <button 
                className='w-[100px] text-black text-sm py-2 mt-2 px-3 border-2 border-gray-600 rounded-full bg-white border font-bold hover:bg-green-900 hover:text-white  transition duration-75'>
                View
             </button>
             </Link>
             
             <button 
                onClick={()=>addToCartHandler(product)} 
                className='hidden md:block w-[100px] md:w-[120px] text-white text-sm py-2 mt-2  rounded-3xl bg-orange-600 border font-bold hover:bg-orange-500 hover:text-black  transition duration-75'>
                Add to Cart
             </button>
             <Plus 
               onClick={()=>addToCartHandler(product)} 
             className="md:hidden mt-4 w-8 h-8 text-base bg-orange-500 rounded-full text-white font-bolde" size={20}/>
           </div>
             
        </div>
         
    </div>
  )
}

export default Product
