import type { FC, ReactNode } from 'react';

type NavigationProps = {
    children: ReactNode;
    onClick: () => void;
    direction: 'left' | 'right';
};

const Navigation: FC<NavigationProps> = (props) => (
    <button
        className={`absolute bg-gray-600 bg-opacity-80 rounded-full text-white p-1 top-1/2 -translate-y-1/2 ${props.direction === 'left' ? 'left-2' : 'right-2'}`}
        type='button'
        onClick={props.onClick}
    >
        {props.children}
    </button>
);

export default Navigation;
