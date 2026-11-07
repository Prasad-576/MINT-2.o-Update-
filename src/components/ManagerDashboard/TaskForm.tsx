import React, { useRef, useState } from 'react';
import { UploadCloud, X } from 'lucide-react';

export interface TaskFormData {
  title: string;
  project: string;
  priority: string;
  deadlineDate: string;
  deadlineTime: string;
  description: string;
}

interface TaskFormProps {
  formData: TaskFormData;
  setFormData: React.Dispatch<React.SetStateAction<TaskFormData>>;
}

const TaskForm = ({ formData, setFormData }: TaskFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="space-y-4 flex-1 flex flex-col">
        {/* Task Title */}
        <div>
          <label htmlFor="title" className="block text-[12px] font-semibold text-gray-700 mb-1.5">
            Task Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Design social media assets for launch"
            className="w-full px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:border-teal-primary outline-none transition-all duration-200 bg-white text-[13px]"
          />
        </div>

        {/* Project & Priority Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="project" className="block text-[12px] font-semibold text-gray-700 mb-1.5">
              Project
            </label>
            <select
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:border-teal-primary outline-none transition-all duration-200 bg-white appearance-none text-[13px] cursor-pointer"
            >
              <option value="" disabled>Select a project...</option>
              <option value="nimbus-crm">NimbusCRM</option>
              <option value="atlas-billing">Atlas Billing</option>
              <option value="team-ops">Team Ops</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority" className="block text-[12px] font-semibold text-gray-700 mb-1.5">
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:border-teal-primary outline-none transition-all duration-200 bg-white appearance-none text-[13px] cursor-pointer"
            >
              <option value="" disabled>Select priority...</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>

        {/* Deadline Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="deadlineDate" className="block text-[12px] font-semibold text-gray-700 mb-1.5">
              Deadline Date
            </label>
            <input
              type="date"
              id="deadlineDate"
              name="deadlineDate"
              value={formData.deadlineDate}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:border-teal-primary outline-none transition-all duration-200 bg-white text-gray-700 text-[13px] cursor-pointer"
            />
          </div>
          <div>
            <label htmlFor="deadlineTime" className="block text-[12px] font-semibold text-gray-700 mb-1.5">
              Deadline Time
            </label>
            <input
              type="time"
              id="deadlineTime"
              name="deadlineTime"
              value={formData.deadlineTime}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 hover:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:border-teal-primary outline-none transition-all duration-200 bg-white text-gray-700 text-[13px] cursor-pointer"
            />
          </div>
        </div>

        {/* Task Description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="block text-[12px] font-semibold text-gray-700 mb-1.5">
            Task Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide a detailed description of the task requirements..."
            className="w-full px-3 py-2 min-h-[80px] rounded-lg border border-gray-200 hover:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:border-teal-primary outline-none transition-all duration-200 bg-white resize-none text-[13px]"
          ></textarea>
        </div>

        {/* Attachments */}
        <div className="flex flex-col">
          <label className="block text-[12px] font-semibold text-gray-700 mb-1.5">
            Attachments
          </label>
          
          {!attachedFile ? (
            <div 
              className="w-full border-2 border-dashed border-gray-200 hover:border-blue-400 rounded-lg py-4 px-4 flex flex-col items-center justify-center bg-gray-50/50 hover:bg-teal-primary/5/30 transition-colors duration-200 cursor-pointer group"
              onClick={() => fileInputRef.current?.click()}
            >
              <UploadCloud className="text-gray-400 group-hover:text-blue-500 transition-colors mb-1.5" size={20} />
              <p className="text-[12px] font-semibold text-gray-700 mb-0.5">Click to upload or drag & drop</p>
              <p className="text-[10px] text-gray-500">SVG, PNG, JPG or PDF (max. 10MB)</p>
              <input 
                type="file" 
                className="hidden" 
                ref={fileInputRef} 
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <div className="w-full border border-gray-200 rounded-lg p-3 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 rounded-md bg-teal-primary/5 flex items-center justify-center shrink-0">
                  <UploadCloud className="text-teal-primary" size={16} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[12px] font-semibold text-gray-900 truncate">{attachedFile.name}</p>
                  <p className="text-[10px] text-gray-500">{(attachedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button 
                onClick={handleRemoveFile}
                className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors shrink-0"
              >
                <X size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
