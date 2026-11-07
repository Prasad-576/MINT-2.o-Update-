import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#f8f9fa] font-sans">
      <Sidebar />
      <div className="flex-1 ml-[220px] flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 px-8 py-6 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
