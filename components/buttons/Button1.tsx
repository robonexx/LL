import React from 'react';
import styles from './button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline';
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
