import Card from '../Common/Card';
import Badge from '../Common/Badge';
import ProgressBar from '../Common/ProgressBar';
import Button from '../Common/Button';
import { Calendar } from 'lucide-react';

export interface TaskData {
  title: string;
  department: string;
  priority: 'High' | 'Medium' | 'Low';
  progress: number;
  taskDate?: string;
  dueDate: string;
  assignedBy: string;
  status: string;
  borderColor: string;
}

const priorityColors = {
  High: 'text-red-600',
  Medium: 'text-amber-600',
  Low: 'text-green-600',
} as const;

const TaskCard = ({ task, onContinue, hideProgress = false }: { task: TaskData; onContinue?: () => void; hideProgress?: boolean }) => {
  const getStatusColor = (status: string): any => {
    switch (status) {
      case 'Completed':
      case 'Approved':
        return 'green';
      case 'In Progress':
        return 'indigo';
      case 'Pending Approval':
      case 'Waiting Review':
        return 'amber';
      case 'Changes Requested':
        return 'orange';
      default:
        return 'gray';
    }
  };

  return (
    <Card hoverEffect className={`relative overflow-hidden !p-4 border-l-4 ${task.borderColor} flex flex-col h-full bg-white`}>
      <div className="flex justify-between items-start mb-1 gap-2">
        <h3 className="text-[13px] font-semibold text-gray-900 leading-tight line-clamp-2">{task.title}</h3>
        <span className={`text-[11px] font-bold ${priorityColors[task.priority]}`}>{task.priority}</span>
      </div>
      <p className="text-[10px] font-medium text-gray-400 mb-3">{task.department}</p>
      
      {!hideProgress && (
        <div className="flex items-center justify-between mb-3">
          <div className="flex-1 mr-3">
            <ProgressBar progress={task.progress} height="h-1" />
          </div>
          <span className="text-[11px] font-semibold text-gray-700">{task.progress}%</span>
        </div>
      )}
      
      <div className="flex flex-col gap-1 mb-4">
        <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
          <Calendar size={12} />
          <span>Due {task.dueDate}</span>
        </div>
        <div className="text-[11px] text-gray-500">
          By <span className="font-medium text-gray-700">{task.assignedBy}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-auto">
        <Badge color={getStatusColor(task.status)}>{task.status}</Badge>
        <Button onClick={onContinue} variant="outline" className="px-3 py-1 text-[11px] rounded-md shadow-sm border-gray-200 font-semibold hover:bg-gray-50 transition-colors text-teal-primary border-teal-primary/20">
          Continue
        </Button>
      </div>
    </Card>
  );
};

export default TaskCard;
