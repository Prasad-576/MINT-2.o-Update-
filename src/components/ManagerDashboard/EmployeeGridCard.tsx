import Card from '../Common/Card';
import Avatar from '../Common/Avatar';
import Button from '../Common/Button';
import { Employee } from '../../data/mockData';

interface EmployeeGridCardProps {
  employee: Employee;
}

const EmployeeGridCard = ({ employee }: EmployeeGridCardProps) => {
  return (
    <Card hoverEffect className="!p-3 flex flex-col h-full border-gray-100 shadow-sm">
      {/* Header: Avatar & Info */}
      <div className="flex items-center gap-2.5 mb-3">
        <div className="relative">
          <Avatar initials={employee.avatarInitials} size="md" className="bg-teal-primary/10 text-teal-hover" />
          {/* Online Indicator */}
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div className="overflow-hidden">
          <h3 className="text-[13px] font-bold text-gray-900 leading-tight truncate">{employee.name}</h3>
          <p className="text-[10px] font-medium text-gray-500 truncate mt-0.5">{employee.role}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="text-center p-1.5 bg-gray-50 rounded-lg">
          <p className="text-[13px] font-bold text-gray-900">{employee.activeTasks}</p>
          <p className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide">Active</p>
        </div>
        <div className="text-center p-1.5 bg-gray-50 rounded-lg">
          <p className="text-[13px] font-bold text-gray-900">{employee.completedTasks}</p>
          <p className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide">Done</p>
        </div>
        <div className="text-center p-1.5 bg-gray-50 rounded-lg">
          <p className="text-[13px] font-bold text-gray-900">{Math.max(1, Math.ceil(employee.activeTasks / 2))}</p>
          <p className="text-[9px] font-semibold text-gray-500 uppercase tracking-wide">Pending</p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto grid grid-cols-3 gap-2">
        <Button variant="primary" className="py-2 px-1 text-xs shadow-sm shadow-blue-500/20 col-span-1">
          Assign
        </Button>
        <Button variant="outline" className="py-2 px-1 text-xs col-span-1 border-gray-200">
          Profile
        </Button>
        <Button variant="outline" className="py-2 px-1 text-xs col-span-1 border-gray-200">
          History
        </Button>
      </div>
    </Card>
  );
};

export default EmployeeGridCard;
