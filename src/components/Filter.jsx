import React from 'react'
import {ChevronDown} from 'lucide-react'


const Filter = ({handleCategory}) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center px-10 py-14'>
        <div className='flex justify-between items-center gap-4 flex-col md:flex-row'>
            
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2 cursor-pointer'>
            <span className='font-bold text-sm'
             onClick={()=>handleCategory("electronics")}
            >Electronics</span>        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2 cursor-pointer'>
            <span className='font-bold text-sm'
             onClick={()=>handleCategory("jewelery")}
            >Jewelery</span>        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2 cursor-pointer'>
            <span className='font-bold text-sm'
             onClick={()=>handleCategory("men's clothing")}
            >Mens Clothing</span>        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2 cursor-pointer'>
            <span className='font-bold text-sm'
             onClick={()=>handleCategory("women's clothing")}
            >Women's clothing</span>        </div>
   

        </div>

    </div>
  )
}

export default Filter