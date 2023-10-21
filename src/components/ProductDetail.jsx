import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Currency,Truck,FileCheck, DollarSign} from 'lucide-react'
import Rating from './Rating'


const ProductDetail = () => {
  const {id} = useParams()


  const [product, setProduct] = useState({})
   
  useEffect(() => {
      const fecthSingleProduct = async () =>{

          try {
              const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
              setProduct(res.data)
          } catch (error) {
              console.log(error)
          }

      }
      fecthSingleProduct()
  }, [id])



  return (
    <div>
  
      <div className='flex justify-between  px-10 py-4 gap-5 flex-col md:flex-row'>
            
           <div>
              <span className='pl-3 ml-5 pt-3 mb-3'>Electronics / Audio / Headphones / Shop Headphone by type / <span className='font-extrabold'>{product.category}</span></span>
              <div className='flex flex-col gap-6 items-center py-4'>
                   <div className='bg-[#f9f9f9] w-[500px] rounded-xl flex items-center justify-center p-6'>
                    <img className='w-[500px] h-[500px] mb-2 object-contain rounded-xl' src={product.image} alt="singlepic" />
                   </div>
                  
                  <div className='flex flex-row justify-between h-24 gap-6'>
                   <img src={product.image} alt="singlepic" className='w-28 h-28 bg-[#f9f9f9] p-3 rounded-md' />
                   <img src={product.image} alt="singlepic" className='w-28 h-28 bg-[#f9f9f9] p-3 rounded-md' />
                   <img src={product.image} alt="singlepic" className='w-28 h-28 bg-[#f9f9f9] p-3 rounded-md' />
                   <img src={product.image} alt="singlepic" className='w-24 h-28 bg-[#f9f9f9] p-3 rounded-md' />
               
                  </div>
              </div>
           </div>
           
           <div className='flex-1 flex-col '>
             <p className='text-2xl font-bold mb-4'>{product.title}</p>
             <p className='text-sm mb-3'>{product.description}</p>
             <Rating/>
             <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
             <div className='flex items-center gap-2'>
             <p className='text-2xl font-bold flex items-center'>
              <DollarSign fontSize={20}/> 
              {product.price}
              </p> <span className='text-2xl font-bold flex items-center'>or</span>
              <span className='text-2xl font-bold flex items-center'>99.99/month</span>

             </div>
             <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
                <span className='text-lg font-bold'>Choose a Color</span>
              <div className='flex  gap-2 py-3 mb-2 mt-2'>
                <div className="w-12 h-12 rounded-full bg-red-500 cursor-pointer"></div>
                <div className="w-12 h-12 rounded-full bg-blue-500 cursor-pointer"></div>
                <div className="w-12 h-12 rounded-full bg-cyan-500 cursor-pointer"></div>
                <div className="w-12 h-12 rounded-full bg-green-500 cursor-pointer"></div>
              </div>

              <div className='py-3'>
                 <div className='flex gap-4'>
                  <div className='flex items-center gap-9 justify-center bg-gray-100 rounded-full px-12'>
                   <span className='font-bold text-xl'>-</span>  
                   <span className='font-bold text-xl'>1</span>
                   <span className='font-bold text-xl'>+</span>
                  </div>
                   <div className='flex flex-col gap-2'>
                    <span className='font-semibold text-base'>Only <span className='text-orange-500'>12 items</span> left!</span>
                    <span className='font-semibold text-base'>Don't miss it</span>
                   </div>
                </div>  

                  <div className='flex gap-2 py-4'>
                    <button  className='w-[200px] text-white text-lg py-2 mt-2 rounded-full bg-green-800 border font-bold'>Buy Now</button>
                    <button 
                      className='w-[200px] text-green-800 text-lg py-2 mt-2 rounded-full bg-white border-2 border-green-900 font-bold'>
                      Add To Cart
                      </button>
                  </div>
              </div>  


              <div>
                  <div className='max-w-[400px] flex gap-4 py-4 rounded-lg border-2 pl-2 border-gray-100 p-2'>
                    
                      <Truck  className='w-6 h-6 text-orange-500' />
                      <div className='flex flex-col'>
                        <span className='font-semibold text-base'>Free Delivery</span>
                        <span className='text-sm font-semibold underline text-gray-500 mt-2'>Enter your Postal code for Delivery Availability</span>
                      </div>
                  </div>
                  <div className='max-w-[400px] flex gap-4 py-4 border-2 border-gray-100 p-2 pl-2'>
                      <FileCheck className='w-6 h-6 text-orange-500' strokeWidth={1.5} />
                      <div className='flex flex-col'>
                        <span className='font-semibold text-base'>Return Delivery</span>
                        <span className='text-sm font-semibold text-gray-500 mt-2'>Free 30days Delivery Returns. <span className='text-sm font-semibold underline'>Details</span> </span>
                      </div>
                  </div>  
              </div>

           </div>
           

        

      </div>
    </div>
  )
}

export default ProductDetail
