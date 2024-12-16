
import React, { useContext } from 'react'
import CarouselFadeExamples from '../../../Components/Site/Sections/carouselShop/CarouselFadeExamples'
import "./Shop.css"
import NewArrivals from '../../../Components/Site/Sections/NewArrivals_sec/NewArrivals'
import GameShop from '../../../Components/Site/Sections/GameShop_sec/GameShop'
import BestSellers from '../../../Components/Site/Sections/BestSellers_sec/BestSellers'
import Gta from '../../../Components/Site/Sections/ShopGTA_sec/Gta'
import Rdr2Shop from '../../../Components/Site/Sections/Rdr2Shop_sec/Rdr2Shop'
import MainContext from '../../../Context/Context'
const Shop = () => {
  const {products,games} = useContext(MainContext)
  return (
    <main id='shop'>
      <CarouselFadeExamples/>
      <NewArrivals products={products}/>
      <GameShop games={games}/>
      <BestSellers products={products}/>
      <Gta products={products}/>
      <Rdr2Shop products={products}/>
    </main>
  )
}

export default Shop

