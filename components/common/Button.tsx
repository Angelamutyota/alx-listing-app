import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const base = 'px-4 py-2 rounded-md font-medium transition focus:outline-none';
  const variants: Record<string, string> = {
    primary: 'bg-sky-600 text-white hover:bg-sky-700',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    ghost: 'bg-transparent text-sky-600 hover:underline',
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant] ?? variants.primary} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
