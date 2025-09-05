import React from 'react';
import Card, { CardBody, CardFooter } from '../common/Card';
import Button from '../common/Button';
import tvetShowcase2 from '../../assets/images/tvet-showcase2.jpg'
import tvetShowcase1 from '../../assets/images/tvet-showcase1.jpg'
import tvetShowcase3 from '../../assets/images/tvet-showcase3.jpg'
import tvetEntrepreneur from '../../assets/images/tvet-entrepreneur.jpg'

interface Event {
  id: number;
  title: string;
  type: string;
  date: string;
  location: string;
  image: string;
  description: string;
}
const upcomingEvents: Event[] = [{
  id: 1,
  title: 'Tech Career Fair',
  type: 'Job Fair',
  date: 'September 15, 2025',
  location: 'Virtual Event',
  image: tvetShowcase2,
  description: 'Connect with top tech companies hiring for entry-level and internship positions. Perfect for recent graduates and those looking to switch careers.'
}, {
  id: 2,
  title: 'Agriculture Workshop',
  type: 'Workshop',
  date: 'October 22-23, 2025',
  location: 'Downtown Training Center',
  image: tvetEntrepreneur,
  description: 'Learn the fundamentals of web development in this intensive two-day workshop. HTML, CSS, and JavaScript basics covered.'
}, {
  id: 3,
  title: 'Healthcare Innovation Hackathon',
  type: 'Hackathon',
  date: 'November 8-10, 2025',
  location: 'Medical Sciences Building',
  image: tvetShowcase1,
  description: 'Join teams of developers, designers, and healthcare professionals to create innovative solutions for healthcare challenges.'
}, {
  id: 4,
  title: 'Sustainable Manufacturing Seminar',
  type: 'Seminar',
  date: 'December 18, 2025',
  location: 'Industrial Training Institute',
  image: tvetShowcase3,
  description: "Learn about sustainable practices in manufacturing and how they're shaping the future of the industry."
}];
const EventCard: React.FC<{
  event: Event;
}> = ({
  event
}) => {
  return <Card className="h-full flex flex-col">
      <div className="h-48 w-full overflow-hidden">
        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
      </div>
      <CardBody className="flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {event.type}
          </span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          <p>{event.date}</p>
          <p>{event.location}</p>
        </div>
        <p className="mt-3 text-base text-gray-500">{event.description}</p>
      </CardBody>
      <CardFooter>
        <Button variant="outline" fullWidth>
          Register
        </Button>
      </CardFooter>
    </Card>;
};
const EventsSection: React.FC = () => {
  return <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Join us for workshops, job fairs, hackathons, and more to enhance
            your skills and expand your network.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.map(event => <EventCard key={event.id} event={event} />)}
        </div>
        <div className="mt-10 text-center">
          <Button variant="secondary">View All Events</Button>
        </div>
      </div>
    </section>;
};
export default EventsSection;