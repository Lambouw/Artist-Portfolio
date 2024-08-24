import '../../../dist/art.css';

import PictureItem from '../../Components/PictureItem';
import GalleryWrapper from '../../Components/GalleryWrapper';

import CaststoneData from '../../../assets/data/caststonedata.json';

const Caststone = () => {
    // loop over caststonedata
    let content = [];
    for (var i = 0; i < CaststoneData.length; i++) {
        content.push(<PictureItem key={CaststoneData[i].name} item={CaststoneData[i]} image={CaststoneData[i].src}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Guss</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Caststone;