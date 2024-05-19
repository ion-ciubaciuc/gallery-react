import type { FC } from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';

import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Button from './Button';
import Navigation from './Navigation';
import NavigationDot from './NavigationDot';
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

let timeoutId: number | undefined = undefined;

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

    const handleSroll = useCallback(() => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            const element = sliderRef.current as HTMLDivElement;
            const index = Math.round((props.items.length * element.scrollLeft) / element.scrollWidth);
            setCurrentIndex(index);
        }, 100);
    }, [props.items.length]);

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
            <div className='md:col-span-1 max-md:overflow-x-auto md:overflow-y-auto scrollbar-hidden gap-2 flex md:flex-col border border-transparent'>
                {props.items.map((item, i) => (
                    <Thumbnail {...item.thumbnail} onClick={() => handleClick(i)} key={i} />
                ))}
            </div>
            <div className='md:col-span-4 relative'>
                <Slider onScroll={handleSroll} ref={sliderRef}>
                    {props.items.map((item, i) => (
                        <Slide {...item.slide} key={i} />
                    ))}
                </Slider>
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
