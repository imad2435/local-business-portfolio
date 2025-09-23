// frontend/src/App.jsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Page
import HomePage from './pages/HomePage';

// Admin Layouts & Pages
import AdminLayout from './components/admin/AdminLayout.jsx';
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';
import AdminLogin from './pages/admin/AdminLogin.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import PortfolioManagement from './pages/admin/PortfolioManagement.jsx';
import ServicesManagement from './pages/admin/ServicesManagement.jsx';
import TestimonialsManagement from './pages/admin/TestimonialsManagement.jsx';
import Messages from './pages/admin/Messages.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* --- PUBLIC ROUTE --- */}
        {/* The entire public website is now a single, beautiful home page */}
        <Route path="/" element={<HomePage />} />

        {/* --- ADMIN ROUTES --- */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="portfolio" element={<PortfolioManagement />} />
          <Route path="services" element={<ServicesManagement />} />
          <Route path="testimonials" element={<TestimonialsManagement />} />
          <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;