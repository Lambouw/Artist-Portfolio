import React, { useEffect, useRef } from 'react';

import '../../styles/css/exhibitionyear.css';

import ExhibitionSingle from './ExhibitionSingle';

const ExhibitionYear = ({ year, data }) => {
    const exhibitionYearRef = useRef();

    useEffect(() => {
        exhibitionYearRef.current.classList.add("slide-in-exhibition-year");
    }, []);

    // loop over data
    let content = [];
    data.forEach(exhibition => content.push(<ExhibitionSingle exhibition={exhibition}></ExhibitionSingle>));

    return (
        <div className='exhibitionyear--container'>
            <div className='exhibitionyear--container--year' ref={exhibitionYearRef}>{year}</div>
            <div className='exhibitionyear--container--exhibition'>{content}</div>
        </div>
    );
};

export default ExhibitionYear;