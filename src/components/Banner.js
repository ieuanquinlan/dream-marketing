import React from 'react'
import '../scss/Banner.scss'

const Banner = ({text, image}) => {
    
return (
    <div>
        <div className='banner-overlay'></div>
    <div className='banner container-fluid' style={{backgroundImage: `url(${image})`}}>
        <div className='row justify-content-center text-center text-uppercase'>
        <h1>{text}</h1>
        </div>
    </div>
    </div>
)
}

export default Banner