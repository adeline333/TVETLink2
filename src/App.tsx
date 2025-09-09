import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import PrivateSectorPage from "./pages/PrivateSectorPage";
import DonationPage from "./pages/DonationPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { StudentDashboard } from "./pages/StudentDashboard";
import { PrivateSectorDashboard } from "./pages/PrivateSectorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";

// 👇 import the student dashboard sections
import { ProfileSection } from "./pages/StudentDashboard";
import { ShoppingCart } from "./pages/StudentDashboard";
import { CVUpload } from "./pages/StudentDashboard";
import { TrainingCenters } from "./pages/StudentDashboard";
import { CareerMatch } from "./pages/StudentDashboard";
import { Opportunities } from "./pages/StudentDashboard";
import { Notifications } from "./pages/StudentDashboard";
import ScrollToTop from "./components/common/ScrollToTop";

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/private-sector" element={<PrivateSectorPage />} />
              <Route path="/donation" element={<DonationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />

              {/* Student Dashboard with nested routes */}
              <Route
                path="/student-dashboard/*"
                element={
                  <ProtectedRoute requiredRole="student">
                    <StudentDashboard />
                  </ProtectedRoute>
                }
              >
                <Route index element={<ProfileSection />} />
                <Route path="shopping-cart" element={<ShoppingCart />} />
                <Route path="cv-upload" element={<CVUpload />} />
                <Route path="training-centers" element={<TrainingCenters />} />
                <Route path="career-match" element={<CareerMatch />} />
                <Route path="opportunities" element={<Opportunities />} />
                <Route path="notifications" element={<Notifications />} />
              </Route>

              {/* Private Sector Dashboard */}
              <Route
                path="/private-sector-dashboard/*"
                element={
                  <ProtectedRoute requiredRole="private-sector">
                    <PrivateSectorDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Admin Dashboard */}
              <Route
                path="/admin-dashboard"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
