import { Gallery } from './gallery';
import pictureOne from './assets/picture_1.jpg';
import pictureTwo from './assets/picture_2.jpg';
import pictureThree from './assets/picture_3.jpg';

const images = [
    {
        src: pictureOne,
    },
    {
        src: pictureTwo,
    },
    {
        src: pictureThree,
    },
];

const App = () => {
    return (
        <div className='m-auto p-4 md:p-8 w-fit'>
            <Gallery items={images} />
        </div>
    );
};

export default App;
