import type { FC, ButtonHTMLAttributes } from 'react';

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonProps = Omit<ButtonAttributes, 'className'>;

const Button: FC<ButtonProps> = ({ children, ...rest }) => (
    <button className='rounded-full' {...rest}>
        {children}
    </button>
);

export default Button;
