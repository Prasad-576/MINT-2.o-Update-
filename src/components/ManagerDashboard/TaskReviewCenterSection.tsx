import { useState } from 'react';
import ReviewSubmissionCard from './ReviewSubmissionCard';
import Badge from '../Common/Badge';
import { mockReviewTasks, mockEmployees } from '../../data/mockData';
import { AnimatePresence, motion } from 'framer-motion';

const TaskReviewCenterSection = () => {
  // Initialize queue with all waiting reviews
  const [reviewQueue, setReviewQueue] = useState(
    mockReviewTasks.filter(t => t.status === 'Waiting Review')
  );

  const handleAction = (taskId: string) => {
    // Remove the handled task from the queue
    setReviewQueue(prevQueue => prevQueue.filter(t => t.id !== taskId));
  };

  const currentTask = reviewQueue[0];
  const currentEmployee = currentTask ? mockEmployees.find(emp => emp.id === currentTask.employeeId) : null;

  return (
    <div className="mt-8 mb-6">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-gray-900">Task review center</h2>
        <Badge color="blue" className="bg-teal-primary/10 text-teal-hover px-3 py-1 rounded-md shadow-sm">
          {reviewQueue.length} waiting review
        </Badge>
      </div>

      {/* Review Submission Queue */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {currentTask && currentEmployee ? (
            <motion.div
              key={currentTask.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <ReviewSubmissionCard 
                task={currentTask} 
                employee={currentEmployee} 
                onAction={() => handleAction(currentTask.id)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center p-8 bg-white rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[14px] font-bold text-gray-900 mb-1">All caught up!</h3>
              <p className="text-[12px] text-gray-500 font-medium">No tasks currently waiting for review.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TaskReviewCenterSection;
