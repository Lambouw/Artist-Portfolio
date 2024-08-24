import '../../../../dist/art.css';

import PictureItem from '../../../Components/PictureItem';
import GalleryWrapper from '../../../Components/GalleryWrapper';

import Alabasterdata from '../../../../assets/data/stone/alabasterdata.json';

const Alabaster = () => {
    // loop over alabasterdata
    let content = [];
    for (var i = 0; i < Alabasterdata.length; i++) {
        content.push(<PictureItem key={Alabasterdata[i].name} item={Alabasterdata[i]} image={Alabasterdata[i].src}></PictureItem>);
    }

    return (
        <div className="art">
            <h1 className="art--title">Alabaster</h1>
            <GalleryWrapper content={content}></GalleryWrapper>
        </div>
    );
};

export default Alabaster;