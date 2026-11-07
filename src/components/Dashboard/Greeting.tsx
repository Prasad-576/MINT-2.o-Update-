import Button from '../Common/Button';

const Greeting = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mb-1">
          Good morning, Alex <span className="text-2xl">👋</span>
        </h1>
        <p className="text-sm text-gray-500">Here's what's happening today, 23 July 2026.</p>
      </div>
      <Button className="shrink-0 w-full md:w-auto flex items-center gap-1.5">
        Self Task
      </Button>
    </div>
  );
};

export default Greeting;
