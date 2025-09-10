import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
const Hero: React.FC = () => {
  return <div className="relative bg-blue-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-blue-700 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-blue-700 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="pt-10 sm:pt-16 lg:pt-8 xl:pt-16">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Driving Private Sector</span>
                <span className="block text-blue-200">Participation &</span>
                <span className="block text-blue-200">TVET Enrollment</span>
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Empowering youth through quality technical education and strong industry partnerships. 
                Connect with leading companies, access cutting-edge training programs, and build 
                the skills that drive economic growth and innovation.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/signup">
                    <Button variant="primary" size="lg">
                      Join Now
                    </Button>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/private-sector">
                    <Button variant="outline" size="lg" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      Discover Opportunities
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/src/assets/images/Workplace learning.jpg" alt="TVET students learning in workplace environment" />
      </div>
    </div>;
};
export default Hero;