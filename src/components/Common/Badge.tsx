import { ReactNode } from 'react';

type BadgeColor = 'red' | 'orange' | 'green' | 'blue' | 'gray' | 'purple' | 'amber' | 'indigo';

interface BadgeProps {
  children: ReactNode;
  color?: BadgeColor;
  className?: string;
}

const colorStyles: Record<BadgeColor, string> = {
  red: 'bg-red-100 text-red-700',
  orange: 'bg-orange-100 text-orange-700',
  green: 'bg-green-100 text-green-700',
  blue: 'bg-blue-100 text-blue-700',
  gray: 'bg-gray-100 text-gray-700',
  purple: 'bg-purple-50 text-purple-700 border border-purple-200',
  amber: 'bg-amber-100 text-amber-700',
  indigo: 'bg-indigo-100 text-indigo-700'
};

const Badge = ({ children, color = 'gray', className = '' }: BadgeProps) => {
  return (
    <span className={`px-2 py-0.5 text-[11px] font-semibold rounded-md ${colorStyles[color]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
