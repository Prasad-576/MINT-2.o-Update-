import { useState } from 'react';
import StatCard from '@components/Dashboard/StatCard';
import TaskCard, { TaskData } from '@components/Dashboard/TaskCard';
import CalendarWidget from '@components/Dashboard/CalendarWidget';
import UpcomingMeetings from '@components/Dashboard/MeetingItem';
import DeadlineList from '@components/Dashboard/DeadlineList';
import TaskDetailsModal from '@components/Dashboard/TaskDetailsModal';
import PageTransition from '@components/Common/PageTransition';
import QuickActionsSection from '@components/FounderDashboard/QuickActionsSection';
import AssignTaskSection from '@components/ManagerDashboard/AssignTaskSection';
import TaskReviewCenterSection from '@components/ManagerDashboard/TaskReviewCenterSection';
import FounderEmployeeDirectorySection from '@components/FounderDashboard/FounderEmployeeDirectorySection';
import FounderDepartmentOverviewSection from '@components/FounderDashboard/FounderDepartmentOverviewSection';
import { Users, UserCog, Grid, CheckSquare, ClipboardCheck, CheckCircle } from 'lucide-react';

const FounderDashboard = () => {
  const [selectedTask, setSelectedTask] = useState<TaskData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const founderTasks: TaskData[] = [
    {
      title: 'Series A Investor update deck',
      department: 'Executive · Fundraising',
      priority: 'High',
      progress: 55,
      taskDate: '24 Aug 2026',
      dueDate: 'tomorrow, 8:00 AM',
      assignedBy: 'Self-assigned',
      status: 'In Progress',
      borderColor: 'border-red-500',
    },
    {
      title: 'Approve Q3 hiring plan',
      department: 'Human Resources · Planning',
      priority: 'Medium',
      progress: 30,
      taskDate: '24 Aug 2026',
      dueDate: 'Fri, 4:00 PM',
      assignedBy: 'Riya Kapoor, HR Manager',
      status: 'In Progress',
      borderColor: 'border-orange-500',
    },
    {
      title: 'Record all-hands opening remarks',
      department: 'Executive · Communications',
      priority: 'Low',
      progress: 10,
      taskDate: '24 Aug 2026',
      dueDate: '29 Jul, 8:00 AM',
      assignedBy: 'Self-assigned',
      status: 'Not Started',
      borderColor: 'border-green-500',
    },
  ];

  return (
    <PageTransition>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-6">
        {/* Left Main Content */}
        <div className="flex flex-col">
          
          {/* Greeting Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-xl font-bold text-gray-900">Good morning, David</h1>
              <span className="text-xl animate-wave origin-bottom-right">👋</span>
            </div>
            <p className="text-teal-primary font-semibold text-xs mb-1">Founder & CEO</p>
            <p className="text-gray-500 text-xs">Monitor your company, manage departments, and drive productivity.</p>
          </div>
          
          {/* Company Overview */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-semibold text-gray-900">Company overview</h2>
              <a href="#" className="text-xs font-semibold text-teal-primary hover:text-teal-hover">Full analytics</a>
            </div>
            
            {/* 3-column grid for 6 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <StatCard
                icon={<Users className="text-teal-primary" size={16} />}
                iconBg="bg-teal-primary/10"
                count="126"
                label="Total Employees"
                trend="up"
                trendText="6 new hires"
              />
              <StatCard
                icon={<UserCog className="text-purple-600" size={16} />}
                iconBg="bg-purple-100"
                count="5"
                label="Department Managers"
                trendText="Fully staffed"
              />
              <StatCard
                icon={<Grid className="text-indigo-600" size={16} />}
                iconBg="bg-indigo-100"
                count="5"
                label="Departments"
                trendText="No change"
              />
              <StatCard
                icon={<CheckSquare className="text-teal-primary" size={16} />}
                iconBg="bg-teal-primary/10"
                count="57"
                label="Open Tasks"
                trendText="Across all depts"
              />
              <StatCard
                icon={<ClipboardCheck className="text-red-500" size={16} />}
                iconBg="bg-red-100"
                count="6"
                label="Pending Approvals"
                trendText="Needs attention"
              />
              <StatCard
                icon={<CheckCircle className="text-green-600" size={16} />}
                iconBg="bg-green-100"
                count="312"
                label="Completed Tasks"
                trend="up"
                trendText="9% vs last month"
              />
            </div>
          </div>

          {/* My Tasks */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-semibold text-gray-900">My tasks</h2>
              <a href="#" className="text-xs font-semibold text-teal-primary hover:text-teal-hover">View all</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {founderTasks.map((task, idx) => (
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

          {/* Quick Actions */}
          <QuickActionsSection />

          {/* Assign Task Section */}
          <AssignTaskSection />

          {/* Task Approval Center */}
          <TaskReviewCenterSection />

          {/* Employee Directory */}
          <FounderEmployeeDirectorySection />

          {/* Department Overview */}
          <FounderDepartmentOverviewSection />
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-4">
          <CalendarWidget />
          <UpcomingMeetings />
          <DeadlineList />
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

export default FounderDashboard;
