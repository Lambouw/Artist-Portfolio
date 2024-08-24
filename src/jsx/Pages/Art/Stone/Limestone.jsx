import '../../../../dist/art.css';

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import LimestoneData from '../../../../assets/data/stone/limestonedata.json';

const Limestone = () => {
    // loop over limestonedata
    let content = [];
    for (var i = 0; i < LimestoneData.length; i++) {
        content.push(<PictureItem key={LimestoneData[i].name} item={LimestoneData[i]} image={LimestoneData[i].src}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Kalkstein</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Limestone;