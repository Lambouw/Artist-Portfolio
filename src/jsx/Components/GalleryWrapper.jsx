import React from 'react';
import { Gallery } from 'react-photoswipe-gallery'

import 'photoswipe/dist/photoswipe.css'

import '../../dist/gallerywrapper.css';

const GalleryWrapper = ({ content }) => {
    return (
        <span className="gallerywrapper">
            <Gallery >
                {content}
            </Gallery>
        </span>
    );
};

export default GalleryWrapper;