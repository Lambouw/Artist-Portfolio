import '../../../dist/art.css';

import PictureItem from '../../Components/PictureItem';
import GalleryWrapper from '../../Components/GalleryWrapper';

import PaintingData from '../../../assets/data/paintingdata.json';

// import images
import img1 from '../../../assets/images/paintings/Maedchen_im_Wind.jpeg';
import img2 from '../../../assets/images/paintings/Fruehling.jpeg';
import img3 from '../../../assets/images/paintings/Sommer.jpeg';

const images = [img1, img2, img3];

const Painting = () => {
    // loop over paintingdata
    let content = [];
    for (var i = 0; i < PaintingData.length; i++) {
        content.push(<PictureItem key={PaintingData[i].name} item={PaintingData[i]} image={images[i]}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Malerei</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Painting;