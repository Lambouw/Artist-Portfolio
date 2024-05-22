import React from 'react';
// import { Item } from 'react-photoswipe-gallery'

import '../../dist/exhibitionsingle.css';

const ExhibitionSingle = ({ exhibition }) => {
    console.log('exhibition: ' + exhibition);

    return (
        <div className='exhibitionsingle--container'>
            <div className='exhibitionsingle--container--date'>{exhibition.month}</div>
            <div className='exhibitionsingle--container--wrapper'>
                <div className='exhibitionsingle--container--wrapper--name'>{exhibition.name}</div>
                <div className='exhibitionsingle--container--wrapper--location'>{exhibition.location}</div>
                <div className='exhibitionsingle--container--wrapper--image'></div>
                {/* {exhibition.image ? <img className='exhibitionsingle--container--wrapper--image' onClick={console.log('implement zoom func')} src={`${process.env.PUBLIC_URL}/assets/images/${exhibition.image}`} alt={exhibition.name}></img> : null} */}
            </div>

        </div>
    );
};

export default ExhibitionSingle;