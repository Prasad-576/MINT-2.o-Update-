export interface Employee {
  id: string;
  name: string;
  role: string;
  departmentId: string;
  avatarInitials: string;
  activeTasks: number;
  completedTasks: number;
  onTimePerformance: number; // percentage
  attendance?: number;
}

export interface Department {
  id: string;
  name: string;
  managerName?: string;
}

export const mockDepartments: Department[] = [
  { id: 'dept-dev', name: 'Web Development', managerName: 'Daniel Osei' },
  { id: 'dept-marketing', name: 'Marketing', managerName: 'Sarah Chen' },
  { id: 'dept-design', name: 'UI/UX Design', managerName: 'Marcus Lee' },
  { id: 'dept-product', name: 'Product Design', managerName: 'Priya Nair' },
  { id: 'dept-hr', name: 'Human Resources', managerName: 'Riya Kapoor' },
];

export const mockEmployees: Employee[] = [
  {
    id: 'emp-1',
    name: 'Alex Morgan',
    role: 'Product Designer',
    departmentId: 'dept-design',
    avatarInitials: 'AM',
    activeTasks: 4,
    completedTasks: 37,
    onTimePerformance: 98,
    attendance: 97,
  },
  {
    id: 'emp-2',
    name: 'Priya Nair',
    role: 'Marketing Specialist',
    departmentId: 'dept-marketing',
    avatarInitials: 'PN',
    activeTasks: 2,
    completedTasks: 41,
    onTimePerformance: 92,
    attendance: 95,
  },
  {
    id: 'emp-3',
    name: 'David Kim',
    role: 'Frontend Developer',
    departmentId: 'dept-dev',
    avatarInitials: 'DK',
    activeTasks: 5,
    completedTasks: 18,
    onTimePerformance: 88,
    attendance: 99,
  },
  {
    id: 'emp-4',
    name: 'Sarah Chen',
    role: 'Video Editor',
    departmentId: 'dept-video',
    avatarInitials: 'SC',
    activeTasks: 1,
    completedTasks: 55,
    onTimePerformance: 95,
    attendance: 98,
  },
  {
    id: 'emp-5',
    name: 'Michael Ross',
    role: 'Backend Developer',
    departmentId: 'dept-dev',
    avatarInitials: 'MR',
    activeTasks: 3,
    completedTasks: 22,
    onTimePerformance: 90,
    attendance: 96,
  }
];

export interface Attachment {
  name: string;
  type: 'image' | 'pdf' | 'doc' | 'link' | 'figma';
  sizeOrDomain: string; // e.g. "2.4 MB" or "figma.com"
}

export interface ReviewTask {
  id: string;
  employeeId: string;
  taskTitle: string;
  project: string;
  submittedTime: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Waiting Review' | 'Changes Requested' | 'Forwarded' | 'Rejected' | 'Approved';
  deadline: string;
  workCompleted: string;
  challengesFaced: string;
  remainingWork: string;
  additionalNotes: string;
  attachments: Attachment[];
}

export const mockReviewTasks: ReviewTask[] = [
  {
    id: 'rt-1',
    employeeId: 'emp-1',
    taskTitle: 'Landing page copy — Atlas launch',
    project: 'Product Launch — Atlas',
    submittedTime: '2 hr ago',
    priority: 'High',
    status: 'Waiting Review',
    deadline: '24 Jul, 6:00 PM',
    workCompleted: 'Drafted all primary landing page copy including hero section, features breakdown, and CTA blocks. Reviewed against brand voice guidelines.',
    challengesFaced: 'Had some trouble condensing the technical specifications into user-friendly feature highlights without losing accuracy.',
    remainingWork: 'Awaiting final approval from legal on the compliance claims section before locking the document.',
    additionalNotes: 'I included two variants for the hero headline in the document. Let me know which one you prefer.',
    attachments: [
      { name: 'Atlas_Landing_Copy_v2.pdf', type: 'pdf', sizeOrDomain: '1.2 MB' },
      { name: 'Wireframe_Mockups', type: 'figma', sizeOrDomain: 'figma.com' }
    ]
  },
  {
    id: 'rt-2',
    employeeId: 'emp-3',
    taskTitle: 'Landing page — mobile QA',
    project: 'NimbusCRM',
    submittedTime: 'Yesterday, 4:42 PM',
    priority: 'Medium',
    status: 'Changes Requested',
    deadline: '25 Jul, EOD',
    workCompleted: 'Completed all QA for mobile breakpoint. Found 3 minor issues with spacing.',
    challengesFaced: 'None significant.',
    remainingWork: 'Address the spacing issues.',
    additionalNotes: 'Waiting on design feedback.',
    attachments: []
  },
  {
    id: 'rt-3',
    employeeId: 'emp-2',
    taskTitle: 'July content calendar',
    project: 'Marketing',
    submittedTime: 'Yesterday, 11:15 AM',
    priority: 'Low',
    status: 'Forwarded',
    deadline: '26 Jul, EOD',
    workCompleted: 'Planned out all social posts for July.',
    challengesFaced: 'None.',
    remainingWork: 'None.',
    additionalNotes: 'Forwarded to head of marketing.',
    attachments: []
  },
  {
    id: 'rt-4',
    employeeId: 'emp-4',
    taskTitle: 'Brand guideline poster set',
    project: 'Design',
    submittedTime: '2 days ago',
    priority: 'Medium',
    status: 'Rejected',
    deadline: '20 Jul, EOD',
    workCompleted: 'Designed 3 posters for the new brand guidelines.',
    challengesFaced: 'Colors were not strictly matching the exact hex codes.',
    remainingWork: 'Redo posters with correct colors.',
    additionalNotes: 'I will start over.',
    attachments: []
  },
  {
    id: 'rt-5',
    employeeId: 'emp-5',
    taskTitle: 'Newsletter template redesign',
    project: 'Marketing',
    submittedTime: '3 days ago',
    priority: 'Low',
    status: 'Approved',
    deadline: '19 Jul, EOD',
    workCompleted: 'Redesigned the Mailchimp template.',
    challengesFaced: 'None.',
    remainingWork: 'None.',
    additionalNotes: 'Ready for use.',
    attachments: []
  }
];
