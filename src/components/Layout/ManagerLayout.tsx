import { Outlet } from 'react-router-dom';
import ManagerSidebar from './ManagerSidebar';
import Header from './Header';

const ManagerLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#f8f9fa] font-sans">
      <ManagerSidebar />
      <div className="flex-1 ml-[220px] flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 px-8 py-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ManagerLayout;
