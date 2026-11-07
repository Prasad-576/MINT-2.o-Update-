import { useState } from 'react';
import { Link } from 'react-router-dom';
import Greeting from '@components/Dashboard/Greeting';
import StatCard from '@components/Dashboard/StatCard';
import TaskCard, { TaskData } from '@components/Dashboard/TaskCard';
import DeadlineList from '@components/Dashboard/DeadlineList';
import CalendarWidget from '@components/Dashboard/CalendarWidget';
import UpcomingMeetings from '@components/Dashboard/MeetingItem';
import ChatbotWidget from '@components/Dashboard/ChatbotWidget';
import TaskDetailsModal from '@components/Dashboard/TaskDetailsModal';
import RecentTasks from '@components/Dashboard/RecentTasks';
import PageTransition from '@components/Common/PageTransition';
import { CheckSquare, Clock, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tasks: TaskData[] = [
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
  ];

  return (
    <PageTransition>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
        {/* Left Main Content */}
      <div className="flex flex-col">
        <Greeting />
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<CheckSquare className="text-teal-primary" size={20} />}
            iconBg="bg-teal-primary/10"
            count="12"
            label="Active Tasks"
          />
          <StatCard
            icon={<Clock className="text-orange-600" size={20} />}
            iconBg="bg-orange-100"
            count="4"
            label="Pending Review"
          />
          <StatCard
            icon={<AlertTriangle className="text-red-600" size={20} />}
            iconBg="bg-red-100"
            count="2"
            label="Overdue Tasks"
          />
        </div>

        {/* Priority Tasks */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-bold text-gray-900">Today's priority tasks</h2>
            <Link to="/dashboard/tasks" className="text-sm font-semibold text-teal-primary hover:text-teal-hover">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tasks.map((task, idx) => (
              <TaskCard 
                key={idx} 
                task={task} 
                onContinue={() => {
                  setSelectedTask(task);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="mb-8">
          <DeadlineList />
        </div>
        {/* Recent Tasks */}
        <RecentTasks />
      </div>

      {/* Right Sidebar */}
      <div className="flex flex-col gap-6">
        <CalendarWidget />
        <UpcomingMeetings />
        <ChatbotWidget />
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

export default Dashboard;
