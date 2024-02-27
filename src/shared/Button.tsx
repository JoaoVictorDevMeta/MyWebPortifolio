import React from 'react';
import './Button.scss';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'submit';
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, variant = 'primary', children, width, height }) => {
  const style = {
    width: width,
    height: height,
  };

  return (
    <button className={`button ${variant}`} onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
};

export default Button;