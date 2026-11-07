import { useState, useRef } from 'react';
import Modal from '../Common/Modal';
import Badge from '../Common/Badge';
import Button from '../Common/Button';
import { TaskData } from './TaskCard';
import { Image as ImageIcon, Video, Link as LinkIcon, FileText, Trash2, File, ExternalLink, User, Calendar, Clock } from 'lucide-react';

interface TaskDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: TaskData | null;
}

const TaskDetailsModal = ({ isOpen, onClose, task }: TaskDetailsModalProps) => {
  const [notes, setNotes] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [linkUrl, setLinkUrl] = useState('');
  const [showLinkInput, setShowLinkInput] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [acceptType, setAcceptType] = useState<string>('*/*');

  const getStatusColor = (status: string): any => {
    switch (status) {
      case 'Completed':
      case 'Approved': return 'green';
      case 'In Progress': return 'indigo';
      case 'Pending Approval':
      case 'Waiting Review': return 'amber';
      case 'Changes Requested': return 'orange';
      default: return 'gray';
    }
  };

  if (!task) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUploadClick = (type: 'image' | 'video' | 'pdf') => {
    if (type === 'image') setAcceptType('image/*');
    else if (type === 'video') setAcceptType('video/*');
    else if (type === 'pdf') setAcceptType('application/pdf');
    setShowLinkInput(false);
    // Use timeout to ensure state update before click
    setTimeout(() => {
      fileInputRef.current?.click();
    }, 0);
  };

  const handleLinkClick = () => {
    setShowLinkInput(!showLinkInput);
  };

  const hasImages = files.some(f => f.type.startsWith('image/'));
  const hasVideos = files.some(f => f.type.startsWith('video/'));
  const hasPdfs = files.some(f => f.type === 'application/pdf');
  const hasLink = linkUrl.trim().length > 0;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Task Details" maxWidth="max-w-2xl">
      <div className="p-5 md:p-6">
        
        {/* Task Title & Description */}
        <div className="mb-5">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{task.title}</h1>
          <p className="text-[13px] text-gray-700 leading-relaxed whitespace-pre-wrap">
            Please complete the following task before the specified due date. Ensure all required assets are uploaded and any notes are documented. If you need any clarification, reach out to {task.assignedBy}.
          </p>
        </div>

        {/* Status */}
        <div className="mb-4">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mr-3">Status</span>
          <Badge color={getStatusColor(task.status)}>{task.status}</Badge>
        </div>

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] text-gray-500 mb-6 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
          <div className="flex items-center gap-1.5">
            <User size={13} className="text-gray-400" />
            <span>Assigned by <span className="font-semibold text-gray-700">{task.assignedBy}</span></span>
          </div>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="text-gray-400" />
            <span>Task Date <span className="font-semibold text-gray-700">{task.taskDate || '24 Aug 2026'}</span></span>
          </div>
          <span className="text-gray-300 hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5">
            <Clock size={13} className="text-gray-400" />
            <span>Deadline <span className="font-semibold text-gray-700">{task.dueDate}</span></span>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[14px] font-bold text-gray-900">Upload Task</h3>
          </div>
          
          <input 
            type="file" 
            ref={fileInputRef}
            multiple 
            accept={acceptType}
            onChange={handleFileChange} 
            className="hidden"
          />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {/* Image Card */}
            <button 
              onClick={() => handleUploadClick('image')}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border ${hasImages ? 'border-teal-500 bg-teal-50' : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'} transition-all group`}
            >
              <div className={`p-2 rounded-lg mb-2 ${hasImages ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-500 group-hover:text-gray-700'}`}>
                <ImageIcon size={18} />
              </div>
              <span className={`text-[12px] font-bold ${hasImages ? 'text-teal-700' : 'text-gray-700'}`}>Image</span>
            </button>

            {/* Video Card */}
            <button 
              onClick={() => handleUploadClick('video')}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border ${hasVideos ? 'border-teal-500 bg-teal-50' : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'} transition-all group`}
            >
              <div className={`p-2 rounded-lg mb-2 ${hasVideos ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-500 group-hover:text-gray-700'}`}>
                <Video size={18} />
              </div>
              <span className={`text-[12px] font-bold ${hasVideos ? 'text-teal-700' : 'text-gray-700'}`}>Video</span>
            </button>

            {/* Link Card */}
            <button 
              onClick={handleLinkClick}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border ${showLinkInput || hasLink ? 'border-teal-500 bg-teal-50' : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'} transition-all group`}
            >
              <div className={`p-2 rounded-lg mb-2 ${showLinkInput || hasLink ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-500 group-hover:text-gray-700'}`}>
                <LinkIcon size={18} />
              </div>
              <span className={`text-[12px] font-bold ${showLinkInput || hasLink ? 'text-teal-700' : 'text-gray-700'}`}>Link</span>
            </button>

            {/* PDF Card */}
            <button 
              onClick={() => handleUploadClick('pdf')}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border ${hasPdfs ? 'border-teal-500 bg-teal-50' : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'} transition-all group`}
            >
              <div className={`p-2 rounded-lg mb-2 ${hasPdfs ? 'bg-teal-100 text-teal-600' : 'bg-gray-100 text-gray-500 group-hover:text-gray-700'}`}>
                <FileText size={18} />
              </div>
              <span className={`text-[12px] font-bold ${hasPdfs ? 'text-teal-700' : 'text-gray-700'}`}>PDF</span>
            </button>
          </div>

          {/* Link Input Field */}
          {showLinkInput && (
            <div className="mb-4 flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ExternalLink size={14} className="text-gray-400" />
                </div>
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://paste-your-link-here.com"
                  className="w-full pl-9 pr-3 py-2 text-[13px] border border-teal-300 bg-teal-primary/5"
                />
              </div>
              {linkUrl && (
                <button 
                  onClick={() => { setLinkUrl(''); setShowLinkInput(false); }}
                  className="text-[12px] font-bold text-gray-500 hover:text-red-500 px-2"
                >
                  Clear
                </button>
              )}
            </div>
          )}

          {/* Uploaded Files Preview */}
          {files.length > 0 && (
            <div className="space-y-2 mb-4">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-2.5 bg-gray-50 border border-gray-100 rounded-lg">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="text-gray-400 shrink-0">
                      {file.type.startsWith('image/') ? <ImageIcon size={14} /> : 
                       file.type.startsWith('video/') ? <Video size={14} /> : 
                       file.type === 'application/pdf' ? <FileText size={14} /> : 
                       <File size={14} />}
                    </div>
                    <span className="text-[12px] font-medium text-gray-700 truncate">{file.name}</span>
                  </div>
                  <button 
                    onClick={() => removeFile(index)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Description / Notes Section */}
        <div>
          <label className="block text-[13px] font-bold text-gray-900 mb-2">Description</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add progress updates, work summary, or any additional comments about your submission..."
            className="w-full border border-gray-200 rounded-xl p-3 text-[13px] focus:outline-none focus:ring-2 focus:ring-teal-300 focus:border-transparent min-h-[80px] resize-y bg-gray-50/50"
          ></textarea>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-end gap-3 px-5 py-4 border-t border-gray-100 bg-gray-50/50">
        <Button variant="ghost" className="text-[13px] py-1.5" onClick={onClose}>Cancel</Button>
        <Button variant="outline" className="text-[13px] py-1.5">Save Draft</Button>
        <Button variant="primary" className="text-[13px] py-1.5 px-5">Submit</Button>
      </div>
    </Modal>
  );
};

export default TaskDetailsModal;
