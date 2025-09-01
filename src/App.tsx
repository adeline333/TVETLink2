import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PrivateSectorPage from './pages/PrivateSectorPage';
import DonationPage from './pages/DonationPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import StudentDashboard from './pages/StudentDashboard';
import PrivateSectorDashboard from './pages/PrivateSectorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/private-sector" element={<PrivateSectorPage />} />
            <Route path="/donation" element={<DonationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/private-sector-dashboard" element={<PrivateSectorDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}