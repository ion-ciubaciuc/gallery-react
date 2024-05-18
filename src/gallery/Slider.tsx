import { forwardRef } from 'react';
import type { ReactNode } from 'react';

type SliderProps = {
    onScroll: () => void;
    children: ReactNode;
};

const Slider = forwardRef<HTMLDivElement, SliderProps>((props, ref) => (
    <div
        className='size-full grid auto-cols-[100%] grid-flow-col overflow-x-auto sm:grid-cols-[repeat(auto-fill,100%)] snap-x snap-mandatory scroll-smooth motion-reduce:scroll-auto scrollbar-hidden rounded-lg'
        onScroll={props.onScroll}
        ref={ref}
    >{props.children}</div>
));

Slider.displayName = 'Slider';

export default Slider;
