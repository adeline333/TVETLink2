import React, { Component , ReactNode, useState } from 'react';
import { Routes, Route, useNavigate, Link, NavLink, Outlet } from 'react-router-dom';
import { UserIcon, ShoppingCartIcon, BookOpenIcon, BrainIcon, BriefcaseIcon, BellIcon, FileIcon } from 'lucide-react';
//import { DashboardLayout } from '../components/dashboard/DashboardLayout';
// Student Dashboard Components

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

function SidebarItem({ to, icon, label }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-3 mb-2 rounded-md ${
          isActive
            ? 'bg-indigo-800 text-white'
            : 'text-indigo-100 hover:bg-indigo-700'
        }`
      }
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}



interface DashboardLayoutProps {
  children: ReactNode;
  sidebarItems: SidebarItemProps[];
  dashboardTitle: string;
}
export function DashboardLayout({
  children,
  sidebarItems,
  dashboardTitle
}: DashboardLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-indigo-900 transition duration-300 lg:translate-x-0 lg:static lg:inset-0 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-center h-16 bg-indigo-950">
          <span className="text-white font-bold text-lg">SkillConnect</span>
        </div>
        <nav className="mt-5 px-2">
          <div className="px-4 py-2 text-xs uppercase tracking-wider text-indigo-300">
            {dashboardTitle}
          </div>
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              to={item.to}
              icon={item.icon}
              label={item.label}
            />
          ))}
          <div className="border-t border-indigo-800 my-4"></div>
          <Link
            to="/"
            className="flex items-center px-4 py-3 text-indigo-100 hover:bg-indigo-700 rounded-md"
          >
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
            <button
              className="lg:hidden text-gray-500 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              {dashboardTitle}
            </h1>
            <div className="flex items-center">
              <button className="flex items-center text-sm text-gray-700 focus:outline-none">
                <img
                  className="h-8 w-8 rounded-full border-2 border-gray-200"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
                <span className="ml-2 hidden md:inline-block">John Doe</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">{children}</main>
      </div>
    </div>
  );
}


export function ProfileSection() {
  return <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Personal Profile
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="flex flex-col items-center">
            <img src="https://images.pexels.com/photos/31005653/pexels-photo-31005653.jpeg" alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100" />
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Change Photo
            </button>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" defaultValue="John Murakoze" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" defaultValue="murakoze@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" defaultValue="+250 (0) 788-123-567" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" defaultValue="Kigali, RWANDA" />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" rows={3} defaultValue="Computer Science graduate with a passion for web development and AI. Looking for opportunities to grow my skills in a professional environment." />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Skills & Interests
        </h3>
        <div className="border rounded-md p-4 bg-gray-50">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              My Skills
            </label>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'React', 'Node.js', 'UI/UX Design', 'Python'].map(skill => <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                    {skill}
                  </span>)}
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-500 hover:bg-gray-50">
                + Add Skill
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Career Interests
            </label>
            <div className="flex flex-wrap gap-2">
              {['Software Development', 'Data Science', 'Product Management'].map(interest => <span key={interest} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {interest}
                </span>)}
              <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-500 hover:bg-gray-50">
                + Add Interest
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Save Changes
        </button>
      </div>
    </div>;
}
export function ShoppingCart() {
  const cartItems = [{
    id: 1,
    title: 'Web Development Bootcamp',
    provider: 'Tech Academy',
    price: 299,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 2,
    title: 'UX Design Fundamentals',
    provider: 'Design Institute',
    price: 199,
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVpJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }];
  return <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Shopping Cart</h2>
        <span className="bg-indigo-100 text-indigo-800 py-1 px-3 rounded-full text-sm font-medium">
          {cartItems.length} Items
        </span>
      </div>
      <div className="divide-y divide-gray-200">
        {cartItems.map(item => <div key={item.id} className="py-4 flex items-center">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-medium text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.provider}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">${item.price}</p>
              <button className="text-xs text-red-600 hover:text-red-800">
                Remove
              </button>
            </div>
          </div>)}
      </div>
      <div className="border-t border-gray-200 mt-6 pt-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900 font-medium">$498.00</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-600">Discount</span>
          <span className="text-green-600 font-medium">-$50.00</span>
        </div>
        <div className="flex justify-between text-base font-medium mt-4">
          <span className="text-gray-900">Total</span>
          <span className="text-gray-900">$448.00</span>
        </div>
        <div className="mt-6">
          <button className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none">
            Proceed to Checkout
          </button>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>;
}
export function CVUpload() {
  return <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Resume & CV Management
      </h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
        <FileIcon className="h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop your CV/resume here, or
        </p>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Browse Files
        </button>
        <p className="mt-1 text-xs text-gray-500">
          Supported formats: PDF, DOCX, RTF (Max 5MB)
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Uploaded Documents
        </h3>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-indigo-100 p-2 rounded">
                <FileIcon className="h-6 w-6 text-indigo-700" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">
                  John_Doe_Resume.pdf
                </h4>
                <p className="text-xs text-gray-500">
                  Uploaded on Oct 15, 2023 • 1.2MB
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                View
              </button>
              <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                Delete
              </button>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-md flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-indigo-100 p-2 rounded">
                <FileIcon className="h-6 w-6 text-indigo-700" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">
                  Portfolio_2023.pdf
                </h4>
                <p className="text-xs text-gray-500">
                  Uploaded on Sep 28, 2023 • 3.5MB
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                View
              </button>
              <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Resume Builder
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Don't have a professional resume? Use our builder to create one in
          minutes!
        </p>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Launch Resume Builder
        </button>
      </div>
    </div>;
}
export function TrainingCenters() {
  const trainingCenters = [{
    id: 1,
    name: 'Tech Academy',
    rating: 4.8,
    courses: 42,
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaCUyMGNsYXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 2,
    name: 'Design Institute',
    rating: 4.6,
    courses: 28,
    location: 'San Francisco, USA',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWduJTIwc2Nob29sfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 3,
    name: 'Data Science Hub',
    rating: 4.9,
    courses: 35,
    location: 'Boston, USA',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 4,
    name: 'Business School',
    rating: 4.5,
    courses: 50,
    location: 'Chicago, USA',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBzY2hvb2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  }];
  return <div className="bg-white shadow rounded-lg p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Training Centers
        </h2>
        <div className="mt-2 sm:mt-0 flex items-center">
          <div className="relative">
            <input type="text" placeholder="Search courses or centers..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <button className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {trainingCenters.map(center => <div key={center.id} className="border rounded-lg overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden">
              <img src={center.image} alt={center.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900">
                  {center.name}
                </h3>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm text-gray-600">
                    {center.rating}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">{center.location}</p>
              <p className="text-sm text-gray-600 mt-2">
                {center.courses} courses available
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Web Development
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  UI/UX Design
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                  Data Science
                </span>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
              <span className="text-sm text-gray-500">Starting from $199</span>
              <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700">
                View Courses
              </button>
            </div>
          </div>)}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
          Load More Training Centers
        </button>
      </div>
    </div>;
}
export function CareerMatch() {
  const careerRecommendations = [{
    id: 1,
    title: 'Front-End Developer',
    matchPercentage: 92,
    description: 'Create user interfaces and implement visual elements for web applications.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'UI/UX'],
    avgSalary: '$85,000 - $120,000',
    growth: '+23% (2020-2030)',
    icon: '💻'
  }, {
    id: 2,
    title: 'UX Designer',
    matchPercentage: 87,
    description: 'Design user experiences focusing on accessibility, usability and interaction.',
    skills: ['UI/UX Design', 'Wireframing', 'Prototyping', 'User Research'],
    avgSalary: '$75,000 - $110,000',
    growth: '+18% (2020-2030)',
    icon: '🎨'
  }, {
    id: 3,
    title: 'Product Manager',
    matchPercentage: 78,
    description: 'Lead product development and strategy to meet business goals and user needs.',
    skills: ['Product Strategy', 'User Stories', 'Market Research', 'Agile'],
    avgSalary: '$95,000 - $140,000',
    growth: '+15% (2020-2030)',
    icon: '📊'
  }];
  return <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">AI Career Match</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex items-center">
          <BrainIcon className="h-4 w-4 mr-2" />
          Retake Assessment
        </button>
      </div>
      <div className="bg-indigo-50 rounded-lg p-4 mb-6">
        <div className="flex items-start">
          <div className="bg-indigo-100 p-2 rounded-full">
            <BrainIcon className="h-6 w-6 text-indigo-700" />
          </div>
          <div className="ml-4">
            <h3 className="text-md font-medium text-indigo-900">
              AI-Powered Career Recommendations
            </h3>
            <p className="text-sm text-indigo-700 mt-1">
              Based on your skills, interests, and profile information, our AI
              has identified these career paths as potentially great matches for
              you.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {careerRecommendations.map(career => <div key={career.id} className="border rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <div className="text-2xl mr-3">{career.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">
                  {career.title}
                </h3>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {career.matchPercentage}% Match
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">{career.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Required Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill, index) => <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {skill}
                    </span>)}
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    Average Salary Range
                  </h4>
                  <p className="text-sm text-gray-900">{career.avgSalary}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    Job Growth
                  </h4>
                  <p className="text-sm text-green-600">{career.growth}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
              <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                View Detailed Report
              </button>
              <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700">
                Find Related Courses
              </button>
            </div>
          </div>)}
      </div>
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Skills to Develop
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Based on your career interests, consider developing these skills to
          increase your market value:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-gray-800">Technical Skills</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                TypeScript
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                GraphQL
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Testing Frameworks
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-gray-800">Soft Skills</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Project Management
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Team Leadership
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Client Communication
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium text-gray-800">Tools & Platforms</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Figma
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                AWS/Cloud Services
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                CI/CD Pipelines
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
}
export function Opportunities() {
  const opportunities = [{
    id: 1,
    title: 'Junior Web Developer',
    company: 'TechCorp Inc.',
    type: 'Internship',
    location: 'Remote',
    posted: '2 days ago',
    logo: 'https://images.unsplash.com/photo-1549921296-3b0f9a35af35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 2,
    title: 'UX Research Assistant',
    company: 'Design Partners',
    type: 'Volunteer',
    location: 'New York, USA',
    posted: '1 week ago',
    logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 3,
    title: 'Frontend Developer',
    company: 'WebSolutions',
    type: 'Internship',
    location: 'Remote',
    posted: '3 days ago',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXBhbnklMjBsb2dvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
  }];
  const volunteerProjects = [{
    id: 1,
    title: 'Website for Local Charity',
    organization: 'Community Helpers',
    duration: '2 weeks',
    remote: true,
    skills: ['HTML', 'CSS', 'WordPress']
  }, {
    id: 2,
    title: 'Mobile App for Elderly Care',
    organization: 'SilverCare Foundation',
    duration: '1 month',
    remote: true,
    skills: ['React Native', 'UI Design']
  }];
  return <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Internship Opportunities
          </h2>
          <div className="flex items-center">
            <div className="relative">
              <input type="text" placeholder="Search opportunities..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <button className="ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Filter
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {opportunities.map(opportunity => <div key={opportunity.id} className="border rounded-lg overflow-hidden">
              <div className="p-4 flex items-center">
                <div className="flex-shrink-0">
                  <img src={opportunity.logo} alt={opportunity.company} className="h-12 w-12 rounded-full object-cover" />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {opportunity.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${opportunity.type === 'Internship' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                      {opportunity.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{opportunity.company}</p>
                  <div className="mt-2 flex items-center text-xs text-gray-500">
                    <svg className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {opportunity.location}
                    <span className="mx-2">•</span>
                    <span>Posted {opportunity.posted}</span>
                  </div>
                </div>
                <button className="ml-4 px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                  Apply Now
                </button>
              </div>
            </div>)}
        </div>
        <div className="mt-6 flex justify-center">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            View More Opportunities
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Volunteer Projects
        </h2>
        <div className="space-y-4">
          {volunteerProjects.map(project => <div key={project.id} className="border rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  {project.title}
                </h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {project.remote ? 'Remote' : 'On-site'}
                </span>
              </div>
              <p className="text-sm text-gray-500">{project.organization}</p>
              <p className="text-sm text-gray-600 mt-2">
                Duration: {project.duration}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.skills.map((skill, index) => <span key={index} className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                    {skill}
                  </span>)}
              </div>
              <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                  Express Interest
                </button>
              </div>
            </div>)}
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-md text-sm font-medium hover:bg-indigo-100">
            Browse All Volunteer Projects
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          International Opportunities
        </h2>
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4">
          <div className="flex items-start">
            <div className="bg-indigo-100 p-2 rounded-full">
              <svg className="h-6 w-6 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-md font-medium text-indigo-900">
                Global Skills Exchange Program
              </h3>
              <p className="text-sm text-indigo-700 mt-1">
                Apply for international internships and volunteer opportunities.
                Gain global experience and expand your network.
              </p>
              <button className="mt-3 px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700">
                Explore Global Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export function Notifications() {
  const notifications = [{
    id: 1,
    title: 'Application Status Update',
    message: "Your application for 'Junior Web Developer' at TechCorp Inc. has been reviewed.",
    time: '2 hours ago',
    read: false,
    type: 'application'
  }, {
    id: 2,
    title: 'New Course Recommendation',
    message: "Based on your interests, we think you might like 'Advanced React Patterns'.",
    time: '1 day ago',
    read: true,
    type: 'recommendation'
  }, {
    id: 3,
    title: 'Upcoming Virtual Job Fair',
    message: "Don't miss the Tech Careers Virtual Job Fair on November 15th, 2023.",
    time: '2 days ago',
    read: true,
    type: 'event'
  }, {
    id: 4,
    title: 'Profile Completion Reminder',
    message: 'Your profile is 85% complete. Add your education details to improve visibility to employers.',
    time: '3 days ago',
    read: false,
    type: 'system'
  }, {
    id: 5,
    title: 'New Message from Tech Academy',
    message: 'You have received a new message regarding your course enrollment.',
    time: '5 days ago',
    read: true,
    type: 'message'
  }];
  return <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Notifications</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm text-indigo-600 hover:text-indigo-800">
            Mark All as Read
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800">
            Settings
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {notifications.map(notification => <div key={notification.id} className={`p-4 rounded-lg ${notification.read ? 'bg-white border' : 'bg-indigo-50 border border-indigo-100'}`}>
            <div className="flex items-start">
              <div className={`p-2 rounded-full ${getNotificationIconBackground(notification.type)}`}>
                {getNotificationIcon(notification.type)}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <h3 className={`text-md font-medium ${notification.read ? 'text-gray-900' : 'text-indigo-900'}`}>
                    {notification.title}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {notification.time}
                  </span>
                </div>
                <p className={`text-sm mt-1 ${notification.read ? 'text-gray-600' : 'text-indigo-700'}`}>
                  {notification.message}
                </p>
                <div className="mt-2 flex justify-between items-center">
                  <button className="text-xs text-indigo-600 hover:text-indigo-800">
                    View Details
                  </button>
                  {!notification.read && <button className="text-xs text-gray-500 hover:text-gray-700">
                      Mark as Read
                    </button>}
                </div>
              </div>
            </div>
          </div>)}
      </div>
      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
          Load More Notifications
        </button>
      </div>
    </div>;
}
// Helper functions for notifications
function getNotificationIcon(type: string) {
  switch (type) {
    case 'application':
      return <svg className="h-5 w-5 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>;
    case 'recommendation':
      return <svg className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>;
    case 'event':
      return <svg className="h-5 w-5 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>;
    case 'system':
      return <svg className="h-5 w-5 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>;
    case 'message':
      return <svg className="h-5 w-5 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>;
    default:
      return <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>;
  }
}
function getNotificationIconBackground(type: string) {
  switch (type) {
    case 'application':
      return 'bg-blue-100';
    case 'recommendation':
      return 'bg-green-100';
    case 'event':
      return 'bg-purple-100';
    case 'system':
      return 'bg-yellow-100';
    case 'message':
      return 'bg-indigo-100';
    default:
      return 'bg-gray-100';
  }
}
// Main Student Dashboard Component
export function StudentDashboard() {
  const sidebarItems = [
    { to: "/student-dashboard", icon: <UserIcon className="h-5 w-5" />, label: "Profile" },
    { to: "/student-dashboard/shopping-cart", icon: <ShoppingCartIcon className="h-5 w-5" />, label: "Shopping Cart" },
    { to: "/student-dashboard/cv-upload", icon: <FileIcon className="h-5 w-5" />, label: "CV/Resume" },
    { to: "/student-dashboard/training-centers", icon: <BookOpenIcon className="h-5 w-5" />, label: "Training Centers" },
    { to: "/student-dashboard/career-match", icon: <BrainIcon className="h-5 w-5" />, label: "AI Career Match" },
    { to: "/student-dashboard/opportunities", icon: <BriefcaseIcon className="h-5 w-5" />, label: "Opportunities" },
    { to: "/student-dashboard/notifications", icon: <BellIcon className="h-5 w-5" />, label: "Notifications" }
  ];

  return (
    <DashboardLayout sidebarItems={sidebarItems} dashboardTitle="Student Dashboard">
      <Outlet /> {/* 👈 nested route content will render here */}
    </DashboardLayout>
  );
}