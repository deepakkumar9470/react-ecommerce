import React from 'react'
import {ChevronDown} from 'lucide-react'


const Filter = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center px-10 py-14'>
        <div className='flex justify-between items-center gap-4 flex-col md:flex-row'>
            
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2 cursor-pointer'>
            <span className='font-bold text-sm'>Headphone Type</span>        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2 cursor-pointer'>
            <span className='font-bold text-sm'>Price</span>        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2 cursor-pointer'>
            <span className='font-bold text-sm'>Review</span>        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2 cursor-pointer'>
            <span className='font-bold text-sm'>Color</span>        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2 cursor-pointer'>
            <span className='font-bold text-sm'>Material</span>
        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2 cursor-pointer'>
            <span className='font-bold text-sm'>Offer</span>
        </div>
        <div className='flex items-center gap-1 bg-[#EEEEEE] rounded-full px-5 py-2 cursor-pointer'>
            <span className='font-bold text-sm'>All Filters</span>
        </div>

        </div>

    </div>
  )
}

export default Filter