import React from 'react'
import "./style.scss"
import Herobanner from './heroBanner/Herobanner'
import Trending from './trending/Trending'

const Home = () => {
  return (
    <div className='homepage'>
      <Herobanner/>
      <Trending/>
      <div style={{height:1000}}></div>
    </div>
  )
}

export default Home