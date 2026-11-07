import Card from '../Common/Card';

interface MeetingProps {
  time: string;
  ampm: string;
  title: string;
  people: string;
}

const ManagerMeetingItem = ({ time, ampm, title, people }: MeetingProps) => (
  <div className="flex gap-3 mb-3 last:mb-0 items-center">
    <div className="flex flex-col text-center w-10 shrink-0">
      <span className="text-[13px] font-bold text-teal-primary">{time}</span>
      <span className="text-[9px] font-semibold text-teal-primary">{ampm}</span>
    </div>
    <div className="w-0.5 h-6 bg-gray-200 rounded-full"></div>
    <div>
      <h4 className="text-[13px] font-bold text-gray-900 leading-tight mb-0.5">{title}</h4>
      <p className="text-[11px] text-gray-500">{people}</p>
    </div>
  </div>
);

const ManagerUpcomingMeetings = () => {
  return (
    <Card className="!p-3">
      <h3 className="text-[13px] font-bold text-gray-900 mb-3">Upcoming meetings</h3>
      <ManagerMeetingItem time="10:30" ampm="AM" title="Design system sync" people="with Priya, Marcus +2" />
      <ManagerMeetingItem time="1:00" ampm="PM" title="Sprint 15 planning" people="with Team MINT" />
      <ManagerMeetingItem time="4:30" ampm="PM" title="1:1 with manager" people="with Sarah Chen" />
    </Card>
  );
};

export default ManagerUpcomingMeetings;
