import '../../../dist/art.css';

import PictureItem from '../../Components/PictureItem';
import GalleryWrapper from '../../Components/GalleryWrapper';

import ClayData from '../../../assets/data/claydata.json';

// import images
import img1 from '../../../assets/images/clay/Selbstportrait.jpeg';
import img2 from '../../../assets/images/clay/Sitzende_1.jpeg';
import img3 from  '../../../assets/images/clay/Sitzende_2.jpeg';
import img4 from '../../../assets/images/clay/Liegende_1.jpeg';
import img5 from '../../../assets/images/clay/Liegende_2.jpeg';

const images = [img1, img2, img3, img4, img5];

const Clay = () => {
    // loop over claydata
    let content = [];
    for (var i = 0; i < ClayData.length; i++) {
        content.push(<PictureItem key={ClayData[i].name} item={ClayData[i]} image={images[i]}></PictureItem>);
    }
    
    return (
        <div className="art">
            <h1 className="art--title">Ton</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Clay;