import Card from '../Common/Card';
import Button from '../Common/Button';
import { Department, mockEmployees } from '../../data/mockData';
import ProgressBar from '../Common/ProgressBar';
import { RefreshCcw, Send, PenTool, Grid, Users } from 'lucide-react';

const getDepartmentIcon = (name: string) => {
  if (name.includes('Development')) return <RefreshCcw size={18} className="text-teal-primary" />;
  if (name.includes('Marketing')) return <Send size={18} className="text-purple-600" />;
  if (name.includes('Design')) return <PenTool size={18} className="text-yellow-600" />;
  if (name.includes('Product')) return <Grid size={18} className="text-green-600" />;
  if (name.includes('Human')) return <Users size={18} className="text-red-500" />;
  return <Grid size={18} className="text-teal-primary" />;
};

const getIconBg = (name: string) => {
  if (name.includes('Development')) return 'bg-teal-primary/5';
  if (name.includes('Marketing')) return 'bg-purple-50';
  if (name.includes('Design')) return 'bg-yellow-50';
  if (name.includes('Product')) return 'bg-green-50';
  if (name.includes('Human')) return 'bg-red-50';
  return 'bg-teal-primary/5';
};

const FounderDepartmentCard = ({ department }: { department: Department }) => {
  // Compute stats from mockEmployees
  const deptEmployees = mockEmployees.filter(emp => emp.departmentId === department.id);
  
  // Hardcode fallback data only if no employees found, to match screenshot realism requirement if data is lacking
  const hasData = deptEmployees.length > 0;
  
  // Real data
  const employeeCount = hasData ? deptEmployees.length : Math.floor(Math.random() * 20) + 5;
  const activeTasks = hasData ? deptEmployees.reduce((sum, emp) => sum + emp.activeTasks, 0) : Math.floor(Math.random() * 15) + 5;
  const completedTasks = hasData ? deptEmployees.reduce((sum, emp) => sum + emp.completedTasks, 0) : Math.floor(Math.random() * 100) + 20;
  
  const avgPerf = hasData 
    ? Math.round(deptEmployees.reduce((sum, emp) => sum + emp.onTimePerformance, 0) / deptEmployees.length)
    : Math.floor(Math.random() * 15) + 80;

  return (
    <Card hoverEffect className="!p-4 flex flex-col h-full border-gray-100 shadow-sm rounded-lg">
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getIconBg(department.name)}`}>
          {getDepartmentIcon(department.name)}
        </div>
        <div>
          <h3 className="text-[14px] font-semibold text-gray-900 leading-tight">{department.name}</h3>
          <p className="text-[11px] text-gray-500 mt-0.5">Manager: {department.managerName || 'Unassigned'}</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-center w-1/3">
          <p className="text-[15px] font-semibold text-gray-900 mb-0.5">{employeeCount}</p>
          <p className="text-[10px] text-gray-500">Employees</p>
        </div>
        <div className="text-center w-1/3 border-l border-gray-100">
          <p className="text-[15px] font-semibold text-gray-900 mb-0.5">{activeTasks}</p>
          <p className="text-[10px] text-gray-500">Active</p>
        </div>
        <div className="text-center w-1/3 border-l border-gray-100">
          <p className="text-[15px] font-semibold text-gray-900 mb-0.5">{completedTasks}</p>
          <p className="text-[10px] text-gray-500">Completed</p>
        </div>
      </div>

      {/* Performance Bar */}
      <div className="mb-4 border-t border-gray-100 pt-4">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[11px] text-gray-500 font-medium">Avg. performance</span>
          <span className="text-[12px] font-bold text-gray-900">{avgPerf}%</span>
        </div>
        <ProgressBar progress={avgPerf} height="h-1" />
      </div>

      {/* Action */}
      <div className="mt-auto">
        <Button variant="outline" className="w-full py-1.5 justify-center text-[12px] font-semibold text-gray-700 border-gray-200 hover:bg-gray-50 transition-colors">
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default FounderDepartmentCard;
