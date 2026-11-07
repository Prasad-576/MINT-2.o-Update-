import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '@components/Layout/DashboardLayout';
import Dashboard from '@pages/Dashboard';
import MyTasks from '@pages/MyTasks';

import LandingPage from '@pages/LandingPage';
import ManagerLayout from '@components/Layout/ManagerLayout';
import ManagerDashboard from '@pages/ManagerDashboard';
import FounderLayout from '@components/Layout/FounderLayout';
import FounderDashboard from '@pages/FounderDashboard';
import { ProtectedRoute } from './auth/routeGuards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route element={<ProtectedRoute requiredRole="employee" />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tasks" element={<MyTasks />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute requiredRole="manager" />}>
          <Route path="/manager" element={<ManagerLayout />}>
            <Route index element={<ManagerDashboard />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute requiredRole="founder" />}>
          <Route path="/founder" element={<FounderLayout />}>
            <Route index element={<FounderDashboard />} />
          </Route>
        </Route>

        {/* Catch-all to redirect back to landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
