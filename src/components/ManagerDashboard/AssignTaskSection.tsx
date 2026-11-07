import { useState } from 'react';
import TaskForm, { TaskFormData } from './TaskForm';
import EmployeeSelector from './EmployeeSelector';
import Button from '../Common/Button';
import Card from '../Common/Card';

const AssignTaskSection = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    project: '',
    priority: '',
    deadlineDate: '',
    deadlineTime: '',
    description: '',
  });

  const handleReset = () => {
    setSelectedDepartment('');
    setSelectedEmployee('');
    setFormData({
      title: '',
      project: '',
      priority: '',
      deadlineDate: '',
      deadlineTime: '',
      description: '',
    });
  };

  const handleAssign = () => {
    if (!formData.title || !selectedEmployee || !formData.project || !formData.priority || !formData.deadlineDate) {
      alert('Please fill in all required fields and select an employee.');
      return;
    }

    const payload = {
      ...formData,
      assigneeId: selectedEmployee,
      departmentId: selectedDepartment,
      status: 'Assigned',
    };

    console.log('Assigning Task:', payload);
    alert('Task successfully assigned!');
    handleReset();
  };

  const handleSaveDraft = () => {
    if (!formData.title) {
      alert('Please enter a task title to save as a draft.');
      return;
    }

    const payload = {
      ...formData,
      assigneeId: selectedEmployee,
      departmentId: selectedDepartment,
      status: 'Draft',
    };

    console.log('Saving Draft:', payload);
    alert('Draft saved successfully!');
  };

  return (
    <div className="mt-4 mb-6" id="assign-task">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-gray-900 mb-2">Assign new task</h2>
      </div>
      
      <Card className="!p-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          {/* Inner Left - Main Form Area */}
          <div className="flex flex-col h-full p-4 lg:p-6">
            <TaskForm formData={formData} setFormData={setFormData} />
          </div>
  
          {/* Inner Right - Employee Selection & Buttons */}
          <div className="flex flex-col p-4 lg:p-6 bg-gray-50/50">
            <EmployeeSelector 
              selectedDepartment={selectedDepartment} 
              setSelectedDepartment={setSelectedDepartment} 
              selectedEmployee={selectedEmployee} 
              setSelectedEmployee={setSelectedEmployee} 
            />
            
            <div className="flex flex-col gap-2.5 mt-auto pt-4">
              <Button variant="primary" className="w-full py-2.5 justify-center text-[13px] shadow-sm shadow-teal-primary/20" onClick={handleAssign}>
                Assign Task
              </Button>
              <Button variant="secondary" className="w-full py-2.5 justify-center text-[13px] bg-white border-gray-200" onClick={handleSaveDraft}>
                Save Draft
              </Button>
              <button 
                onClick={handleReset}
                className="mt-1 text-[12px] font-semibold text-gray-500 hover:text-gray-700 transition-colors self-center"
              >
                Reset fields
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AssignTaskSection;
