import React from "react";
import Card, { CardBody, CardHeader } from "../components/common/Card";
import Button from "../components/common/Button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const studentEngagementData = [
  { month: "Jan", engagement: 80 },
  { month: "Feb", engagement: 90 },
  { month: "Mar", engagement: 75 },
  { month: "Apr", engagement: 95 },
  { month: "May", engagement: 85 },
  { month: "Jun", engagement: 100 },
];

const opportunitiesByIndustryData = [
  { industry: "ICT", opportunities: 40 },
  { industry: "Tourism", opportunities: 30 },
  { industry: "construction", opportunities: 25 },
  { industry: "Agriculture", opportunities: 20 },
  { industry: "Education", opportunities: 15 },
];

const RecentActivityItem: React.FC<{
  initials: string;
  bgColor: string;
  color: string;
  description: string;
  timeAgo: string;
}> = ({ initials, bgColor, color, description, timeAgo }) => (
  <li className="py-4">
    <div className="flex items-center space-x-4">
      <div
        className={`flex-shrink-0 h-8 w-8 rounded-full ${bgColor} flex items-center justify-center`}
      >
        <span className={`text-xs font-medium ${color}`}>{initials}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          {description}
        </p>
        <p className="text-sm text-gray-500 truncate">{timeAgo}</p>
      </div>
      <div>
        <Button size="sm" variant="outline">
          View
        </Button>
      </div>
    </div>
  </li>
);

const AdminDashboard: React.FC = () => {
  return (
    <div className="pt-20 pb-10 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Admin Dashboard
        </h2>

        {/* Summary Cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardBody>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  {/* SVG Icon */}
                  <svg
                    className="h-6 w-6 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Total Students
                  </h3>
                  <p className="text-3xl font-semibold text-gray-900">1,248</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">
                  +12% from last month
                </span>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  {/* SVG Icon */}
                  <svg
                    className="h-6 w-6 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Active Companies
                  </h3>
                  <p className="text-3xl font-semibold text-gray-900">87</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">
                  +5% from last month
                </span>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  {/* SVG Icon */}
                  <svg
                    className="h-6 w-6 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Total Donations
                  </h3>
                  <p className="text-3xl font-semibold text-gray-900">
                    $24,856
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">
                  +18% from last month
                </span>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Charts */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-medium text-gray-900">
                Student Engagement
              </h3>
            </CardHeader>
            <CardBody>
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={studentEngagementData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="engagement"
                    stroke="#3b82f6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-medium text-gray-900">
                Opportunities by Industry
              </h3>
            </CardHeader>
            <CardBody>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={opportunitiesByIndustryData}>
                  <XAxis dataKey="industry" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="opportunities" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardBody>
          </Card>
        </div>

        {/* Recent Activities */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Recent Activities
                </h3>
                <Button size="sm" variant="outline">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <div className="flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  <RecentActivityItem
                    initials="JD"
                    bgColor="bg-blue-100"
                    color="text-blue-600"
                    description="John Doe registered as a new student"
                    timeAgo="2 hours ago"
                  />
                  <RecentActivityItem
                    initials="TC"
                    bgColor="bg-green-100"
                    color="text-green-600"
                    description="Tech Corp posted a new internship opportunity"
                    timeAgo="5 hours ago"
                  />
                  <RecentActivityItem
                    initials="AS"
                    bgColor="bg-purple-100"
                    color="text-purple-600"
                    description="Anna Smith made a donation of $500"
                    timeAgo="1 day ago"
                  />
                  <RecentActivityItem
                    initials="TI"
                    bgColor="bg-yellow-100"
                    color="text-yellow-600"
                    description="Training Institute added a new course: Advanced Data Science"
                    timeAgo="2 days ago"
                  />
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
