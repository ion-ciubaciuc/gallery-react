import { Gallery } from './gallery';
import pictureOne from './assets/picture_1.webp';
import pictureOneThumbnail from './assets/picture_1_thumbnail.webp';
import pictureTwo from './assets/picture_2.webp';
import pictureTwoThumbnail from './assets/picture_2_thumbnail.webp';
import pictureThree from './assets/picture_3.webp';
import pictureThreeThumbnail from './assets/picture_3_thumbnail.webp';
import pictureFour from './assets/picture_4.webp';
import pictureFourThumbnail from './assets/picture_4_thumbnail.webp';
import pictureFive from './assets/picture_5.webp';
import pictureFiveThumbnail from './assets/picture_5_thumbnail.webp';

const images = [
    {
        slide: { src: pictureOne },
        thumbnail: { src: pictureOneThumbnail },
    },
    {
        slide: { src: pictureTwo },
        thumbnail: { src: pictureTwoThumbnail },
    },
    {
        slide: { src: pictureThree },
        thumbnail: { src: pictureThreeThumbnail },
    },
    {
        slide: { src: pictureFour },
        thumbnail: { src: pictureFourThumbnail },
    },
    {
        slide: { src: pictureFive },
        thumbnail: { src: pictureFiveThumbnail },
    },
];

const App = () => {
    return (
        <div className='container mx-auto p-2'>
            <Gallery items={images} />
        </div>
    );
};

export default App;
