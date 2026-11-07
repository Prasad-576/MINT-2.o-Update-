import { useState } from 'react';
import Card from '../Common/Card';
import Modal from '../Common/Modal';
import Button from '../Common/Button';
import { Plus, Link as LinkIcon, ExternalLink } from 'lucide-react';

interface MeetingProps {
  id?: string;
  time: string;
  ampm: string;
  title: string;
  people: string;
  link?: string;
}

const MeetingItem = ({ time, ampm, title, people, link }: MeetingProps) => (
  <div className="flex gap-4 mb-5 last:mb-0 items-start">
    <div className="flex flex-col text-center w-12 shrink-0 pt-1">
      <span className="text-sm font-bold text-teal-primary">{time}</span>
      <span className="text-[10px] font-semibold text-teal-primary">{ampm}</span>
    </div>
    <div className="w-1 min-h-[40px] bg-gray-200 rounded-full shrink-0 self-stretch mt-1"></div>
    <div className="flex-1">
      <h4 className="text-[13px] font-bold text-gray-900 mb-0.5">{title}</h4>
      <p className="text-[11px] text-gray-500 mb-2">{people}</p>
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-teal-primary/5 hover:bg-teal-primary/10 text-teal-primary text-[11px] font-semibold rounded-md transition-colors w-fit border border-teal-primary/10"
        >
          <ExternalLink size={12} />
          Join Meeting
        </a>
      )}
    </div>
  </div>
);

const UpcomingMeetings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [meetings, setMeetings] = useState<MeetingProps[]>([
    { id: '1', time: '10:30', ampm: 'AM', title: 'Design system sync', people: 'with Priya, Marcus +2', link: 'https://meet.google.com/abc-xyz' },
    { id: '2', time: '1:00', ampm: 'PM', title: 'Sprint 15 planning', people: 'with Team MINT', link: 'https://zoom.us/j/123456789' },
    { id: '3', time: '4:30', ampm: 'PM', title: '1:1 with manager', people: 'with Sarah Chen', link: 'https://meet.google.com/def-uvw' }
  ]);

  const [newMeeting, setNewMeeting] = useState({ title: '', time: '', link: '' });

  const handleCreateMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMeeting.title || !newMeeting.time || !newMeeting.link) return;
    
    // Simple parser for time (e.g. "10:30 AM")
    const timeMatch = newMeeting.time.match(/(\d{1,2}:\d{2})\s*(AM|PM)?/i);
    const parsedTime = timeMatch ? timeMatch[1] : newMeeting.time;
    const parsedAmpm = timeMatch && timeMatch[2] ? timeMatch[2].toUpperCase() : 'AM';

    setMeetings([...meetings, { 
      id: Date.now().toString(),
      time: parsedTime, 
      ampm: parsedAmpm, 
      title: newMeeting.title, 
      people: 'with Team', 
      link: newMeeting.link 
    }]);
    
    setNewMeeting({ title: '', time: '', link: '' });
    setIsModalOpen(false);
  };

  return (
    <>
      <Card className="!p-4">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-sm font-semibold text-gray-900">Upcoming meetings</h3>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1 text-[11px] font-bold text-teal-primary hover:text-teal-hover transition-colors bg-teal-primary/5 hover:bg-teal-primary/10 px-2 py-1 rounded-md"
          >
            <Plus size={12} />
            Create
          </button>
        </div>
        
        <div className="flex flex-col">
          {meetings.map((m) => (
            <MeetingItem key={m.id} {...m} />
          ))}
        </div>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Meeting" maxWidth="max-w-md">
        <form onSubmit={handleCreateMeeting} className="p-5">
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-[12px] font-bold text-gray-900 mb-1.5">Meeting Title <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                required
                value={newMeeting.title}
                onChange={(e) => setNewMeeting({...newMeeting, title: e.target.value})}
                placeholder="e.g. Weekly Sync"
                className="w-full px-3 py-2 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 bg-gray-50 focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-[12px] font-bold text-gray-900 mb-1.5">Meeting Time <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                required
                value={newMeeting.time}
                onChange={(e) => setNewMeeting({...newMeeting, time: e.target.value})}
                placeholder="e.g. 10:30 AM"
                className="w-full px-3 py-2 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 bg-gray-50 focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-[12px] font-bold text-gray-900 mb-1.5">Meeting Link <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LinkIcon size={14} className="text-gray-400" />
                </div>
                <input 
                  type="url" 
                  required
                  value={newMeeting.link}
                  onChange={(e) => setNewMeeting({...newMeeting, link: e.target.value})}
                  placeholder="https://meet.google.com/..."
                  className="w-full pl-9 pr-3 py-2 text-[13px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 bg-gray-50 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <Button type="button" variant="ghost" className="text-[12px] py-1.5" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button type="submit" variant="primary" className="text-[12px] py-1.5">Create Meeting</Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UpcomingMeetings;
