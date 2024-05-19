import { Gallery } from './gallery';

const images = [
    {
        slide: { src: '/assets/picture_1.webp' },
        thumbnail: { src: '/assets/picture_1_thumbnail.webp' },
    },
    {
        slide: { src: '/assets/picture_2.webp' },
        thumbnail: { src: '/assets/picture_2_thumbnail.webp' },
    },
    {
        slide: { src: '/assets/picture_3.webp' },
        thumbnail: { src: '/assets/picture_3_thumbnail.webp' },
    },
    {
        slide: { src: '/assets/picture_4.webp' },
        thumbnail: { src: '/assets/picture_4_thumbnail.webp' },
    },
    {
        slide: { src: '/assets/picture_5.webp' },
        thumbnail: { src: '/assets/picture_5_thumbnail.webp' },
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
