import React from 'react';
import Button from '../components/common/Button';
import Card, { CardBody } from '../components/common/Card';
import privateSector from '../assets/images/tvet-conference.jpg'

const PrivateSectorPage: React.FC = () => {
  return <div className="pt-16 bg-white">
      {/* Hero section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={privateSector} alt="People in a business meeting" />
          <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Private Sector Partnerships
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Join forces with TVETLink to shape the future workforce, access
            skilled talent, and contribute to economic development through
            meaningful industry-education collaboration.
          </p>
          <div className="mt-10 flex space-x-4">
            <Button size="lg">Join as Partner</Button>
            <Button variant="outline" size="lg" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      {/* Benefits section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Benefits
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
              Why Partner With TVETLink?
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Discover how a partnership with TVETLink can benefit your
              organization and help build a skilled workforce.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Access to Talent
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Connect directly with skilled graduates and students who
                      match your specific industry needs and organizational
                      culture.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Influence Training
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Shape curriculum development to ensure graduates have the
                      practical skills your industry needs now and in the
                      future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Community Engagement
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Demonstrate corporate social responsibility by actively
                      participating in workforce development initiatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partnership Options */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Partnership Options
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
              How You Can Engage
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Choose the partnership model that works best for your
              organization's goals and resources.
            </p>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
            <Card className="border border-gray-200">
              <CardBody>
                <h3 className="text-xl font-semibold text-gray-900">
                  Basic Partner
                </h3>
                <p className="mt-4 text-gray-500">
                  Perfect for small businesses looking to engage with skilled
                  talent.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Post up to 5 job opportunities
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Access to graduate profiles
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Participate in one job fair per year
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button variant="outline" fullWidth>
                    Join as Basic Partner
                  </Button>
                </div>
              </CardBody>
            </Card>
            <Card className="border border-gray-200 relative">
              <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                <div className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                  Most Popular
                </div>
              </div>
              <CardBody>
                <h3 className="text-xl font-semibold text-gray-900">
                  Premium Partner
                </h3>
                <p className="mt-4 text-gray-500">
                  Ideal for medium-sized businesses seeking active engagement.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Unlimited job postings
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Priority access to graduate talent
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Curriculum input opportunities
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Host company events on platform
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button fullWidth>Join as Premium Partner</Button>
                </div>
              </CardBody>
            </Card>
            <Card className="border border-gray-200">
              <CardBody>
                <h3 className="text-xl font-semibold text-gray-900">
                  Strategic Partner
                </h3>
                <p className="mt-4 text-gray-500">
                  For large enterprises seeking deep integration with education.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      All Premium features
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Dedicated training program development
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Direct mentorship opportunities
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">
                      Brand visibility across platform
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button variant="secondary" fullWidth>
                    Contact for Strategic Partnership
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      {/* Success Stories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Success Stories
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
              Partner Testimonials
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Hear from organizations that have transformed their talent
              pipeline through TVETLink partnerships.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[1, 2, 3].map(testimonial => <div key={testimonial} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-600">
                      {testimonial === 1 ? 'Technology' : testimonial === 2 ? 'Manufacturing' : 'Healthcare'}
                    </p>
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {testimonial === 1 ? 'TechCorp Innovations' : testimonial === 2 ? 'Advanced Manufacturing Inc.' : 'HealthPlus Solutions'}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        "TVETLink has transformed how we recruit and train new
                        talent. We've seen a 40% increase in job-ready
                        candidates and reduced onboarding time significantly."
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={`https://randomuser.me/api/portraits/${testimonial % 2 === 0 ? 'women' : 'men'}/${testimonial + 60}.jpg`} alt="" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {testimonial === 1 ? 'Sarah Johnson' : testimonial === 2 ? 'Michael Chen' : 'Robert Williams'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial === 1 ? 'CTO' : testimonial === 2 ? 'HR Director' : 'CEO'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">
              Ready to transform your talent pipeline?
            </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Join TVETLink today and connect with skilled graduates ready to
            contribute to your organization's success.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button size="lg">Become a Partner</Button>
            </div>
            <div className="ml-3 inline-flex">
              <Button variant="outline" size="lg" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default PrivateSectorPage;