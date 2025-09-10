import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import tvetConference from ".././assets/images/tvet-conference.jpg";
const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  const handleLearnMore = () => {
    navigate('/private-sector');
  };

  return <div className="pt-16 bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-50">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white"></div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img className="h-full w-full object-cover" src={tvetConference} alt="TVET conference showcasing industry partnerships" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-80"></div>
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white drop-shadow-lg">About TVETLink</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-100 sm:max-w-3xl drop-shadow-md">
                Connecting private sector employers with skilled TVET graduates
                to solve Rwanda's skills gap and boost youth employment.
              </p>
              <div className="mt-8 flex justify-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                  <p className="text-white text-sm font-medium">
                    Bridging the gap between education and industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Problem section */}
      <div className="py-16 bg-red-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">
              The Challenge
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Rwanda's Skills Gap Crisis
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-600">
              Despite high youth unemployment, private sector employers struggle to find skilled workers, 
              while young people remain unaware of the career opportunities TVET offers.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Low Private Sector Engagement
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Only 15% of private companies actively participate in skills development programs, 
                      creating a disconnect between industry needs and training.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Low TVET Enrollment
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Many young people are unaware of TVET benefits, leading to low enrollment rates 
                      and missed career opportunities in high-demand sectors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-sm">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Skills Mismatch
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Graduates lack industry-relevant skills while employers can't find qualified workers, 
                      creating a cycle that hinders economic growth.
              </p>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>

      {/* Mission section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Our Solution
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Connecting Private Sector with Skilled TVET Graduates
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              TVETLink creates a direct bridge between private sector employers and TVET graduates, 
              increasing both industry engagement and student awareness of career opportunities.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Connect
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      We connect students with training opportunities and
                      industry partners that align with their career aspirations
                      and skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Train
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      We help training centers align their curriculum with
                      industry needs, ensuring graduates are equipped with
                      relevant skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      Empower
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      We empower students with resources, mentorship, and
                      opportunities to build successful careers in their chosen
                      fields.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partners section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Our Partners
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
              Private Sector Employers Hiring TVET Graduates
            </p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-gray-500">
              Leading companies across Rwanda that recognize the value of TVET graduates and actively hire skilled workers.
            </p>
          </div>
          
          {/* Construction & Infrastructure */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-8">Construction & Infrastructure</h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="bg-orange-50 p-6 rounded-lg text-center border border-orange-200">
                <div className="text-lg font-bold text-orange-600 mb-2">Rwanda Housing Authority</div>
                <p className="text-sm text-gray-600">Government Housing Projects</p>
                <p className="text-xs text-orange-500 mt-2">Hiring: 50+ TVET graduates</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center border border-orange-200">
                <div className="text-lg font-bold text-orange-600 mb-2">Rwanda Construction</div>
                <p className="text-sm text-gray-600">Private Construction Firm</p>
                <p className="text-xs text-orange-500 mt-2">Hiring: 30+ TVET graduates</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center border border-orange-200">
                <div className="text-lg font-bold text-orange-600 mb-2">Kigali Construction</div>
                <p className="text-sm text-gray-600">Commercial Building</p>
                <p className="text-xs text-orange-500 mt-2">Hiring: 25+ TVET graduates</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center border border-orange-200">
                <div className="text-lg font-bold text-orange-600 mb-2">Infrastructure Co.</div>
                <p className="text-sm text-gray-600">Road & Bridge Construction</p>
                <p className="text-xs text-orange-500 mt-2">Hiring: 40+ TVET graduates</p>
              </div>
            </div>
          </div>

          {/* Technology & ICT */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-8">Technology & ICT</h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200">
                <div className="text-lg font-bold text-blue-600 mb-2">KLab</div>
                <p className="text-sm text-gray-600">Tech Innovation Hub</p>
                <p className="text-xs text-blue-500 mt-2">Hiring: 20+ TVET graduates</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200">
                <div className="text-lg font-bold text-blue-600 mb-2">Andela Rwanda</div>
                <p className="text-sm text-gray-600">Software Development</p>
                <p className="text-xs text-blue-500 mt-2">Hiring: 15+ TVET graduates</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200">
                <div className="text-lg font-bold text-blue-600 mb-2">SafeMotos</div>
                <p className="text-sm text-gray-600">Transportation Tech</p>
                <p className="text-xs text-blue-500 mt-2">Hiring: 10+ TVET graduates</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200">
                <div className="text-lg font-bold text-blue-600 mb-2">Zipline Rwanda</div>
                <p className="text-sm text-gray-600">Drone Technology</p>
                <p className="text-xs text-blue-500 mt-2">Hiring: 12+ TVET graduates</p>
              </div>
            </div>
          </div>

          {/* Manufacturing & Industry */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-8">Manufacturing & Industry</h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
                <div className="text-lg font-bold text-green-600 mb-2">CIMERWA</div>
                <p className="text-sm text-gray-600">Cement Manufacturing</p>
                <p className="text-xs text-green-500 mt-2">Hiring: 35+ TVET graduates</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
                <div className="text-lg font-bold text-green-600 mb-2">Bralirwa</div>
                <p className="text-sm text-gray-600">Beverage Manufacturing</p>
                <p className="text-xs text-green-500 mt-2">Hiring: 28+ TVET graduates</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
                <div className="text-lg font-bold text-green-600 mb-2">SORWATHE</div>
                <p className="text-sm text-gray-600">Tea Processing</p>
                <p className="text-xs text-green-500 mt-2">Hiring: 22+ TVET graduates</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center border border-green-200">
                <div className="text-lg font-bold text-green-600 mb-2">Rwanda Metal</div>
                <p className="text-sm text-gray-600">Metal Fabrication</p>
                <p className="text-xs text-green-500 mt-2">Hiring: 18+ TVET graduates</p>
              </div>
            </div>
          </div>

          {/* Agriculture & Agribusiness */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-8">Agriculture & Agribusiness</h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="bg-yellow-50 p-6 rounded-lg text-center border border-yellow-200">
                <div className="text-lg font-bold text-yellow-600 mb-2">Rwanda Coffee</div>
                <p className="text-sm text-gray-600">Coffee Processing</p>
                <p className="text-xs text-yellow-500 mt-2">Hiring: 30+ TVET graduates</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg text-center border border-yellow-200">
                <div className="text-lg font-bold text-yellow-600 mb-2">Agro-Processing</div>
                <p className="text-sm text-gray-600">Food Processing</p>
                <p className="text-xs text-yellow-500 mt-2">Hiring: 25+ TVET graduates</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg text-center border border-yellow-200">
                <div className="text-lg font-bold text-yellow-600 mb-2">Dairy Co-op</div>
                <p className="text-sm text-gray-600">Dairy Processing</p>
                <p className="text-xs text-yellow-500 mt-2">Hiring: 20+ TVET graduates</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg text-center border border-yellow-200">
                <div className="text-lg font-bold text-yellow-600 mb-2">AgriTech Startups</div>
                <p className="text-sm text-gray-600">Modern Farming</p>
                <p className="text-xs text-yellow-500 mt-2">Hiring: 15+ TVET graduates</p>
                </div>
                </div>
          </div>
        </div>
      </div>
      {/* CTA section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to join our mission?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Whether you're a student, training center, or industry partner,
            there's a place for you in our community.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button size="lg" onClick={handleGetStarted}>Get Started</Button>
            </div>
            <div className="ml-3 inline-flex">
              <Button variant="outline" size="lg" className="bg-blue-100 text-blue-700 hover:bg-blue-200" onClick={handleLearnMore}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AboutPage;