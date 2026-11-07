import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  PlusSquare, 
  Users, 
  ClipboardCheck, 
  Clock, 
  FileText, 
  BarChart, 
  LogOut 
} from 'lucide-react';
// @ts-ignore
import tarkaLogo from '../../assets/Tarka logo.png';
import { authService } from '../../auth/authService';
import { motion } from 'framer-motion';

const ManagerSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await authService.logout();
    navigate('/');
  };
  const workspaceLinks = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/manager' },
    { name: 'My Tasks', icon: <CheckSquare size={18} />, path: '/manager/tasks', badge: 4 },
    { name: 'Assign Tasks', icon: <PlusSquare size={18} />, path: '/manager#assign-task' },
    { name: 'Department Employees', icon: <Users size={18} />, path: '/manager/employees' },
    { name: 'Task Reviews', icon: <ClipboardCheck size={18} />, path: '/manager/reviews', badge: 5 },
  ];

  const operationsLinks = [
    { name: 'Attendance', icon: <Clock size={18} />, path: '/manager/attendance' },
    { name: 'Documents', icon: <FileText size={18} />, path: '/manager/documents' },
    { name: 'Reports', icon: <BarChart size={18} />, path: '/manager/reports' },
  ];

  const renderLinks = (links: any[]) => {
    return links.map((link) => {
      const isActive = link.path === '/manager' 
        ? location.pathname === '/manager' 
        : location.pathname.startsWith(link.path);

      return (
        <NavLink
          key={link.name}
          to={link.path}
          className="relative flex items-center justify-between px-3 py-1.5 mb-0.5 rounded-md text-[13px] outline-none z-10"
        >
          {isActive && (
            <motion.div
              layoutId="manager-sidebar-active"
              className="absolute inset-0 bg-teal-primary/5 rounded-md -z-10"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
          )}
          <motion.div 
            whileHover={{ x: 2 }}
            className={`flex items-center gap-2.5 z-10 transition-colors ${
              isActive ? 'text-teal-primary font-medium' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {link.icon}
            <span>{link.name}</span>
          </motion.div>
          {link.badge && (
            <span className="bg-teal-primary text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-md z-10">
              {link.badge}
            </span>
          )}
        </NavLink>
      );
    });
  };

  return (
    <aside className="w-[220px] h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 overflow-y-auto">
      {/* Logo Area */}
      <div className="flex items-center gap-2 px-5 py-4">
        <img src={tarkaLogo} alt="MINT Logo" className="w-5 h-5 object-contain" />
        <span className="text-base font-bold text-gray-900">MINT</span>
      </div>

      {/* User Profile */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2.5 p-2 bg-gray-50 rounded-xl">
          <div className="w-8 h-8 rounded-full bg-teal-primary text-white flex items-center justify-center font-medium text-xs">
            SC
          </div>
          <div>
            <h4 className="text-[13px] font-semibold text-gray-900 leading-tight">Sarah Chen</h4>
            <p className="text-[11px] text-gray-500">Marketing Manager</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-3">
        <div className="mb-6">
          <h5 className="px-3 text-[11px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">Workspace</h5>
          <nav>{renderLinks(workspaceLinks)}</nav>
        </div>

        <div>
          <h5 className="px-3 text-[11px] font-semibold text-gray-400 mb-2 tracking-wider uppercase">Operations</h5>
          <nav>{renderLinks(operationsLinks)}</nav>
        </div>
      </div>

      <div className="p-3 mt-auto">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2.5 px-3 py-2 w-full text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <LogOut size={18} />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
};

export default ManagerSidebar;
