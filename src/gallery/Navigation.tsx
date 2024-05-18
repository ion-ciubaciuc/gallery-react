import type { FC, ReactNode } from 'react';

type NavigationProps = {
    children: ReactNode;
};

const Navigation: FC<NavigationProps> = (props) => (
    <div className='absolute bottom-2 md:bottom-4 flex gap-2.5 items-center left-1/2 -translate-x-1/2 p-2 bg-gray-600 bg-opacity-80 rounded-full text-white'>
        {props.children}
    </div>
);

export default Navigation;
