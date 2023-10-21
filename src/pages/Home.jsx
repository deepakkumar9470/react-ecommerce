import React from 'react'
import Products from '../components/Products'
import Poster from '../components/Poster'
import Filter from '../components/Filter'
import Offer from '../components/Offer'
import Header from '../components/Header'

const Home = () => {
    
  return (
    <div>       
        <Poster/>
        {/* <Filter/>          */}
        <Products/>         
    </div>
  )
}

export default Home