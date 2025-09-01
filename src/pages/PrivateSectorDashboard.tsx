import React, { useState } from 'react';
import Card, { CardBody, CardHeader } from '../components/common/Card';
import Button from '../components/common/Button';
import { BriefcaseIcon, CalendarIcon, ClipboardIcon, HeartIcon } from 'lucide-react';
const PrivateSectorDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('opportunities');
  return <div className="pt-20 pb-10 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              Private Sector Dashboard
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Button variant="outline" className="mr-2">
              <ClipboardIcon className="h-4 w-4 mr-2" />
              My Listings
            </Button>
            <Button>
              <BriefcaseIcon className="h-4 w-4 mr-2" />
              Post New
            </Button>
          </div>
        </div>
        <div className="mt-6">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select a tab
            </label>
            <select id="tabs" name="tabs" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md" value={activeTab} onChange={e => setActiveTab(e.target.value)}>
              <option value="opportunities">Post Opportunities</option>
              <option value="curriculum">Suggest Curriculum</option>
              <option value="events">Plan Events</option>
              <option value="subventions">Subvention Programs</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button onClick={() => setActiveTab('opportunities')} className={`${activeTab === 'opportunities' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                  Post Opportunities
                </button>
                <button onClick={() => setActiveTab('curriculum')} className={`${activeTab === 'curriculum' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                  Suggest Curriculum
                </button>
                <button onClick={() => setActiveTab('events')} className={`${activeTab === 'events' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                  Plan Events
                </button>
                <button onClick={() => setActiveTab('subventions')} className={`${activeTab === 'subventions' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                  Subvention Programs
                </button>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-6">
          {activeTab === 'opportunities' && <Card>
              <CardHeader>
                <h3 className="text-lg font-medium text-gray-900">
                  Post New Opportunity
                </h3>
              </CardHeader>
              <CardBody>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Opportunity Title
                      </label>
                      <div className="mt-1">
                        <input type="text" name="title" id="title" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g., Junior Web Developer Internship" />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                        Type
                      </label>
                      <div className="mt-1">
                        <select id="type" name="type" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                          <option>Job</option>
                          <option>Internship</option>
                          <option>Apprenticeship</option>
                          <option>Volunteer</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <div className="mt-1">
                        <input type="text" name="location" id="location" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g., Remote, New York, NY" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
                        Duration
                      </label>
                      <div className="mt-1">
                        <input type="text" name="duration" id="duration" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g., 3 months, Full-time" />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea id="description" name="description" rows={5} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Describe the opportunity, responsibilities, requirements, etc." />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                        Application Deadline
                      </label>
                      <div className="mt-1">
                        <input type="date" name="deadline" id="deadline" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                        Required Skills
                      </label>
                      <div className="mt-1">
                        <input type="text" name="skills" id="skills" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g., JavaScript, React, Communication" />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Separate skills with commas.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="button" variant="outline" className="mr-3">
                      Save as Draft
                    </Button>
                    <Button type="submit">Publish Opportunity</Button>
                  </div>
                </form>
              </CardBody>
            </Card>}
          {activeTab === 'curriculum' && <Card>
              <CardHeader>
                <h3 className="text-lg font-medium text-gray-900">
                  Suggest Curriculum Updates
                </h3>
              </CardHeader>
              <CardBody>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label htmlFor="training-center" className="block text-sm font-medium text-gray-700">
                        Training Center
                      </label>
                      <div className="mt-1">
                        <select id="training-center" name="training-center" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                          <option>All Centers</option>
                          <option>Technical Training Institute</option>
                          <option>Digital Skills Academy</option>
                          <option>Vocational Training Center</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="program" className="block text-sm font-medium text-gray-700">
                        Program/Course
                      </label>
                      <div className="mt-1">
                        <select id="program" name="program" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                          <option>All Programs</option>
                          <option>Web Development</option>
                          <option>Data Analysis</option>
                          <option>Graphic Design</option>
                          <option>Network Administration</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label htmlFor="suggestions" className="block text-sm font-medium text-gray-700">
                        Curriculum Suggestions
                      </label>
                      <div className="mt-1">
                        <textarea id="suggestions" name="suggestions" rows={8} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Share your suggestions for curriculum improvements, new technologies to include, or skills that are in demand in the industry..." />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <input id="collaboration" name="collaboration" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3">
                          <label htmlFor="collaboration" className="text-sm font-medium text-gray-700">
                            I'm willing to collaborate further on curriculum
                            development
                          </label>
                          <p className="text-sm text-gray-500">
                            This may include guest lectures, mentoring, or
                            providing industry materials.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Submit Suggestions</Button>
                  </div>
                </form>
              </CardBody>
            </Card>}
          {activeTab === 'events' && <Card>
              <CardHeader>
                <h3 className="text-lg font-medium text-gray-900">
                  Plan Industry Events
                </h3>
              </CardHeader>
              <CardBody>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="event-title" className="block text-sm font-medium text-gray-700">
                        Event Title
                      </label>
                      <div className="mt-1">
                        <input type="text" name="event-title" id="event-title" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g., Tech Career Fair 2023" />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="event-type" className="block text-sm font-medium text-gray-700">
                        Event Type
                      </label>
                      <div className="mt-1">
                        <select id="event-type" name="event-type" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md">
                          <option>Job Fair</option>
                          <option>Workshop</option>
                          <option>Hackathon</option>
                          <option>Seminar</option>
                          <option>Networking</option>
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="event-date" className="block text-sm font-medium text-gray-700">
                        Date
                      </label>
                      <div className="mt-1">
                        <input type="date" name="event-date" id="event-date" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="event-time" className="block text-sm font-medium text-gray-700">
                        Time
                      </label>
                      <div className="mt-1">
                        <input type="time" name="event-time" id="event-time" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="event-location" className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <div className="mt-1">
                        <input type="text" name="event-location" id="event-location" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g., Convention Center, Virtual" />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label htmlFor="max-attendees" className="block text-sm font-medium text-gray-700">
                        Maximum Attendees
                      </label>
                      <div className="mt-1">
                        <input type="number" name="max-attendees" id="max-attendees" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g., 100" />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label htmlFor="event-description" className="block text-sm font-medium text-gray-700">
                        Event Description
                      </label>
                      <div className="mt-1">
                        <textarea id="event-description" name="event-description" rows={4} className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Describe the event, its purpose, target audience, etc." />
                      </div>
                    </div>
                    <div className="sm:col-span-6">
                      <label className="block text-sm font-medium text-gray-700">
                        Invite Training Centers
                      </label>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <input id="center-1" name="centers" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                          </div>
                          <div className="ml-3">
                            <label htmlFor="center-1" className="text-sm font-medium text-gray-700">
                              Technical Training Institute
                            </label>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <input id="center-2" name="centers" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                          </div>
                          <div className="ml-3">
                            <label htmlFor="center-2" className="text-sm font-medium text-gray-700">
                              Digital Skills Academy
                            </label>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <input id="center-3" name="centers" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                          </div>
                          <div className="ml-3">
                            <label htmlFor="center-3" className="text-sm font-medium text-gray-700">
                              Vocational Training Center
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button type="button" variant="outline" className="mr-3">
                      Save Draft
                    </Button>
                    <Button type="submit">Create Event</Button>
                  </div>
                </form>
              </CardBody>
            </Card>}
          {activeTab === 'subventions' && <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="text-lg font-medium text-gray-900">
                    Available Subvention Programs
                  </h3>
                </CardHeader>
                <CardBody>
                  <div className="space-y-6">
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                      <ul className="divide-y divide-gray-200">
                        <li>
                          <div className="px-4 py-4 flex items-center sm:px-6">
                            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                              <div>
                                <div className="flex text-sm">
                                  <p className="font-medium text-blue-600 truncate">
                                    Youth Employment Initiative
                                  </p>
                                  <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                                    by Department of Labor
                                  </p>
                                </div>
                                <div className="mt-2 flex">
                                  <div className="flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                    <p>
                                      Application deadline{' '}
                                      <time dateTime="2023-09-30">
                                        September 30, 2023
                                      </time>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 flex-shrink-0 sm:mt-0">
                                <div className="flex overflow-hidden">
                                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                    Up to $50,000
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="ml-5 flex-shrink-0">
                              <Button size="sm">Apply</Button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="px-4 py-4 flex items-center sm:px-6">
                            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                              <div>
                                <div className="flex text-sm">
                                  <p className="font-medium text-blue-600 truncate">
                                    Skills Development Fund
                                  </p>
                                  <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                                    by Industry Association
                                  </p>
                                </div>
                                <div className="mt-2 flex">
                                  <div className="flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                    <p>
                                      Application deadline{' '}
                                      <time dateTime="2023-10-15">
                                        October 15, 2023
                                      </time>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 flex-shrink-0 sm:mt-0">
                                <div className="flex overflow-hidden">
                                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                    Up to $25,000
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="ml-5 flex-shrink-0">
                              <Button size="sm">Apply</Button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="px-4 py-4 flex items-center sm:px-6">
                            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                              <div>
                                <div className="flex text-sm">
                                  <p className="font-medium text-blue-600 truncate">
                                    Innovation in Training Grant
                                  </p>
                                  <p className="ml-1 flex-shrink-0 font-normal text-gray-500">
                                    by Tech Foundation
                                  </p>
                                </div>
                                <div className="mt-2 flex">
                                  <div className="flex items-center text-sm text-gray-500">
                                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                    <p>
                                      Application deadline{' '}
                                      <time dateTime="2023-11-01">
                                        November 1, 2023
                                      </time>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-4 flex-shrink-0 sm:mt-0">
                                <div className="flex overflow-hidden">
                                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                    Up to $75,000
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="ml-5 flex-shrink-0">
                              <Button size="sm">Apply</Button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <HeartIcon className="h-5 w-5 text-blue-400" />
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-blue-800">
                            Create Your Own Initiative
                          </h3>
                          <div className="mt-2 text-sm text-blue-700">
                            <p>
                              Don't see a program that fits your needs? You can
                              propose your own subvention initiative to support
                              skills development in your industry.
                            </p>
                          </div>
                          <div className="mt-3">
                            <Button size="sm" variant="outline" className="bg-white">
                              Propose Initiative
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>}
        </div>
      </div>
    </div>;
};
export default PrivateSectorDashboard;