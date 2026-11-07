import { useState } from 'react';
import Card from '../Common/Card';
import Badge from '../Common/Badge';
import ProgressBar from '../Common/ProgressBar';
import { Paperclip, Calendar, User, Briefcase, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

interface RecentTask {
  id: string;
  title: string;
  department: string;
  assignedBy: string;
  assignedDate: string;
  dueDate: string;
  status: 'In Progress' | 'Pending Review' | 'Completed' | 'Overdue';
  priority: 'High' | 'Medium' | 'Low';
  progress: number;
  hasAttachment: boolean;
}

const recentTasksData: RecentTask[] = [
  {
    id: '1',
    title: 'Update client presentation for Q4',
    department: 'Sales · Enterprise',
    assignedBy: 'Sarah Chen',
    assignedDate: 'Oct 14',
    dueDate: 'Oct 16',
    status: 'In Progress',
    priority: 'High',
    progress: 75,
    hasAttachment: true,
  },
  {
    id: '2',
    title: 'Review and approve budget proposals',
    department: 'Finance · Operations',
    assignedBy: 'Michael Ross',
    assignedDate: 'Oct 12',
    dueDate: 'Oct 15',
    status: 'Pending Review',
    priority: 'Medium',
    progress: 90,
    hasAttachment: true,
  },
  {
    id: '3',
    title: 'Deploy new authentication service',
    department: 'Engineering · Backend',
    assignedBy: 'David Kim',
    assignedDate: 'Oct 10',
    dueDate: 'Oct 14',
    status: 'Completed',
    priority: 'High',
    progress: 100,
    hasAttachment: false,
  },
  {
    id: '4',
    title: 'Draft quarterly newsletter',
    department: 'Marketing · Content',
    assignedBy: 'Elena Rodriguez',
    assignedDate: 'Oct 13',
    dueDate: 'Oct 20',
    status: 'In Progress',
    priority: 'Low',
    progress: 30,
    hasAttachment: false,
  },
  {
    id: '5',
    title: 'Security audit remediation',
    department: 'IT · Security',
    assignedBy: 'James Wilson',
    assignedDate: 'Oct 01',
    dueDate: 'Oct 10',
    status: 'Overdue',
    priority: 'High',
    progress: 85,
    hasAttachment: true,
  },
];

const priorityColors = {
  High: 'red',
  Medium: 'orange',
  Low: 'green',
} as const;

const statusColors = {
  'In Progress': 'blue',
  'Pending Review': 'orange',
  'Completed': 'green',
  'Overdue': 'red',
} as const;

const RecentTasks = () => {
  const [filter, setFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filters = ['All', 'Recent', 'In Progress', 'Pending Review', 'Completed', 'Overdue'];

  return (
    <div className="mb-10">
      <Card className="!p-0 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-gray-900">Recent Tasks</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors"
              >
                <Filter size={16} />
                {filter}
              </button>
              
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-10 py-1">
                  {filters.map(f => (
                    <button
                      key={f}
                      onClick={() => { setFilter(f); setIsFilterOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm ${filter === f ? 'bg-teal-primary/5 text-teal-primary font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a href="#" className="text-sm font-semibold text-teal-primary hover:text-teal-hover">See all</a>
          </div>
        </div>

        {/* Task List */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.05 } } }}
          className="divide-y divide-gray-100"
        >
          {recentTasksData.map((task) => (
            <motion.div 
              variants={{ initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 } }}
              key={task.id} 
              className="p-6 hover:bg-gray-50/50 transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-teal-primary transition-colors">{task.title}</h3>
                    {task.hasAttachment && (
                      <div className="text-gray-400" title="Has attachment">
                        <Paperclip size={14} />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-gray-400" />
                      <span>{task.department}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={14} className="text-gray-400" />
                      <span>{task.assignedBy}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 shrink-0">
                  <Badge color={statusColors[task.status]}>{task.status}</Badge>
                  <Badge color={priorityColors[task.priority]}>{task.priority}</Badge>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-gray-500 mt-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-gray-400" />
                    <span>Assigned: <span className="font-medium text-gray-700">{task.assignedDate}</span></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-red-400" />
                    <span>Due: <span className="font-medium text-red-600">{task.dueDate}</span></span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-48">
                  <div className="flex-1">
                    <ProgressBar progress={task.progress} />
                  </div>
                  <span className="font-semibold text-gray-700 w-8 text-right">{task.progress}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Card>
    </div>
  );
};

export default RecentTasks;
