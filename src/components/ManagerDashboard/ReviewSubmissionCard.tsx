import Card from '../Common/Card';
import Avatar from '../Common/Avatar';
import Badge from '../Common/Badge';
import Button from '../Common/Button';
import AttachmentCard from '../Common/AttachmentCard';
import { ReviewTask, Employee } from '../../data/mockData';

interface ReviewSubmissionCardProps {
  task: ReviewTask;
  employee: Employee;
  onAction?: () => void;
}

const ReviewSubmissionCard = ({ task, employee, onAction }: ReviewSubmissionCardProps) => {
  return (
    <Card className="!p-4 border-gray-200 shadow-sm mb-0 bg-white overflow-hidden">
      
      {/* Header Row: Employee & Task Context */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-4 border-b border-gray-100 pb-3">
        
        {/* Left: Employee Info */}
        <div className="flex items-center gap-2.5">
          <Avatar initials={employee.avatarInitials} size="md" className="bg-indigo-100 text-indigo-700 text-sm" />
          <div>
            <h3 className="text-[14px] font-bold text-gray-900 leading-tight">{employee.name}</h3>
            <p className="text-[12px] font-medium text-gray-500">{employee.role}</p>
          </div>
        </div>

        {/* Right: Submitted Task Info */}
        <div className="md:text-right">
          <h4 className="text-[13px] font-bold text-gray-900 leading-tight mb-0.5">{task.taskTitle}</h4>
          <p className="text-[11px] font-semibold text-gray-500 mb-0.5">{task.project}</p>
          <p className="text-[10px] text-gray-400">{task.submittedTime}</p>
        </div>
      </div>

      {/* Status Row */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge color={task.priority === 'High' ? 'red' : task.priority === 'Medium' ? 'orange' : 'green'}>
          Priority: {task.priority}
        </Badge>
        <Badge color="blue" className="bg-teal-primary/10 text-teal-hover">
          {task.status}
        </Badge>
        <span className="text-[11px] font-semibold text-gray-500">
          Deadline: {task.deadline}
        </span>
      </div>

      {/* Submission Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <div>
          <h5 className="text-[10px] font-bold text-gray-900 mb-1.5 uppercase tracking-wide">Work Completed</h5>
          <p className="text-[12px] text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
            {task.workCompleted}
          </p>
        </div>
        <div>
          <h5 className="text-[10px] font-bold text-gray-900 mb-1.5 uppercase tracking-wide">Challenges Faced</h5>
          <p className="text-[12px] text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
            {task.challengesFaced || 'None reported.'}
          </p>
        </div>
        <div>
          <h5 className="text-[10px] font-bold text-gray-900 mb-1.5 uppercase tracking-wide">Remaining Work</h5>
          <p className="text-[12px] text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
            {task.remainingWork || 'None.'}
          </p>
        </div>
        <div>
          <h5 className="text-[10px] font-bold text-gray-900 mb-1.5 uppercase tracking-wide">Additional Notes</h5>
          <p className="text-[12px] text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
            {task.additionalNotes || 'None.'}
          </p>
        </div>
      </div>

      {/* Attachments */}
      {task.attachments.length > 0 && (
        <div className="mb-4">
          <h5 className="text-[10px] font-bold text-gray-900 mb-2 uppercase tracking-wide">Attachments</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {task.attachments.map((attachment, idx) => (
              <AttachmentCard key={idx} attachment={attachment} />
            ))}
          </div>
        </div>
      )}

      {/* Manager Review Notes */}
      <div className="mb-4 border-t border-gray-100 pt-4">
        <label htmlFor={`review-notes-${task.id}`} className="block text-[11px] font-bold text-gray-900 mb-1.5">
          Manager Review Notes
        </label>
        <textarea
          id={`review-notes-${task.id}`}
          placeholder="Add feedback for the employee before approving, requesting changes, or rejecting..."
          className="w-full px-3 py-2 min-h-[60px] rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-primary focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-y text-[12px] text-gray-700"
        ></textarea>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <Button onClick={onAction} className="w-full sm:w-auto bg-green-600 hover:bg-green-700 shadow-sm shadow-green-600/20 py-1.5 px-4 text-[12px]">
          Approve & Forward
        </Button>
        <Button onClick={onAction} className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 shadow-sm shadow-orange-500/20 py-1.5 px-4 text-white text-[12px]">
          Request Changes
        </Button>
        <Button onClick={onAction} className="w-full sm:w-auto sm:ml-auto bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 py-1.5 px-4 shadow-sm text-[12px]">
          Reject Task
        </Button>
      </div>

    </Card>
  );
};

export default ReviewSubmissionCard;
