import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  BuildingIcon,
  BriefcaseIcon,
  BookOpenIcon,
  CalendarIcon,
  HeartIcon,
  BarChartIcon,
} from 'lucide-react'
import { DashboardLayout } from '../components/dashboard/DashboardLayout'
// Dashboard Layout Component


// Private Sector Dashboard Components
function CompanyProfile() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Company Profile
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="flex flex-col items-center">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Company Logo"
              className="w-32 h-32 rounded-lg object-cover border-4 border-indigo-100"
            />
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Change Logo
            </button>
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">
              Company Verification
            </h3>
            <div className="flex items-center text-green-600">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Verified Business</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Last verified: October 10, 2023
            </p>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue="TechCorp Inc."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Industry
              </label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Manufacturing</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company Size
              </label>
              <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>1-10 employees</option>
                <option>11-50 employees</option>
                <option>51-200 employees</option>
                <option>201-500 employees</option>
                <option>501+ employees</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Founded Year
              </label>
              <input
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue="2010"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Website
              </label>
              <input
                type="url"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue="https://techcorp.example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                defaultValue="San Francisco, CA"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Company Description
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              defaultValue="TechCorp Inc. is a leading technology company specializing in innovative software solutions for businesses of all sizes. With a focus on cutting-edge development and user-centric design, we help organizations streamline their operations and achieve digital transformation."
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Skills & Technologies We Work With
        </h3>
        <div className="border rounded-md p-4 bg-gray-50">
          <div className="flex flex-wrap gap-2">
            {[
              'React',
              'Node.js',
              'TypeScript',
              'Python',
              'AWS',
              'Docker',
              'Machine Learning',
              'UI/UX Design',
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
            <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-500 hover:bg-gray-50">
              + Add Skill
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Social Media & Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              LinkedIn
            </label>
            <input
              type="url"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              defaultValue="https://linkedin.com/company/techcorp"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Twitter
            </label>
            <input
              type="url"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              defaultValue="https://twitter.com/techcorp"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              defaultValue="careers@techcorp.example.com"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Save Changes
        </button>
      </div>
    </div>
  )
}
function PostOpportunities() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Post New Opportunity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Opportunity Title
            </label>
            <input
              type="text"
              placeholder="e.g., Junior Web Developer"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Opportunity Type
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Internship</option>
              <option>Apprenticeship</option>
              <option>Entry-Level Job</option>
              <option>Volunteer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <div className="mt-1 flex items-center">
              <select className="block w-full border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>On-site</option>
                <option>Remote</option>
                <option>Hybrid</option>
              </select>
              <input
                type="text"
                placeholder="City, Country (if applicable)"
                className="block w-full border-l-0 border border-gray-300 rounded-r-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              type="text"
              placeholder="e.g., Engineering, Design, Marketing"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Duration
            </label>
            <div className="mt-1 flex items-center space-x-2">
              <input
                type="number"
                placeholder="3"
                className="block w-20 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <select className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Months</option>
                <option>Weeks</option>
                <option>Days</option>
                <option>Permanent</option>
              </select>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Required Skills
            </label>
            <div className="mt-1 p-3 border border-gray-300 rounded-md bg-white">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm flex items-center">
                  JavaScript
                  <button className="ml-1 text-indigo-600 hover:text-indigo-800 focus:outline-none">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm flex items-center">
                  React
                  <button className="ml-1 text-indigo-600 hover:text-indigo-800 focus:outline-none">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type a skill and press Enter..."
                className="w-full border-0 focus:ring-0 p-0 text-sm"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows={6}
              placeholder="Describe the opportunity, responsibilities, requirements, and what candidates will learn..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Application Deadline
            </label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Compensation
            </label>
            <div className="mt-1 flex items-center">
              <select className="block w-24 border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
              <input
                type="number"
                placeholder="Amount"
                className="block w-full border-l-0 border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <select className="block w-32 border-l-0 border border-gray-300 rounded-r-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>per month</option>
                <option>per week</option>
                <option>per hour</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Save as Draft
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Publish Opportunity
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Active Opportunities
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Posted
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Applications
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Junior Web Developer
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Internship
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Oct 15, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  12
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-900">
                    Close
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    UX Research Assistant
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Volunteer
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Oct 10, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  8
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-900">
                    Close
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Frontend Developer
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    Entry-Level
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Sep 28, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  24
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Reviewing
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                  >
                    Edit
                  </a>
                  <a href="#" className="text-red-600 hover:text-red-900">
                    Close
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
function CurriculumSuggestions() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Suggest Curriculum Updates
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg
                className="h-6 w-6 text-blue-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-md font-medium text-blue-900">
                Help Shape the Future Workforce
              </h3>
              <p className="text-sm text-blue-700 mt-1">
                Your insights help training centers develop curricula that align
                with industry needs. Suggest skills, technologies, or
                methodologies that are in demand in your sector.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Suggestion Title
            </label>
            <input
              type="text"
              placeholder="e.g., Add Advanced React Patterns to Web Development Curriculum"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Web Development</option>
              <option>Data Science</option>
              <option>Design</option>
              <option>Mobile Development</option>
              <option>DevOps</option>
              <option>Soft Skills</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Relevance Level
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Critical - Required for employment</option>
              <option>Important - Gives significant advantage</option>
              <option>Helpful - Nice to have</option>
              <option>Emerging - Will be important in future</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Detailed Suggestion
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows={6}
              placeholder="Describe the skill, technology, or methodology you're suggesting. Why is it important? How is it used in the industry? What level of proficiency is required for entry-level positions?"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Resources for Learning
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows={3}
              placeholder="Optional: Suggest books, online courses, documentation, or other resources that could help teach this skill."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Industry Trend
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Growing rapidly</option>
              <option>Stable demand</option>
              <option>Emerging technology</option>
              <option>Standard requirement</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Target Training Level
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>All levels</option>
            </select>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Submit Suggestion
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Your Previous Suggestions
        </h2>
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
              <h3 className="text-md font-medium text-gray-900">
                Add Cloud Infrastructure Management to DevOps Curriculum
              </h3>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                Implemented
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">
                Suggested including AWS/Azure infrastructure management,
                focusing on automation, scaling, and security best practices.
              </p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span>Submitted on Oct 5, 2023</span>
                <span className="mx-2">•</span>
                <span>Category: DevOps</span>
                <span className="mx-2">•</span>
                <span>Relevance: Critical</span>
              </div>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center">
              <h3 className="text-md font-medium text-gray-900">
                Incorporate Accessibility Standards in UI/UX Design Courses
              </h3>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                Under Review
              </span>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">
                Suggested adding WCAG guidelines and accessibility testing as
                core components of design curriculum to ensure inclusive digital
                products.
              </p>
              <div className="mt-2 flex items-center text-xs text-gray-500">
                <span>Submitted on Sep 28, 2023</span>
                <span className="mx-2">•</span>
                <span>Category: Design</span>
                <span className="mx-2">•</span>
                <span>Relevance: Important</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            View All Suggestions
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Industry Skill Trends
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">
              Most Requested Skills
            </h3>
            <ol className="space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <span className="text-gray-700">1. Cloud Computing</span>
                <span className="text-green-600">+24%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700">2. Data Analysis</span>
                <span className="text-green-600">+18%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700">3. Cybersecurity</span>
                <span className="text-green-600">+15%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700">4. React Development</span>
                <span className="text-green-600">+12%</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-700">5. UX Research</span>
                <span className="text-green-600">+10%</span>
              </li>
            </ol>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">
              Emerging Technologies
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                <span className="text-gray-700">AI/Machine Learning</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-gray-700">Blockchain Development</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-gray-700">AR/VR Applications</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                <span className="text-gray-700">Edge Computing</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                <span className="text-gray-700">Quantum Computing</span>
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-3">
              Soft Skills in Demand
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 text-indigo-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Critical Thinking</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 text-indigo-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Problem Solving</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 text-indigo-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Collaboration</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 text-indigo-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Adaptability</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 text-indigo-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Communication</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
function EventPlanning() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Plan New Event
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Event Title
            </label>
            <input
              type="text"
              placeholder="e.g., TechCorp Open Day, Career Fair, Workshop"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Type
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Company Open Day</option>
              <option>Career Fair</option>
              <option>Workshop</option>
              <option>Hackathon</option>
              <option>Training Center Visit</option>
              <option>Networking Event</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Format
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>In-person</option>
              <option>Virtual</option>
              <option>Hybrid</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <div className="mt-1 flex space-x-2">
              <input
                type="time"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              <span className="flex items-center">to</span>
              <input
                type="time"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Location/Platform
            </label>
            <input
              type="text"
              placeholder="For in-person: venue address; For virtual: platform link"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Event Description
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              placeholder="Describe what participants can expect, agenda, and benefits of attending..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Target Audience
            </label>
            <div className="mt-1 space-y-2">
              <div className="flex items-center">
                <input
                  id="students"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="students"
                  className="ml-2 text-sm text-gray-700"
                >
                  Students
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="recent-graduates"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="recent-graduates"
                  className="ml-2 text-sm text-gray-700"
                >
                  Recent Graduates
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="training-centers"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="training-centers"
                  className="ml-2 text-sm text-gray-700"
                >
                  Training Centers
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="other-businesses"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="other-businesses"
                  className="ml-2 text-sm text-gray-700"
                >
                  Other Businesses
                </label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Max Participants
            </label>
            <input
              type="number"
              placeholder="Leave blank if no limit"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Registration Deadline
            </label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button className="mr-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Save as Draft
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Publish Event
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Upcoming Events
        </h2>
        <div className="space-y-4">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-indigo-50 px-4 py-3 flex justify-between items-center">
              <h3 className="text-md font-medium text-indigo-900">
                TechCorp Open Day: Meet Our Engineering Team
              </h3>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                In-person
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                <span>November 15, 2023 • 2:00 PM - 5:00 PM</span>
              </div>
              <p className="text-sm text-gray-600">
                An opportunity for students to visit our headquarters, meet the
                engineering team, and learn about our development processes and
                technologies.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span className="font-medium">25</span> registrations out of{' '}
                  <span className="font-medium">50</span> spots
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700">
                    Edit
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    View Registrations
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-indigo-50 px-4 py-3 flex justify-between items-center">
              <h3 className="text-md font-medium text-indigo-900">
                Web Development Workshop: Modern React Patterns
              </h3>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                Virtual
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                <span>December 5, 2023 • 10:00 AM - 12:00 PM</span>
              </div>
              <p className="text-sm text-gray-600">
                A hands-on workshop covering advanced React concepts, state
                management, and performance optimization techniques.
              </p>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  <span className="font-medium">48</span> registrations out of{' '}
                  <span className="font-medium">100</span> spots
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700">
                    Edit
                  </button>
                  <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50">
                    View Registrations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            View All Events
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Event Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              Total Events
            </h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-semibold text-gray-900">12</span>
              <span className="ml-2 text-sm font-medium text-green-600">
                +33%
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Compared to last quarter
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              Total Participants
            </h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-semibold text-gray-900">347</span>
              <span className="ml-2 text-sm font-medium text-green-600">
                +28%
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Compared to last quarter
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              Avg. Satisfaction
            </h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-semibold text-gray-900">
                4.8/5
              </span>
              <span className="ml-2 text-sm font-medium text-green-600">
                +0.3
              </span>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Compared to last quarter
            </p>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 border border-indigo-300 text-indigo-700 bg-indigo-50 rounded-md text-sm font-medium hover:bg-indigo-100">
            View Detailed Analytics
          </button>
        </div>
      </div>
    </div>
  )
}
function SubventionPrograms() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Subvention Programs
        </h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full">
              <HeartIcon className="h-6 w-6 text-green-700" />
            </div>
            <div className="ml-4">
              <h3 className="text-md font-medium text-green-900">
                Support the Future Workforce
              </h3>
              <p className="text-sm text-green-700 mt-1">
                Your contributions make a significant impact in developing
                skilled professionals. Support initiatives like scholarships,
                equipment donations, or training programs.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3">
              <h3 className="text-lg font-medium text-gray-900">
                Scholarship Programs
              </h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                Fund scholarships for talented students who demonstrate
                exceptional potential but face financial barriers to education.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="border rounded p-3">
                  <h4 className="font-medium text-gray-800 mb-1">
                    Full Scholarship
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">
                    Cover tuition, materials, and living stipend
                  </p>
                  <p className="text-sm font-bold text-indigo-600">
                    $5,000 per student
                  </p>
                </div>
                <div className="border rounded p-3">
                  <h4 className="font-medium text-gray-800 mb-1">
                    Partial Scholarship
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">
                    Cover tuition and materials
                  </p>
                  <p className="text-sm font-bold text-indigo-600">
                    $2,500 per student
                  </p>
                </div>
                <div className="border rounded p-3">
                  <h4 className="font-medium text-gray-800 mb-1">
                    Merit Award
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">
                    Recognize outstanding achievement
                  </p>
                  <p className="text-sm font-bold text-indigo-600">
                    $1,000 per student
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Set Up Scholarship
                </button>
              </div>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3">
              <h3 className="text-lg font-medium text-gray-900">
                Equipment & Technology
              </h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                Donate equipment, software licenses, or fund technology upgrades
                for training centers to ensure students learn on
                industry-standard tools.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="border rounded p-3">
                  <h4 className="font-medium text-gray-800 mb-1">
                    Computer Lab
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">
                    Fund a complete computer lab setup
                  </p>
                  <p className="text-sm font-bold text-indigo-600">
                    Starting at $15,000
                  </p>
                </div>
                <div className="border rounded p-3">
                  <h4 className="font-medium text-gray-800 mb-1">
                    Software Licenses
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">
                    Provide professional software access
                  </p>
                  <p className="text-sm font-bold text-indigo-600">
                    Starting at $5,000
                  </p>
                </div>
                <div className="border rounded p-3">
                  <h4 className="font-medium text-gray-800 mb-1">
                    Hardware Donations
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">
                    Donate used company equipment
                  </p>
                  <p className="text-sm font-bold text-indigo-600">
                    In-kind contribution
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Discuss Equipment Donation
                </button>
              </div>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3">
              <h3 className="text-lg font-medium text-gray-900">
                Mentorship Programs
              </h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                Support structured mentorship programs where your employees can
                guide students through their learning journey and early career
                development.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="border rounded p-3">
                  <h4 className="font-medium text-gray-800 mb-1">
                    Group Mentorship
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">
                    One mentor guides multiple students
                  </p>
                  <p className="text-sm text-gray-600">
                    Commitment: 4 hours/month for 6 months
                  </p>
                </div>
                <div className="border rounded p-3">
                  <h4 className="font-medium text-gray-800 mb-1">
                    One-on-One Mentorship
                  </h4>
                  <p className="text-xs text-gray-500 mb-2">
                    Personalized guidance and support
                  </p>
                  <p className="text-sm text-gray-600">
                    Commitment: 8 hours/month for 6 months
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Start Mentorship Program
                </button>
              </div>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3">
              <h3 className="text-lg font-medium text-gray-900">
                Custom Support Program
              </h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                Have a unique idea for supporting education and workforce
                development? We'd love to hear it and help you implement a
                customized program.
              </p>
              <div className="border rounded p-4 mb-4">
                <h4 className="font-medium text-gray-800 mb-2">
                  Propose Your Idea
                </h4>
                <textarea
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  rows={4}
                  placeholder="Describe your idea for supporting education and skills development..."
                />
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                  Submit Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Your Active Contributions
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Program
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Start Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Impact
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Tech Academy Scholarships
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Financial
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Sep 1, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  5 students supported
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    View Details
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    Web Dev Mentorship
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                    Mentorship
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Oct 15, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  3 mentors, 12 students
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    View Details
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            View All Contributions
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Impact Analytics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              Students Supported
            </h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-semibold text-gray-900">27</span>
            </div>
            <div className="mt-1 flex items-center text-xs">
              <span className="text-green-600 font-medium">+12 this year</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              Total Contribution
            </h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-semibold text-gray-900">
                $42,500
              </span>
            </div>
            <div className="mt-1 flex items-center text-xs">
              <span className="text-gray-500">
                Financial, equipment, and time value
              </span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
              Hired from Programs
            </h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-semibold text-gray-900">8</span>
            </div>
            <div className="mt-1 flex items-center text-xs">
              <span className="text-green-600 font-medium">
                29.6% of supported students
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 border border-indigo-300 text-indigo-700 bg-indigo-50 rounded-md text-sm font-medium hover:bg-indigo-100">
            View Detailed Impact Report
          </button>
        </div>
      </div>
    </div>
  )
}
function Analytics() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Dashboard Analytics
        </h2>
        <div className="flex items-center">
          <select className="border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white text-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Year to date</option>
            <option>All time</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            Posted Opportunities
          </h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-semibold text-gray-900">12</span>
            <span className="ml-2 text-sm font-medium text-green-600">
              +33%
            </span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            Applications
          </h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-semibold text-gray-900">87</span>
            <span className="ml-2 text-sm font-medium text-green-600">
              +15%
            </span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            Interview Rate
          </h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-semibold text-gray-900">32%</span>
            <span className="ml-2 text-sm font-medium text-green-600">+5%</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            Hire Rate
          </h3>
          <div className="flex items-baseline">
            <span className="text-3xl font-semibold text-gray-900">14%</span>
            <span className="ml-2 text-sm font-medium text-green-600">+2%</span>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Application Trends
        </h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <BarChartIcon className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2">Chart visualization would appear here</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Top Skills in Demand
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <ul className="space-y-3">
              <li className="flex items-center justify-between">
                <span className="text-sm text-gray-700">React Development</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{
                        width: '85%',
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 text-xs text-gray-500">85%</span>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm text-gray-700">UI/UX Design</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{
                        width: '72%',
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 text-xs text-gray-500">72%</span>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Node.js</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{
                        width: '68%',
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 text-xs text-gray-500">68%</span>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm text-gray-700">TypeScript</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{
                        width: '65%',
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 text-xs text-gray-500">65%</span>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-sm text-gray-700">DevOps</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{
                        width: '58%',
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 text-xs text-gray-500">58%</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">
            Opportunity Performance
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-4">
              <div className="border-b pb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-800">
                    Junior Web Developer
                  </span>
                  <span className="text-xs text-blue-600 font-medium">
                    Internship
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <span>24 applications</span>
                  <span className="mx-2">•</span>
                  <span className="text-green-600">6 interviews</span>
                  <span className="mx-2">•</span>
                  <span className="text-green-700 font-medium">2 hired</span>
                </div>
              </div>
              <div className="border-b pb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-800">
                    UX Research Assistant
                  </span>
                  <span className="text-xs text-green-600 font-medium">
                    Volunteer
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <span>18 applications</span>
                  <span className="mx-2">•</span>
                  <span className="text-green-600">8 interviews</span>
                  <span className="mx-2">•</span>
                  <span className="text-green-700 font-medium">4 accepted</span>
                </div>
              </div>
              <div className="border-b pb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-800">
                    Frontend Developer
                  </span>
                  <span className="text-xs text-purple-600 font-medium">
                    Entry-Level
                  </span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <span>45 applications</span>
                  <span className="mx-2">•</span>
                  <span className="text-green-600">12 interviews</span>
                  <span className="mx-2">•</span>
                  <span className="text-green-700 font-medium">3 hired</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button className="w-full px-4 py-2 border border-indigo-300 text-indigo-700 bg-indigo-50 rounded-md text-sm font-medium hover:bg-indigo-100">
          Generate Comprehensive Report
        </button>
      </div>
    </div>
  )
}
// Main Private Sector Dashboard Component
export function PrivateSectorDashboard() {
  const sidebarItems = [
    {
      to: '/private-sector-dashboard',
      icon: <BuildingIcon className="h-5 w-5" />,
      label: 'Company Profile',
    },
    {
      to: '/private-sector-dashboard/post-opportunities',
      icon: <BriefcaseIcon className="h-5 w-5" />,
      label: 'Post Opportunities',
    },
    {
      to: '/private-sector-dashboard/curriculum-suggestions',
      icon: <BookOpenIcon className="h-5 w-5" />,
      label: 'Curriculum Suggestions',
    },
    {
      to: '/private-sector-dashboard/event-planning',
      icon: <CalendarIcon className="h-5 w-5" />,
      label: 'Event Planning',
    },
    {
      to: '/private-sector-dashboard/subvention-programs',
      icon: <HeartIcon className="h-5 w-5" />,
      label: 'Subvention Programs',
    },
    {
      to: '/private-sector-dashboard/analytics',
      icon: <BarChartIcon className="h-5 w-5" />,
      label: 'Analytics',
    },
  ]
  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      dashboardTitle="Private Sector Dashboard"
    >
      <Routes>
        <Route index element={<CompanyProfile />} />
        <Route path="post-opportunities" element={<PostOpportunities />} />
        <Route
          path="curriculum-suggestions"
          element={<CurriculumSuggestions />}
        />
        <Route path="event-planning" element={<EventPlanning />} />
        <Route path="subvention-programs" element={<SubventionPrograms />} />
        <Route path="analytics" element={<Analytics />} />
      </Routes>
    </DashboardLayout>
  )
}
