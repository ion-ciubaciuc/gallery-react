import type { FC } from 'react';

type NavigationDotProps = {
    active: boolean
}

const NavigationDot: FC<NavigationDotProps> = (props) => (
    <div className={`rounded-full bg-white ${props.active ? 'p-1.5' : 'p-1'}`}></div>
)

export default NavigationDot;
