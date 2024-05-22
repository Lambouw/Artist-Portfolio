import '../../../dist/art.css';

import PictureItem from '../../Components/PictureItem';
import GalleryWrapper from '../../Components/GalleryWrapper';

import StoneData from '../../../assets/data/stonedata.json';

// import images
import img1 from '../../../assets/images/stone/Liegende_(Marmor).jpeg';
import img2 from '../../../assets/images/stone/Speckstein_1.jpeg';
import img3 from '../../../assets/images/stone/Speckstein_2.jpeg';
import img4 from '../../../assets/images/stone/Kleine_Dicke_im_Stein_(Marmor).jpeg';
import img5 from '../../../assets/images/stone/Speckstein_4.jpeg';
import img6 from '../../../assets/images/stone/Liegende_(Sandstein).jpeg';
import img7 from '../../../assets/images/stone/Speckstein_5.jpeg';
import img8 from '../../../assets/images/stone/Speckstein_3.jpeg';
import img9 from '../../../assets/images/stone/Spannungsfeld_(Alabaster).jpeg';
import img10 from '../../../assets/images/stone/Schreitende_(Kalkstein).jpeg';
import img11 from '../../../assets/images/stone/Marmorbüste_einer_Tänzerin.jpeg';
import img12 from '../../../assets/images/stone/Faltenstein_(Alabaster).jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Stone = () => {
    // loop over stonedata
    let content = [];
    for (var i = 0; i < StoneData.length; i++) {
        content.push(<PictureItem key={StoneData[i].name} item={StoneData[i]} image={images[i]}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Stein</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Stone;