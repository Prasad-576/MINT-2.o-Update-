import Card from '../Common/Card';
import Avatar from '../Common/Avatar';
import Badge from '../Common/Badge';
import { mockReviewTasks, mockEmployees, ReviewTask } from '../../data/mockData';

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High': return 'red';
    case 'Medium': return 'orange';
    case 'Low': return 'green';
    default: return 'gray';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Waiting Review': return 'blue';
    case 'Changes Requested': return 'orange';
    case 'Forwarded': return 'purple';
    case 'Rejected': return 'red';
    case 'Approved': return 'green';
    default: return 'gray';
  }
};

const ManagerRecentSubmissions = () => {
  return (
    <Card className="mt-8 mb-6 !p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[17px] font-bold text-gray-900">Recent submissions</h2>
        <a href="#" className="text-[13px] font-bold text-teal-primary hover:text-teal-hover transition-colors">View all</a>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="pb-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider w-[220px]">Employee</th>
              <th className="pb-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider w-[280px]">Task</th>
              <th className="pb-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider w-[140px]">Submitted</th>
              <th className="pb-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider w-[100px]">Priority</th>
              <th className="pb-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider w-[140px]">Status</th>
              <th className="pb-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider w-[80px]">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockReviewTasks.map((task: ReviewTask) => {
              const employee = mockEmployees.find(emp => emp.id === task.employeeId);
              if (!employee) return null;

              return (
                <tr key={task.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-4 align-middle">
                    <div className="flex items-center gap-3">
                      <Avatar initials={employee.avatarInitials} size="md" className="bg-teal-primary text-white font-semibold text-sm" />
                      <span className="text-[13px] font-bold text-gray-900 leading-tight w-16 whitespace-pre-wrap">{employee.name.replace(' ', '\n')}</span>
                    </div>
                  </td>
                  <td className="py-4 align-middle pr-4">
                    <span className="text-[13px] font-bold text-gray-900 leading-snug block">{task.taskTitle}</span>
                  </td>
                  <td className="py-4 align-middle">
                    <span className="text-[13px] text-gray-700">{task.submittedTime}</span>
                  </td>
                  <td className="py-4 align-middle">
                    <Badge color={getPriorityColor(task.priority)} className="font-bold py-1 px-2 text-[11px]">
                      {task.priority}
                    </Badge>
                  </td>
                  <td className="py-4 align-middle">
                    <Badge color={getStatusColor(task.status)} className="font-bold py-1 px-3 text-[11px] whitespace-nowrap">
                      {task.status}
                    </Badge>
                  </td>
                  <td className="py-4 align-middle">
                    <button className="text-[13px] font-bold text-teal-primary hover:text-blue-800 transition-colors">
                      Review
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ManagerRecentSubmissions;
