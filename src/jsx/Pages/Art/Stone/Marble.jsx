import '../../../../dist/art.css';

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import MarbleData from '../../../../assets/data/stone/marbledata.json';

// import images
import img1 from '../../../../assets/images/stone/Speckstein_1.jpeg';
import img2 from '../../../../assets/images/stone/Speckstein_1.jpeg';
import img3 from '../../../../assets/images/stone/Speckstein_1.jpeg';
import img4 from '../../../../assets/images/stone/Marmorbueste_einer_Taenzerin.jpeg';
import img5 from '../../../../assets/images/stone/Speckstein_1.jpeg';
import img6 from '../../../../assets/images/stone/Kleine_Dicke_im_Stein.jpeg';

const images = [img1, img2, img3, img4, img5, img6];

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