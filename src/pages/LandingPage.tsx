import React from 'react';
import Hero from '../components/landing/Hero';
import TestimonialSection from '../components/landing/TestimonialSection';
import DonationSection from '../components/landing/DonationSection';
import EventsSection from '../components/landing/EventsSection';
const LandingPage: React.FC = () => {
  return <div className="pt-16">
      <Hero />
      <TestimonialSection />
      <DonationSection />
      <EventsSection />
    </div>;
};
export default LandingPage;