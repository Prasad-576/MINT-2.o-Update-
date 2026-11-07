import { useState } from 'react';
import EmployeeGridCard from './EmployeeGridCard';
import { mockEmployees, mockDepartments } from '../../data/mockData';
import Card from '../Common/Card';

const DepartmentEmployeesSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const filteredEmployees = selectedDepartment === 'all'
    ? mockEmployees
    : mockEmployees.filter(emp => emp.departmentId === selectedDepartment);

  return (
    <Card className="mt-8 mb-8 !p-5 md:!p-6 overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-[15px] font-bold text-gray-900">Department employees</h2>
        
        <div className="flex items-center gap-3">
          {/* Simple Department Filter */}
          <select 
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-3 py-1.5 text-[12px] rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-primary focus:border-transparent outline-none bg-white font-medium text-gray-700 shadow-sm cursor-pointer"
          >
            <option value="all">All Departments</option>
            {mockDepartments.map(dept => (
              <option key={dept.id} value={dept.id}>{dept.name}</option>
            ))}
          </select>
          
          {/* Manage Team Action */}
          <button className="text-[12px] font-bold text-teal-primary hover:text-teal-hover transition-colors bg-teal-primary/5 hover:bg-teal-primary/10 px-3 py-1.5 rounded-lg">
            Manage team
          </button>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredEmployees.map(employee => (
          <EmployeeGridCard key={employee.id} employee={employee} />
        ))}
      </div>
    </Card>
  );
};

export default DepartmentEmployeesSection;
