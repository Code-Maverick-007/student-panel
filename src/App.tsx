import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { useAuth } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import DashboardPage from './pages/DashboardPage';
import CollegesPage from './pages/CollegesPage';
import CollegeDetailsPage from './pages/CollegeDetailsPage';
import CareerExplorerPage from './pages/CareerExplorerPage';
import AIAdvisorPage from './pages/AIAdvisorPage';
import CounselorsPage from './pages/CounselorsPage';
import AptitudeQuizPage from './pages/AptitudeQuizPage';
import ScholarshipsPage from './pages/ScholarshipsPage';


// Component to protect routes that require authentication
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  if (!isSignedIn) {
    // Redirect to the sign-in page, but save the current location they were trying to go to
    return <Navigate to="/sign-in" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

function AppContent() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            
            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/colleges"
              element={
                <ProtectedRoute>
                  <CollegesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/colleges/:id"
              element={
                <ProtectedRoute>
                  <CollegeDetailsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/career-explorer"
              element={
                <ProtectedRoute>
                  <CareerExplorerPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/ai-advisor"
              element={
                <ProtectedRoute>
                  <AIAdvisorPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/counselors"
              element={
                <ProtectedRoute>
                  <CounselorsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/aptitude-quiz"
              element={
                <ProtectedRoute>
                  <AptitudeQuizPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/scholarships"
              element={
                <ProtectedRoute>
                  <ScholarshipsPage />
                </ProtectedRoute>
              }
            />
            
            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

// Main App component
function App() {
  return <AppContent />;
}

export default App;