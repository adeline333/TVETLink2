import React from 'react';
import Button from '../components/common/Button';
const AboutPage: React.FC = () => {
  return <div className="pt-16 bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-50">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white"></div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="People working on laptops" />
              <div className="absolute inset-0 bg-blue-700 mix-blend-multiply"></div>
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">About TVETLink</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-100 sm:max-w-3xl">
                Bridging the gap between technical education and industry needs
                to create meaningful career opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Mission section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Our Mission
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Empowering the Next Generation of Skilled Professionals
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              TVETLink is dedicated to creating a seamless connection between
              technical education, vocational training, and industry needs. We
              believe in the power of skills-based education to transform lives
              and build stronger economies.
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
      {/* Team section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
              Our Team
            </h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
              Meet the People Behind TVETLink
            </p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-gray-500">
              Our diverse team brings together expertise in education, industry,
              and technology.
            </p>
          </div>
          <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {[1, 2, 3].map(member => <div key={member}>
                <div className="mb-4">
                  <img className="h-40 w-40 rounded-full mx-auto object-cover" src={`https://randomuser.me/api/portraits/${member % 2 === 0 ? 'women' : 'men'}/${member + 30}.jpg`} alt="" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    Team Member {member}
                  </h3>
                  <p className="text-sm font-medium text-blue-600">
                    Co-Founder /{' '}
                    {member === 1 ? 'CEO' : member === 2 ? 'CTO' : 'COO'}
                  </p>
                  <p className="mt-2 text-base text-gray-500">
                    Passionate about connecting education with real-world
                    opportunities and creating pathways to successful careers.
                  </p>
                </div>
              </div>)}
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
              Working Together for Skills Development
            </p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-gray-500">
              We collaborate with leading organizations across education,
              industry, and government.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(partner => <div key={partner} className="flex justify-center">
                <div className="h-16 w-full bg-gray-100 flex items-center justify-center rounded-md">
                  <span className="text-gray-400 text-lg font-medium">
                    Partner {partner}
                  </span>
                </div>
              </div>)}
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
              <Button size="lg">Get Started</Button>
            </div>
            <div className="ml-3 inline-flex">
              <Button variant="outline" size="lg" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AboutPage;