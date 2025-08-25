import { Routes, Route, Navigate, Link } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Vehicles from './pages/Vehicles.jsx'
import Drivers from './pages/Drivers.jsx'
import Maintenance from './pages/Maintenance.jsx'
import Trips from './pages/Trips.jsx'
import Reports from './pages/Reports.jsx'
import Settings from './pages/Settings.jsx'
import NotFound from './pages/NotFound.jsx'
import { useAuth } from './context/AuthContext.jsx'

function Layout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <aside className="w-64 hidden md:block bg-white dark:bg-gray-800 shadow p-4">
        <h2 className="text-xl font-bold mb-4">FleetManagerPro</h2>
        <nav className="space-y-2">
          <Link to="/dashboard" className="block">Dashboard</Link>
          <Link to="/vehicles" className="block">Vehicles</Link>
          <Link to="/drivers" className="block">Drivers</Link>
          <Link to="/maintenance" className="block">Maintenance</Link>
          <Link to="/trips" className="block">Trips</Link>
          <Link to="/reports" className="block">Reports</Link>
          <Link to="/settings" className="block">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}

function PrivateRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/" element={<Layout />} />
      <Route path="/dashboard" element={<PrivateRoute><Layout><Dashboard/></Layout></PrivateRoute>} />
      <Route path="/vehicles" element={<PrivateRoute><Layout><Vehicles/></Layout></PrivateRoute>} />
      <Route path="/drivers" element={<PrivateRoute><Layout><Drivers/></Layout></PrivateRoute>} />
      <Route path="/maintenance" element={<PrivateRoute><Layout><Maintenance/></Layout></PrivateRoute>} />
      <Route path="/trips" element={<PrivateRoute><Layout><Trips/></Layout></PrivateRoute>} />
      <Route path="/reports" element={<PrivateRoute><Layout><Reports/></Layout></PrivateRoute>} />
      <Route path="/settings" element={<PrivateRoute><Layout><Settings/></Layout></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
