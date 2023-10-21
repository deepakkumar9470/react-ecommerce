import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Product from './Product'
import {Search} from 'lucide-react'
import Filter from './Filter'
const Products = () => {
    
    const [products, setProducts] = useState([])
    const [query, setQuery] = useState("");

    const [cat,setCat] = useState('')

    useEffect(() => {
        let apiUrl = "https://fakestoreapi.com/products";
        if(cat){
            apiUrl = `https://fakestoreapi.com/products/category/${cat}`;
        }
        if (query) {
            apiUrl += `?search=${query}`;
          }
        const fecthProducts = async () =>{
            try {
                const res = await axios.get(apiUrl)
                setProducts(res.data)
            } catch (error) {
                console.log(error)
            }

        }
        fecthProducts()
    }, [cat,query])

   const handleCategory = (item) =>{
    setCat(item)
   }
 
  return (
    <>
        <div className='flex items-center justify-between px-10'>
        <Filter handleCategory={handleCategory}/>
          <div className="flex items-center gap-2  px-4 text-white relative">
          <input
            className="bg-gray-50 rounded-full outline-none px-10 py-2 text-gray-500"
            type="text"
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            placeholder="Search Product"
          />
          <Search className="absolute right-8 w-5 h-5 text-gray-400" />
        </div>  

        </div>
          
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
    </>
   
  )
}

export default Products