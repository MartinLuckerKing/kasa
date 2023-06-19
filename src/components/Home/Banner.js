import React from 'react'
import bannerHome from './../../images/bannerHome.jpg'

export function Banner() {
  return (
    <div className='banner'>
      <div className="banner__content">
        <p className='banner__text'>Chez vous, partout et ailleurs</p>
        <img className='banner__image' src={bannerHome} alt=""></img>
      </div>
    </div>
  )
}
