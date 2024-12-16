import React, { useContext } from 'react'
import FeaturedGames from '../../../Components/Site/Sections/featured_games_sec/FeaturedGames'
import Newswire from '../../../Components/Site/Sections/newswire_sec/Newswire'
import './Home.css'
import HeroSec from '../../../Components/Site/Sections/hero_sec/HeroSec'
import MainContext from '../../../Context/Context'
const Home = () => {
  const {news}=useContext(MainContext)

  return (
    <main>
      <HeroSec/>
      <Newswire news={news}/>
      <FeaturedGames/>
    </main>
  )
}

export default Home
