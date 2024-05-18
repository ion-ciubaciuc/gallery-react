import { Gallery } from './gallery';
import pictureOne from './assets/picture_1.jpg';
import pictureTwo from './assets/picture_2.jpg';
import pictureThree from './assets/picture_3.jpg';
import pictureFour from './assets/picture_4.jpg';
import pictureFive from './assets/picture_5.jpg';
import pictureSix from './assets/picture_6.jpg';

const images = [
    { src: pictureOne },
    { src: pictureTwo },
    { src: pictureThree },
    { src: pictureFour },
    { src: pictureFive },
    { src: pictureSix },
];

const App = () => {
    return (
        <div className='container mx-auto p-2'>
            <Gallery items={images} />
        </div>
    );
};

export default App;
