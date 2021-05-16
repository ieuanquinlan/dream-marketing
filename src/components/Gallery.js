import React from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const Gallery = ({gallery}) => {
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
        
          
    return (
        <div className='container-fluid'>
        <AutoPlaySwipeableViews interval={3000} enableMouseEvents={true}>
        {gallery.map((image, index)=>(
            <img key={index} className='gallery-img' src={image} alt='Vehicle Layout'/>
        ))}
    </AutoPlaySwipeableViews>
    </div>
    )
}

export default Gallery