import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar';
import ChatbotOverlay from './components/ChatbotOverlay';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AuthPage from './pages/AuthPage';
import CropRecommendation from './pages/CropRecommendation';
import DiseasePrediction from './pages/DiseasePrediction';
import ScanHistory from './pages/ScanHistory';
import UserProfile from './pages/UserProfile';
import CropCalendar from './pages/CropCalendar';
import MarketPrices from './pages/MarketPrices';
import WeatherAdvisory from './pages/WeatherAdvisory';
import MyFarm from './pages/MyFarm';
import Subsidies from './pages/Subsidies';
import Calculator from './pages/Calculator';
import Logistics from './pages/Logistics';
import AboutUs from './pages/AboutUs';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { GOOGLE_CLIENT_ID } from './api/config';
import './index.css';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  if (!isAuthenticated) return <Navigate to="/auth" replace />;
  return children;
};

const AppLayout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';

  return (
    <div className="flex flex-col min-h-screen">
      {!isAuthPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/crop" element={<ProtectedRoute><CropRecommendation /></ProtectedRoute>} />
          <Route path="/disease" element={<ProtectedRoute><DiseasePrediction /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route path="/history" element={<ProtectedRoute><ScanHistory /></ProtectedRoute>} />
          <Route path="/calendar" element={<ProtectedRoute><CropCalendar /></ProtectedRoute>} />
          <Route path="/prices" element={<ProtectedRoute><MarketPrices /></ProtectedRoute>} />
          <Route path="/advisory" element={<ProtectedRoute><WeatherAdvisory /></ProtectedRoute>} />
          <Route path="/my-farm" element={<ProtectedRoute><MyFarm /></ProtectedRoute>} />
          <Route path="/subsidies" element={<ProtectedRoute><Subsidies /></ProtectedRoute>} />
          <Route path="/calculator" element={<ProtectedRoute><Calculator /></ProtectedRoute>} />
          <Route path="/logistics" element={<ProtectedRoute><Logistics /></ProtectedRoute>} />
        </Routes>
      </main>
      {!isAuthPage && <ChatbotOverlay />}
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <Router>
          <AppLayout />
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}