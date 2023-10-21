import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Product from './Product'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
const Products = () => {
    
    const [products, setProducts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        const fecthProducts = async () =>{

            try {
                const res = await axios.get('https://fakestoreapi.com/products')
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }

        }
        fecthProducts()
    }, [])

    const addToCartHandler = (product) =>{
        dispatch(addToCart(product))
    } 

  return (
    <div className='px-10 py-5'>
        <h2 className='text-3xl font-extrabold pl-4 mb-4'>New Arrival</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>

            {
                products.length>0 ? products.map((product)=>(
                   <Product product={product} key={product.id}/>
                ))
               :
               (<p className='text-3xl font-extrabold text-center'>No Products available</p>)
            }

        </div>
    </div>
  )
}

export default Products