import React from 'react';
import Hero from '../components/landing/Hero';
import TestimonialSection from '../components/landing/TestimonialSection';
import EventsSection from '../components/landing/EventsSection';
const LandingPage: React.FC = () => {
  return <div className="pt-16">
      <Hero />
      <TestimonialSection />
      <EventsSection />
    </div>;
};
export default LandingPage;