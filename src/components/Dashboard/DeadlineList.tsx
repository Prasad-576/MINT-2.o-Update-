import { ReactNode } from 'react';
import Card from '../Common/Card';
import Badge from '../Common/Badge';
import { Clock, Calendar, CheckCircle, User, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

interface DeadlineProps {
  dotColor: string;
  dateStr: string;
  title: string;
  timeStr: string;
  priority: 'High' | 'Medium' | 'Low';
  assignedBy?: string;
  department?: string;
  statusIcon?: ReactNode;
}

const priorityColors = {
  High: 'red',
  Medium: 'orange',
  Low: 'green',
} as const;

const DeadlineItem = ({ dotColor, dateStr, title, timeStr, priority, assignedBy, department, statusIcon }: DeadlineProps) => (
  <Card hoverEffect className="mb-4 last:mb-0 !p-4 !rounded-xl relative overflow-hidden group">
    <div className={`absolute left-0 top-0 bottom-0 w-1 ${dotColor}`} />
    
    <div className="flex justify-between items-start mb-2 pl-2">
      <div className="flex flex-col">
        <h4 className="text-[15px] font-bold text-gray-900 leading-tight group-hover:text-teal-primary transition-colors">{title}</h4>
      </div>
      <Badge color={priorityColors[priority]}>{priority}</Badge>
    </div>

    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pl-2 text-xs text-gray-500 mb-2">
      <div className="flex items-center gap-1.5">
        <Calendar size={14} className="text-gray-400" />
        <span className="font-semibold text-gray-700">{dateStr}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Clock size={14} className="text-gray-400" />
        <span>{timeStr}</span>
      </div>
      {statusIcon && (
        <div className="flex items-center gap-1.5 text-teal-primary font-medium">
          {statusIcon}
        </div>
      )}
    </div>
    
    {(assignedBy || department) && (
      <div className="flex flex-wrap items-center gap-x-4 pl-2 pt-2 mt-2 border-t border-gray-100 text-xs text-gray-500">
        {assignedBy && (
          <div className="flex items-center gap-1.5">
            <User size={12} className="text-gray-400" />
            <span>{assignedBy}</span>
          </div>
        )}
        {department && (
          <div className="flex items-center gap-1.5">
            <Briefcase size={12} className="text-gray-400" />
            <span>{department}</span>
          </div>
        )}
      </div>
    )}
  </Card>
);

const DeadlineList = () => {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
      className="mt-8"
    >
      <Card className="!p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold text-gray-900">Upcoming deadlines</h3>
          <a href="#" className="text-sm font-semibold text-teal-primary hover:text-teal-hover">View calendar</a>
        </div>
      
        <DeadlineItem
          dotColor="bg-red-500"
          dateStr="Today"
          title="Redesign onboarding flow — final review"
          timeStr="6:00 PM"
          priority="High"
          assignedBy="Priya Nair"
          department="NimbusCRM · Design System"
          statusIcon={<><CheckCircle size={14} /> <span>In Review</span></>}
        />
        <DeadlineItem
          dotColor="bg-orange-500"
          dateStr="Tomorrow"
          title="QA regression — checkout module"
          timeStr="2:00 PM"
          priority="Medium"
          assignedBy="Daniel Osei"
          department="Atlas Billing · QA"
          statusIcon={<><CheckCircle size={14} className="text-orange-500" /> <span className="text-orange-600">Testing</span></>}
        />
      </Card>
    </motion.div>
  );
};

export default DeadlineList;
