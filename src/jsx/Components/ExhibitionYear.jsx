import React from 'react';

import '../../dist/exhibitionyear.css';

import ExhibitionSingle from './ExhibitionSingle';

const ExhibitionYear = ({ year, data }) => {
    // loop over data
    let content = [];
    data.forEach(exhibition => content.push(<ExhibitionSingle exhibition={exhibition}></ExhibitionSingle>));

    return (
        <div className='exhibitionyear--container'>

            <div className='exhibitionyear--container--year'>{year}</div>
            <div className='exhibitionyear--container--exhibition'>{content}</div>
        </div>
    );
};

export default ExhibitionYear;