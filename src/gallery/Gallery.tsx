import type { FC } from "react";
import { useEffect, useState, useRef } from "react";

type GalleryProps = {
    className?: string;
    items: { src: string; alt?: string }[];
};

const Gallery: FC<GalleryProps> = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        sliderRef.current?.scroll({
            left: sliderRef.current.clientWidth * currentIndex,
        });
    }, [currentIndex]);

    return (
        <div className="flex gap-6">
            <div className="overflow-y-auto w-64">
                {props.items.map((item, i) => (
                    <img
                        {...item}
                        loading="lazy"
                        onClick={() => setCurrentIndex(i)}
                    />
                ))}
            </div>
            <div className="max-w-5xl w-full aspect-video overflow-hidden">
                <div
                    className="overflow-x-auto relative snap-x snap-mandatory w-full flex scroll-smooth"
                    ref={sliderRef}
                >
                    {props.items.map((item) => (
                        <img
                            {...item}
                            className="object-fill snap-center snap-always"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
