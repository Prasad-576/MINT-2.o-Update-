import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}

const variantStyles = {
  primary: 'bg-teal-primary text-white hover:bg-teal-hover shadow-sm',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'border border-gray-200 text-gray-900 hover:bg-gray-50',
  ghost: 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
};

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
