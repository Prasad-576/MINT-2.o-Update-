import { useState } from 'react';
import { motion } from 'framer-motion';
import TaskCard, { TaskData } from '@components/Dashboard/TaskCard';
import TaskDetailsModal from '@components/Dashboard/TaskDetailsModal';
import PageTransition from '@components/Common/PageTransition';
import { Filter, CheckSquare } from 'lucide-react';

const mockTasks: TaskData[] = [
  {
    title: 'Redesign onboarding flow',
    department: 'NimbusCRM · Design System',
    priority: 'High',
    progress: 65,
    taskDate: '24 Aug 2026',
    dueDate: 'today, 6:00 PM',
    assignedBy: 'Priya Nair',
    status: 'In Progress',
    borderColor: 'border-red-500',
  },
  {
    title: 'QA regression — checkout module',
    department: 'Atlas Billing · QA',
    priority: 'Medium',
    progress: 40,
    taskDate: '24 Aug 2026',
    dueDate: 'tomorrow, 2:00 PM',
    assignedBy: 'Daniel Osei',
    status: 'In Progress',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Write Q3 sprint retro notes',
    department: 'Team Ops · Documentation',
    priority: 'Low',
    progress: 15,
    taskDate: '24 Aug 2026',
    dueDate: 'Fri, 5:00 PM',
    assignedBy: 'Priya Nair',
    status: 'Not Started',
    borderColor: 'border-green-500',
  },
  {
    title: 'Update UI components to new Teal brand',
    department: 'Core Frontend',
    priority: 'High',
    progress: 100,
    taskDate: '23 Aug 2026',
    dueDate: 'today, 12:00 PM',
    assignedBy: 'Alex Morgan',
    status: 'Completed',
    borderColor: 'border-teal-primary',
  },
  {
    title: 'Review PR for Authentication',
    department: 'Engineering',
    priority: 'Medium',
    progress: 90,
    taskDate: '22 Aug 2026',
    dueDate: 'Wed, 3:00 PM',
    assignedBy: 'Sarah Chen',
    status: 'Waiting Review',
    borderColor: 'border-amber-500',
  }
];

type FilterType = 'All' | 'Active' | 'Pending' | 'Completed';

const MyTasks = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters: FilterType[] = ['All', 'Active', 'Pending', 'Completed'];

  const filteredTasks = mockTasks.filter(task => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Active') return task.status === 'In Progress' || task.status === 'Not Started';
    if (activeFilter === 'Pending') return task.status === 'Waiting Review' || task.status === 'Pending Approval' || task.status === 'Changes Requested';
    if (activeFilter === 'Completed') return task.status === 'Completed' || task.status === 'Approved';
    return true;
  });

  return (
    <PageTransition>
      <div className="flex flex-col h-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">My Tasks</h1>
            <p className="text-sm text-gray-500">Manage all your assigned work and track progress.</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex bg-gray-50 p-1 rounded-lg border border-gray-100 w-fit">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-1.5 text-[13px] font-semibold rounded-md transition-colors ${
                  activeFilter === filter ? 'text-teal-primary' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {activeFilter === filter && (
                  <motion.div 
                    layoutId="activeTaskTab"
                    className="absolute inset-0 bg-white rounded-md shadow-sm border border-gray-200"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>
          
          <button className="flex items-center gap-2 px-3 py-1.5 text-[12px] font-bold text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 rounded-lg transition-colors w-fit">
            <Filter size={14} />
            More Filters
          </button>
        </div>

        {/* Task Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTasks.map((task, idx) => (
            <TaskCard 
              key={idx} 
              task={task} 
              onContinue={() => {
                setSelectedTask(task);
                setIsModalOpen(true);
              }}
            />
          ))}
          
          {filteredTasks.length === 0 && (
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-gray-100 border-dashed">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3">
                <CheckSquare size={20} className="text-gray-400" />
              </div>
              <h3 className="text-[14px] font-bold text-gray-900 mb-1">No tasks found</h3>
              <p className="text-[13px] text-gray-500">You don't have any {activeFilter.toLowerCase()} tasks at the moment.</p>
            </div>
          )}
        </div>

        <TaskDetailsModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          task={selectedTask} 
        />
      </div>
    </PageTransition>
  );
};

export default MyTasks;
