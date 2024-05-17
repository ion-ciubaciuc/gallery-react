import type { FC } from 'react';
import { useRef, useState, useCallback } from 'react';

import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Button from './Button';
import Navigation from './Navigation';
import NavigationDot from './NavigationDot';

type GalleryProps = {
    className?: string;
    items: { src: string; alt?: string }[];
};

let timeoutId: number | undefined = undefined;

const Gallery: FC<GalleryProps> = (props) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = useCallback(
        (index: number) => {
            const minMaxIndex = Math.max(0, Math.min(index, props.items.length - 1));
            setCurrentIndex(minMaxIndex);
            sliderRef.current?.scroll({
                left: sliderRef.current.clientWidth * minMaxIndex,
                behavior: 'smooth',
            });
        },
        [props.items.length],
    );

    const handleSroll = useCallback(() => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            const element = sliderRef.current as HTMLDivElement;
            const index = Math.round((props.items.length * element.scrollLeft) / element.scrollWidth);
            setCurrentIndex(index);
        }, 100);
    }, [props.items.length]);

    return (
        <div className='flex lg:gap-4 gap-2 w-full max-lg:flex-col-reverse'>
            <div className='max-lg:overflow-x-auto lg:overflow-y-auto flex lg:flex-col lg:gap-4 gap-2 no-scrollbar'>
                {props.items.map((item, i) => (
                    <img className='w-36' {...item} loading='lazy' onClick={() => handleClick(i)} key={i} />
                ))}
            </div>
            <div className='relative max-w-5xl w-full'>
                <div
                    className='grid auto-cols-[100%] grid-flow-col overflow-x-auto sm:grid-cols-[repeat(auto-fill,100%)] snap-x snap-mandatory scroll-smooth aspect-video no-scrollbar'
                    onScroll={handleSroll}
                    ref={sliderRef}
                >
                    {props.items.map((item, i) => (
                        <div className='snap-center snap-always size-full relative overflow-hidden' key={i}>
                            <img {...item} className='object-cover' loading='lazy' alt={`${i}`} />
                        </div>
                    ))}
                </div>
                <Navigation>
                    <Button onClick={() => handleClick(currentIndex - 1)}>
                        <ArrowLeft />
                    </Button>
                    {props.items.map((_, index) => (
                        <Button onClick={() => handleClick(index)} key={index}>
                            <NavigationDot active={currentIndex === index} />
                        </Button>
                    ))}
                    <Button onClick={() => handleClick(currentIndex + 1)}>
                        <ArrowRight />
                    </Button>
                </Navigation>
            </div>
        </div>
    );
};

export default Gallery;
