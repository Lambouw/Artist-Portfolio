import '../../../../dist/art.css';

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import MarbleData from '../../../../assets/data/stone/marbledata.json';

// import images
import img1 from '../../../../assets/images/caststone/Kleine_Sitzende.jpeg';
import img2 from '../../../../assets/images/caststone/Stehende_1.jpeg';
import img3 from '../../../../assets/images/caststone/Stehende_2.jpeg';

const images = [img1, img2, img3];

const Marble = () => {
    // loop over marbledata
    let content = [];
    for (var i = 0; i < MarbleData.length; i++) {
        content.push(<PictureItem key={MarbleData[i].name} item={MarbleData[i]} image={images[i]}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Marmor</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Marble;