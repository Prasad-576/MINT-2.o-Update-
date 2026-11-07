import Card from '../Common/Card';
import Avatar from '../Common/Avatar';
import Button from '../Common/Button';
import { Employee, mockDepartments } from '../../data/mockData';

const FounderEmployeeCard = ({ employee }: { employee: Employee }) => {
  const departmentName = mockDepartments.find(d => d.id === employee.departmentId)?.name || 'Unknown';

  return (
    <Card hoverEffect className="!p-4 flex flex-col h-full border-gray-100 shadow-sm rounded-lg">
      {/* Header: Avatar & Info */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className="relative">
          <Avatar initials={employee.avatarInitials} size="md" className="bg-teal-primary text-white" />
          {/* Online Indicator */}
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <div>
          <h3 className="text-[13px] font-semibold text-gray-900 leading-tight">{employee.name}</h3>
          <p className="text-[11px] text-gray-500 mt-0.5">{employee.role} · {departmentName}</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex justify-between items-center mb-4 px-2 border-b border-gray-100 pb-3">
        <div className="text-center">
          <p className="text-[14px] font-bold text-gray-900 mb-0.5">{employee.completedTasks + employee.activeTasks}</p>
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Total</p>
        </div>
        <div className="text-center">
          <p className="text-[14px] font-bold text-green-600 mb-0.5">{employee.completedTasks}</p>
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Done</p>
        </div>
        <div className="text-center">
          <p className="text-[14px] font-bold text-teal-primary mb-0.5">{employee.activeTasks}</p>
          <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Pending</p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto grid grid-cols-2 gap-2">
        <Button variant="outline" className="py-1.5 justify-center text-[12px] font-semibold text-gray-700 border-gray-200">
          Profile
        </Button>
        <Button variant="outline" className="py-1.5 justify-center text-[12px] font-semibold text-teal-primary border-gray-200">
          Assign
        </Button>
      </div>
    </Card>
  );
};

export default FounderEmployeeCard;
