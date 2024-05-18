import type { FC } from 'react';

type NavigationDotProps = {
    active: boolean;
};

const NavigationDot: FC<NavigationDotProps> = (props) => (
    <div className={`rounded-full bg-white size-2 ${props.active ? 'bg-opacity-100' : 'bg-opacity-40'}`}></div>
);

export default NavigationDot;
