import { useState } from 'react';
import FounderEmployeeCard from './FounderEmployeeCard';
import { mockEmployees, mockDepartments } from '../../data/mockData';
import Card from '../Common/Card';

const FounderEmployeeDirectorySection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  // Extract unique departments from the mockEmployees
  const activeDepartmentIds = Array.from(new Set(mockEmployees.map(emp => emp.departmentId)));
  const availableDepartments = activeDepartmentIds.map(id => {
    const dept = mockDepartments.find(d => d.id === id);
    return dept ? dept.name : 'Unknown';
  }).filter(name => name !== 'Unknown');

  // Add 'All' to the beginning
  const filterOptions = ['All', ...availableDepartments];

  // Filter employees
  const filteredEmployees = selectedDepartment === 'All' 
    ? mockEmployees 
    : mockEmployees.filter(emp => {
        const deptName = mockDepartments.find(d => d.id === emp.departmentId)?.name;
        return deptName === selectedDepartment;
      });

  return (
    <Card className="mt-8 mb-6 !p-5 md:!p-6 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 gap-3">
        <h2 className="text-base font-semibold text-gray-900">Employee directory</h2>
        <a href="#" className="text-xs font-semibold text-teal-primary hover:text-teal-hover">View full directory</a>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {filterOptions.map(option => (
          <button
            key={option}
            onClick={() => setSelectedDepartment(option)}
            className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-200 ${
              selectedDepartment === option
                ? 'bg-teal-primary text-white shadow-sm shadow-blue-600/30'
                : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      
      {/* Employee Grid */}
      {filteredEmployees.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredEmployees.map(employee => (
            <FounderEmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-200">
          <p className="text-sm font-medium text-gray-500">No employees found in this department.</p>
        </div>
      )}
    </Card>
  );
};

export default FounderEmployeeDirectorySection;
