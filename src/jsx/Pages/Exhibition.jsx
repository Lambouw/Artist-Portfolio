import React, { useEffect, useRef } from 'react';

import "../../styles/css/exhibition.css";

import ExhibitionYear from '../Components/ExhibitionYear';

import ExhibitionData from '../../assets/data/exhibitiondata.json';

const Exhibition = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current.classList.add("slide-in-exhibition-title");
    }, []);

    const sortExhibitionsByDate = (exhibitions) => {
        return exhibitions.sort((a, b) => {
            const dateA = new Date(a.month);
            const dateB = new Date(b.month);
            return dateB - dateA;
        });
    };

    // Loop over exhibitiondata in reverse order
    let content = [];
    const years = Object.keys(ExhibitionData).sort((a, b) => b - a); // Sort years from last to first
    for (const year of years) {
        const sortedExhibitions = sortExhibitionsByDate(ExhibitionData[year]);
        content.push(<ExhibitionYear key={year} year={year} data={sortedExhibitions}></ExhibitionYear>);
    }

    return (
        <div className="exhibition">
            <h1 className="exhibition--title" ref={titleRef}>Ausstellungen</h1>
            <div>{content}</div>
        </div>
    );
};

export default Exhibition;