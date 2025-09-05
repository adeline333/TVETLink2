import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Card, { CardBody } from '../components/common/Card';
import donation from '../assets/images/donation.jpg'

const DonationPage: React.FC = () => {
  const navigate = useNavigate();
  const [donationAmount, setDonationAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorName, setDonorName] = useState<string>('');
  const [donorEmail, setDonorEmail] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [donationFrequency, setDonationFrequency] = useState<string>('one-time');

  const handleDonateNow = () => {
    // Scroll to donation form
    const formElement = document.getElementById('donation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBecomePartner = () => {
    navigate('/private-sector');
  };
  const handleDonationAmountClick = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = donationAmount === 'custom' ? customAmount : donationAmount;
    alert(`Thank you for your ${donationFrequency} donation of $${amount}!`);
    // In a real app, this would process the payment
  };
  return <div className="pt-16 bg-white">
      {/* Hero section */}
      <div className="relative bg-blue-700">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={donation} alt="Students learning together" />
          <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Support TVET Enrollment & Private Sector Engagement
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Your donation directly supports our mission to increase TVET enrollment among youth 
            and connect private sector employers with skilled graduates, solving Rwanda's skills gap 
            and creating meaningful career opportunities.
          </p>
        </div>
      </div>
      {/* Donation section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Make a Difference Today
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Your contribution supports our mission to connect youth with
                training opportunities and create pathways to meaningful
                employment.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Scholarships
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Help fund scholarships for underprivileged students to
                      access quality technical and vocational training.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Training Centers
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Support training centers with equipment, curriculum
                      development, and teacher training to improve education
                      quality.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Job Placement
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Help fund job fairs, networking events, and placement
                      services that connect graduates with employment
                      opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Innovation
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      Support the development of new tools and approaches to
                      better connect education with employment opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900">
                  Our Impact
                </h3>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Students Supported
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-blue-600">
                          5,000+
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Training Centers Improved
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-blue-600">
                          75
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Job Placement Rate
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold text-blue-600">
                          82%
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="sticky top-20" id="donation-form">
                <CardBody>
                  <h3 className="text-lg font-medium text-gray-900 mb-6">
                    Make a Donation
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          Donation Amount
                        </label>
                        <p className="text-sm text-gray-500">
                          Select an amount or enter a custom amount
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <button type="button" className={`${donationAmount === '25' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 border-gray-300'} border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} onClick={() => handleDonationAmountClick('25')}>
                            $25
                          </button>
                          <button type="button" className={`${donationAmount === '50' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 border-gray-300'} border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} onClick={() => handleDonationAmountClick('50')}>
                            $50
                          </button>
                          <button type="button" className={`${donationAmount === '100' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 border-gray-300'} border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} onClick={() => handleDonationAmountClick('100')}>
                            $100
                          </button>
                          <button type="button" className={`${donationAmount === '250' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 border-gray-300'} border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} onClick={() => handleDonationAmountClick('250')}>
                            $250
                          </button>
                        </div>
                        <div className="mt-3">
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">
                                $
                              </span>
                            </div>
                            <input type="text" name="custom-amount" id="custom-amount" className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="Custom amount" value={customAmount} onChange={handleCustomAmountChange} onClick={() => setDonationAmount('custom')} />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm" id="price-currency">
                                USD
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          Frequency
                        </label>
                        <p className="text-sm text-gray-500">
                          Choose how often you'd like to donate
                        </p>
                        <fieldset className="mt-4">
                          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                            <div className="flex items-center">
                              <input id="one-time" name="donation-frequency" type="radio" checked={donationFrequency === 'one-time'} onChange={() => setDonationFrequency('one-time')} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                              <label htmlFor="one-time" className="ml-3 block text-sm font-medium text-gray-700">
                                One-time
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input id="monthly" name="donation-frequency" type="radio" checked={donationFrequency === 'monthly'} onChange={() => setDonationFrequency('monthly')} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                              <label htmlFor="monthly" className="ml-3 block text-sm font-medium text-gray-700">
                                Monthly
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input id="annually" name="donation-frequency" type="radio" checked={donationFrequency === 'annually'} onChange={() => setDonationFrequency('annually')} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
                              <label htmlFor="annually" className="ml-3 block text-sm font-medium text-gray-700">
                                Annually
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div>
                        <label htmlFor="donor-name" className="block text-sm font-medium text-gray-700">
                          Your Name
                        </label>
                        <div className="mt-1">
                          <input type="text" name="donor-name" id="donor-name" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" value={donorName} onChange={e => setDonorName(e.target.value)} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="donor-email" className="block text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <div className="mt-1">
                          <input type="email" name="donor-email" id="donor-email" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md" value={donorEmail} onChange={e => setDonorEmail(e.target.value)} />
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input id="anonymous" name="anonymous" type="checkbox" checked={isAnonymous} onChange={e => setIsAnonymous(e.target.checked)} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="anonymous" className="font-medium text-gray-700">
                            Make my donation anonymous
                          </label>
                        </div>
                      </div>
                      <div>
                        <Button type="submit" fullWidth>
                          Donate Now
                        </Button>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                          Secure payment processing. TVETLink is a registered
                          501(c)(3) nonprofit organization.
                        </p>
                      </div>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Impact Metrics */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Our Impact
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
              Measurable results of connecting TVET graduates with private sector opportunities.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Students Placed</div>
              <div className="text-sm text-gray-600">TVET graduates employed through our platform</div>
            </div>
            <div className="bg-green-50 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Partner Companies</div>
              <div className="text-sm text-gray-600">Private sector employers actively hiring</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Job Placement Rate</div>
              <div className="text-sm text-gray-600">Success rate for platform users</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">Salary Increase</div>
              <div className="text-sm text-gray-600">Average salary boost for graduates</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              <div className="pt-6">
                <dt className="text-lg">
                  <button className="text-left w-full flex justify-between items-start text-gray-400">
                    <span className="font-medium text-gray-900">
                      Is my donation tax-deductible?
                    </span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12">
                  <p className="text-base text-gray-500">
                    Yes, TVETLink is a registered 501(c)(3) nonprofit
                    organization. Your donation is tax-deductible to the extent
                    allowed by law.
                  </p>
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button className="text-left w-full flex justify-between items-start text-gray-400">
                    <span className="font-medium text-gray-900">
                      How is my donation used?
                    </span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12">
                  <p className="text-base text-gray-500">
                    Your donation directly supports our programs, including
                    scholarships, training center improvements, job placement
                    services, and platform development.
                  </p>
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button className="text-left w-full flex justify-between items-start text-gray-400">
                    <span className="font-medium text-gray-900">
                      Can I specify how my donation is used?
                    </span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12">
                  <p className="text-base text-gray-500">
                    Yes, for donations over $1,000, you can specify which
                    program area you'd like to support. Please contact us
                    directly for more information.
                  </p>
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-lg">
                  <button className="text-left w-full flex justify-between items-start text-gray-400">
                    <span className="font-medium text-gray-900">
                      Do you accept non-monetary donations?
                    </span>
                  </button>
                </dt>
                <dd className="mt-2 pr-12">
                  <p className="text-base text-gray-500">
                    Yes, we accept in-kind donations such as equipment for
                    training centers, software licenses, and professional
                    services. Please contact us to discuss.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">
              Together, we can build the future workforce.
            </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Your support makes a real difference in the lives of students
            seeking skills and opportunities for better futures.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button size="lg" onClick={handleDonateNow}>Donate Now</Button>
            </div>
            <div className="ml-3 inline-flex">
              <Button variant="outline" size="lg" className="bg-blue-100 text-blue-700 hover:bg-blue-200" onClick={handleBecomePartner}>
                Become a Partner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default DonationPage;