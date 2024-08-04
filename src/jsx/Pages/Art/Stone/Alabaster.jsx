import '../../../../dist/art.css';

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import Alabasterdata from '../../../../assets/data/stone/alabasterdata.json';

// import images
import img1 from '../../../../assets/images/alabaster/Faltenstein.jpeg';
import img2 from '../../../../assets/images/alabaster/Spannungsfeld.jpeg';

const images = [img1, img2];

const Alabaster = () => {
    // loop over alabasterdata
    let content = [];
    for (var i = 0; i < Alabasterdata.length; i++) {
        content.push(<PictureItem key={Alabasterdata[i].name} item={Alabasterdata[i]} image={images[i]}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Alabaster</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Alabaster;