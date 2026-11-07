import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number; // 0 to 100
  colorClass?: string;
  className?: string;
  height?: string;
}

const ProgressBar = ({ progress, colorClass = 'bg-teal-primary', className = '', height = 'h-1.5' }: ProgressBarProps) => {
  return (
    <div className={`w-full bg-gray-100 rounded-full ${height} overflow-hidden ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`h-full rounded-full ${colorClass}`}
      />
    </div>
  );
};

export default ProgressBar;
