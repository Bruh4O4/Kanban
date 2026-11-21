import styles from './Button.module.css'
import type { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({ children, className }: ButtonProps) {
    return (
        <button className={cn(styles['btn'], className)}>
            { children }
        </button>
    )
}

export default Button;