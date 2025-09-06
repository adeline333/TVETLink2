import React, { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}
function SidebarItem({
  to,
  icon,
  label,
  isActive
}: SidebarItemProps) {
  return <Link to={to} className={`flex items-center px-4 py-3 mb-2 rounded-md ${isActive ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-700'}`}>
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </Link>;
}
interface DashboardLayoutProps {
  children: ReactNode;
  sidebarItems: Array<{
    to: string;
    icon: React.ReactNode;
    label: string;
  }>;
  dashboardTitle: string;
}
export function DashboardLayout({
  children,
  sidebarItems,
  dashboardTitle
}: DashboardLayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {isMobileMenuOpen && <div className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />}
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-indigo-900 transition duration-300 lg:translate-x-0 lg:static lg:inset-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-center h-16 bg-indigo-950">
          <span className="text-white font-bold text-lg">SkillConnect</span>
        </div>
        <nav className="mt-5 px-2">
          <div className="px-4 py-2 text-xs uppercase tracking-wider text-indigo-300">
            {dashboardTitle}
          </div>
          {sidebarItems.map((item, index) => <SidebarItem key={index} to={item.to} icon={item.icon} label={item.label} isActive={location.pathname === item.to} />)}
          <div className="border-t border-indigo-800 my-4"></div>
          <Link to="/" className="flex items-center px-4 py-3 text-indigo-100 hover:bg-indigo-700 rounded-md">
            <span className="mr-3">🏠</span>
            <span>Back to Home</span>
          </Link>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <button className="lg:hidden text-gray-500 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              {dashboardTitle}
            </h1>
            <div className="flex items-center">
              <button className="flex items-center text-sm text-gray-700 focus:outline-none">
                <img className="h-8 w-8 rounded-full border-2 border-gray-200" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User avatar" />
                <span className="ml-2 hidden md:inline-block">John Doe</span>
              </button>
            </div>
          </div>
        </header>
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          {children}
        </main>
      </div>
    </div>;
}