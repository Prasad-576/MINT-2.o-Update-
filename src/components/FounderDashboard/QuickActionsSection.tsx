import Card from '../Common/Card';
import { Plus, Grid, UserPlus, User, FileText, TrendingUp } from 'lucide-react';

const QuickActionCard = ({
  icon,
  iconBg,
  iconColor,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <Card hoverEffect className="flex flex-col !p-4 border-gray-100 cursor-pointer transition-all">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${iconBg} ${iconColor}`}>
        {icon}
      </div>
      <h3 className="text-[13px] font-semibold text-gray-900 mb-0.5 leading-tight">{title}</h3>
      <p className="text-[11px] text-gray-500">{subtitle}</p>
    </Card>
  );
};

const QuickActionsSection = () => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold text-gray-900">Quick actions</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <QuickActionCard
          icon={<Plus size={20} strokeWidth={2.5} />}
          iconBg="bg-teal-primary/5"
          iconColor="text-teal-primary"
          title="Assign Task"
          subtitle="Delegate to any level"
        />
        <QuickActionCard
          icon={<Grid size={20} strokeWidth={2.5} />}
          iconBg="bg-orange-50"
          iconColor="text-orange-600"
          title="Create Department"
          subtitle="Structure your org"
        />
        <QuickActionCard
          icon={<UserPlus size={20} strokeWidth={2.5} />}
          iconBg="bg-green-50"
          iconColor="text-green-600"
          title="Add Employee"
          subtitle="Onboard new hires"
        />
        <QuickActionCard
          icon={<User size={20} strokeWidth={2.5} />}
          iconBg="bg-teal-primary/5"
          iconColor="text-teal-primary"
          title="Add Manager"
          subtitle="Promote or hire"
        />
        <QuickActionCard
          icon={<FileText size={20} strokeWidth={2.5} />}
          iconBg="bg-purple-50"
          iconColor="text-purple-600"
          title="Generate Report"
          subtitle="Export company data"
        />
        <QuickActionCard
          icon={<TrendingUp size={20} strokeWidth={2.5} />}
          iconBg="bg-orange-50"
          iconColor="text-orange-600"
          title="View Analytics"
          subtitle="Company-wide trends"
        />
      </div>
    </div>
  );
};

export default QuickActionsSection;
