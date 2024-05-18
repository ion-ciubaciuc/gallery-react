import { FC } from 'react';

type SlideProps = {
    src: string;
    alt?: string;
};

const Slide: FC<SlideProps> = (props) => (
    <img className='object-cover size-full snap-center snap-always max-lg:aspect-video' loading='lazy' {...props} />
);

export default Slide;
