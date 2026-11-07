import { useState } from 'react';
import StatCard from '@components/Dashboard/StatCard';
import TaskCard, { TaskData } from '@components/Dashboard/TaskCard';
import ManagerCalendarWidget from '@components/ManagerDashboard/ManagerCalendarWidget';
import ManagerUpcomingMeetings from '@components/ManagerDashboard/ManagerUpcomingMeetings';
import TaskDetailsModal from '@components/Dashboard/TaskDetailsModal';
import AssignTaskSection from '@components/ManagerDashboard/AssignTaskSection';
import DepartmentEmployeesSection from '@components/ManagerDashboard/DepartmentEmployeesSection';
import TaskReviewCenterSection from '@components/ManagerDashboard/TaskReviewCenterSection';
import ManagerRecentSubmissions from '@components/ManagerDashboard/ManagerRecentSubmissions';
import PageTransition from '@components/Common/PageTransition';
import { CheckSquare, Clock, CheckCircle, ArrowUpRight, Users } from 'lucide-react';

const ManagerDashboard = () => {
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const managerTasks: TaskData[] = [
    {
      title: 'Q3 campaign budget approval',
      department: 'Growth Marketing · Planning',
      priority: 'High',
      progress: 0,
      taskDate: '24 Aug 2026',
      dueDate: 'today, 5:00 PM',
      assignedBy: 'David Kim, Founder',
      status: 'In Progress',
      borderColor: 'border-red-500',
    },
    {
      title: 'Review brand guidelines v2',
      department: 'Brand · Documentation',
      priority: 'Medium',
      progress: 0,
      taskDate: '24 Aug 2026',
      dueDate: 'tomorrow, 3:00 PM',
      assignedBy: 'David Kim, Founder',
      status: 'In Progress',
      borderColor: 'border-orange-500',
    },
    {
      title: 'Prep monthly department report',
      department: 'Team Ops · Reporting',
      priority: 'Low',
      progress: 0,
      taskDate: '24 Aug 2026',
      dueDate: 'Fri, 6:00 PM',
      assignedBy: 'Self-assigned',
      status: 'Not Started',
      borderColor: 'border-green-500',
    },
  ];

  return (
    <PageTransition>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-8">
        {/* Left Main Content */}
      <div className="flex flex-col">
        
        {/* Manager Greeting Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold text-gray-900">Good morning, Sarah</h1>
            <span className="text-2xl animate-wave origin-bottom-right">👋</span>
          </div>
          <p className="text-teal-primary font-semibold text-sm mb-2">Marketing Department Manager</p>
          <p className="text-gray-500 text-sm">Manage your department efficiently and review employee submissions.</p>
        </div>
        
        {/* Statistics Cards - 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 mb-8">
          <StatCard
            icon={<CheckSquare className="text-teal-primary" size={20} />}
            iconBg="bg-teal-primary/10"
            count="34"
            label="Tasks Assigned"
            trend="up"
            trendText="12% vs last month"
          />
          <StatCard
            icon={<Clock className="text-orange-600" size={20} />}
            iconBg="bg-orange-100"
            count="5"
            label="Pending Review"
            trend="neutral"
            trendText="steady this week"
          />
          <StatCard
            icon={<CheckCircle className="text-green-600" size={20} />}
            iconBg="bg-green-100"
            count="41"
            label="Completed This Month"
            trend="up"
            trendText="8% vs last month"
          />
          <StatCard
            icon={<ArrowUpRight className="text-purple-600" size={20} />}
            iconBg="bg-purple-100"
            count="9"
            label="Sent to Founder"
            trend="up"
            trendText="3 this week"
          />
          <StatCard
            icon={<Users className="text-indigo-600" size={20} />}
            iconBg="bg-indigo-100"
            count="8"
            label="Department Employees"
            trendText="6 online now"
          />
        </div>

        {/* My Active Tasks */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-bold text-gray-900">My active tasks</h2>
            <a href="#" className="text-sm font-semibold text-teal-primary hover:text-teal-hover">View all</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {managerTasks.map((task, idx) => (
              <TaskCard 
                key={idx} 
                task={task} 
                hideProgress={true}
                onContinue={() => {
                  setSelectedTask(task);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        </div>

        {/* Assign New Task Section */}
        <AssignTaskSection />

        {/* Department Employees Section */}
        <DepartmentEmployeesSection />

        {/* Task Review Center Section */}
        <TaskReviewCenterSection />

        {/* Recent Submissions Section */}
        <ManagerRecentSubmissions />
      </div>

      {/* Right Sidebar */}
      <div className="flex flex-col gap-4">
        <ManagerCalendarWidget />
        <ManagerUpcomingMeetings />
      </div>
      
      {/* Reusable Task Details Modal */}
      <TaskDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        task={selectedTask} 
      />
    </div>
    </PageTransition>
  );
};

export default ManagerDashboard;
