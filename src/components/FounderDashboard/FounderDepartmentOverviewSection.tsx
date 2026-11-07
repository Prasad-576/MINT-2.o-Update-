import FounderDepartmentCard from './FounderDepartmentCard';
import { mockDepartments } from '../../data/mockData';

const FounderDepartmentOverviewSection = () => {
  return (
    <div className="mt-8 mb-6 bg-white p-5 rounded-lg shadow-sm border border-gray-200/60">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold text-gray-900">Department overview</h2>
        <a href="#" className="text-xs font-semibold text-teal-primary hover:text-teal-hover">Manage departments</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {mockDepartments.map(department => (
          <FounderDepartmentCard key={department.id} department={department} />
        ))}
      </div>
    </div>
  );
};

export default FounderDepartmentOverviewSection;
