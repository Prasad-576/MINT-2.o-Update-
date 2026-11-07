import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card = ({ children, className = '', hoverEffect = false }: CardProps) => {
  const baseClasses = 'bg-white rounded-lg p-4 shadow-sm border border-gray-200/60';
  
  const cardVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  };

  // Premium SaaS hover animation: clear upward lift, slightly larger scale, deeper shadow, smooth transition
  const hoverClasses = hoverEffect 
    ? 'transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-900/10 hover:border-blue-200/50 z-10 hover:z-20' 
    : '';

  return (
    <motion.div 
      variants={cardVariants}
      initial="initial"
      animate="animate"
      className={`${baseClasses} ${hoverClasses} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
