import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import CollegesPage from './pages/CollegesPage';
import CollegeDetailsPage from './pages/CollegeDetailsPage';
import CareerExplorerPage from './pages/CareerExplorerPage';
import AIAdvisorPage from './pages/AIAdvisorPage';
import CounselorsPage from './pages/CounselorsPage';
import AptitudeQuizPage from './pages/AptitudeQuizPage';
import ScholarshipsPage from './pages/ScholarshipsPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/colleges" element={<CollegesPage />} />
            <Route path="/college/:id" element={<CollegeDetailsPage />} />
            <Route path="/careers" element={<CareerExplorerPage />} />
            <Route path="/ai-advisor" element={<AIAdvisorPage />} />
            <Route path="/counselors" element={<CounselorsPage />} />
            <Route path="/quiz" element={<AptitudeQuizPage />} />
            <Route path="/scholarships" element={<ScholarshipsPage />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;