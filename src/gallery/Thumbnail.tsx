import { FC } from 'react';

type ThumbnailProps = {
    onClick: () => void;
    src: string;
    alt?: string;
};

const Thumbnail: FC<ThumbnailProps> = (props) => (
    <img className='size-full object-cover aspect-video max-md:h-20 rounded-lg' loading='lazy' {...props} />
);

export default Thumbnail;
