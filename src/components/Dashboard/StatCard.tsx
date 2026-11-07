import Card from '../Common/Card';
import { ReactNode } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatCardProps {
  icon: ReactNode;
  iconBg: string;
  count: number | string;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
  trendText?: string;
}

const StatCard = ({ icon, iconBg, count, label, trend, trendText }: StatCardProps) => {
  return (
    <Card hoverEffect className="flex flex-col h-full !p-4">
      <div className={`w-7 h-7 rounded-md flex items-center justify-center mb-2 ${iconBg}`}>
        {icon}
      </div>
      <div className="mt-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-0.5">{count}</h3>
        <p className="text-[12px] text-gray-500 mb-1.5">{label}</p>
        
        {trend && trendText && (
          <div className="flex items-center gap-1.5 mt-auto">
            {trend === 'up' && <TrendingUp size={14} className="text-green-500" />}
            {trend === 'down' && <TrendingDown size={14} className="text-red-500" />}
            {trend === 'neutral' && <Minus size={14} className="text-gray-400" />}
            
            <span className={`text-xs font-semibold ${
              trend === 'up' ? 'text-green-600' : 
              trend === 'down' ? 'text-red-600' : 
              'text-gray-500'
            }`}>
              {trendText}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;
