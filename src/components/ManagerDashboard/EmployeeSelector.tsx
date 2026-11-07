import React from 'react';
import { mockDepartments, mockEmployees } from '../../data/mockData';
import { CheckSquare, Clock } from 'lucide-react';

interface EmployeeSelectorProps {
  selectedDepartment: string;
  setSelectedDepartment: (dept: string) => void;
  selectedEmployee: string;
  setSelectedEmployee: (emp: string) => void;
}

const EmployeeSelector = ({
  selectedDepartment,
  setSelectedDepartment,
  selectedEmployee,
  setSelectedEmployee,
}: EmployeeSelectorProps) => {
  const filteredEmployees = mockEmployees.filter(
    (emp) => emp.departmentId === selectedDepartment
  );

  const activeEmployeeData = mockEmployees.find((emp) => emp.id === selectedEmployee);

  const handleDeptChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDepartment(e.target.value);
    setSelectedEmployee(''); // Reset employee when department changes
  };

  const handleEmpChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedEmployee(e.target.value);
  };

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-[11px] font-bold text-gray-900 mb-2 uppercase tracking-wider">
        Select Department
      </h3>
      <select
        value={selectedDepartment}
        onChange={handleDeptChange}
        className="w-full px-3 py-2 mb-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-primary focus:border-transparent outline-none transition-all bg-white appearance-none text-[13px]"
      >
        <option value="" disabled>Select Department</option>
        {mockDepartments.map((dept) => (
          <option key={dept.id} value={dept.id}>
            {dept.name}
          </option>
        ))}
      </select>

      <h3 className="text-[11px] font-bold text-gray-900 mb-2 uppercase tracking-wider">
        Select Employee
      </h3>
      <select
        value={selectedEmployee}
        onChange={handleEmpChange}
        disabled={!selectedDepartment}
        className="w-full px-3 py-2 mb-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-primary focus:border-transparent outline-none transition-all bg-white appearance-none text-[13px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <option value="" disabled>
          {selectedDepartment ? 'Select Employee' : 'Select a department first'}
        </option>
        {filteredEmployees.map((emp) => (
          <option key={emp.id} value={emp.id}>
            {emp.name}
          </option>
        ))}
      </select>

      {/* Employee Preview Card */}
      {activeEmployeeData && (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm mt-2">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-10 h-10 rounded-full bg-teal-primary/10 text-teal-hover flex items-center justify-center font-bold text-sm">
              {activeEmployeeData.avatarInitials}
            </div>
            <div>
              <h4 className="text-[13px] font-bold text-gray-900 leading-tight">
                {activeEmployeeData.name}
              </h4>
              <p className="text-[11px] text-gray-500 font-medium">{activeEmployeeData.role}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center text-orange-600">
                <CheckSquare size={12} />
              </div>
              <div>
                <p className="text-[9px] text-gray-500 font-semibold uppercase tracking-wide">Active</p>
                <p className="text-[11px] font-bold text-gray-900">{activeEmployeeData.activeTasks} Tasks</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center text-green-600">
                <Clock size={12} />
              </div>
              <div>
                <p className="text-[9px] text-gray-500 font-semibold uppercase tracking-wide">On-Time</p>
                <p className="text-[11px] font-bold text-gray-900">{activeEmployeeData.onTimePerformance}%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeSelector;
