import type { FC } from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';

import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Navigation from './Navigation';
import Slide from './Slide';
import Slider from './Slider';
import Thumbnail from './Thumbnail';
import { mod } from './utils';

type GalleryProps = {
    className?: string;
    items: {
        slide: { src: string; alt?: string };
        thumbnail: { src: string; alt?: string };
    }[];
};

/**
 * TODO:
 * - add option to select the active index;
 * - add support for customisation;
 */
const Gallery: FC<GalleryProps> = (props) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = useCallback(
        (index: number) => {
            const modulus = mod(index, props.items.length);
            setCurrentIndex(modulus);
            sliderRef.current?.scroll({
                left: sliderRef.current.clientWidth * modulus,
            });
        },
        [props.items.length],
    );

    useEffect(() => {
        const handleResize = () => {
            sliderRef.current?.scroll({
                left: sliderRef.current.clientWidth * currentIndex,
            });
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentIndex]);

    return (
        <div className='flex flex-col-reverse md:grid grid-cols-5 h-full w-full overflow-hidden md:aspect-video gap-2'>
            <div className='md:col-span-1 max-md:overflow-x-auto md:overflow-y-auto scrollbar-hidden gap-2 flex md:flex-col'>
                {props.items.map((item, i) => (
                    <Thumbnail {...item.thumbnail} onClick={() => handleClick(i)} key={i} />
                ))}
            </div>
            <div className='md:col-span-4 relative'>
                <Slider ref={sliderRef}>
                    {props.items.map((item, i) => (
                        <Slide {...item.slide} key={i} />
                    ))}
                </Slider>
                <Navigation direction='left' onClick={() => handleClick(currentIndex - 1)}>
                    <ArrowLeft />
                </Navigation>
                <Navigation direction='right' onClick={() => handleClick(currentIndex + 1)}>
                    <ArrowRight />
                </Navigation>
            </div>
        </div>
    );
};

export default Gallery;
