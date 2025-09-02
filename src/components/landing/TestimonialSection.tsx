import React from 'react';
import Card, { CardBody } from '../common/Card';
import dariusImg from '../../assets/images/Darius.jpg';
import emmanuelImg from '../../assets/images/emmanuel.jpg';
import irankundaImg from '../../assets/images/Irankunda.jpeg';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "From welder to educator and entrepreneur! After training at Center for Champions in Kayonza District, I became an instructor and opened my own welding workshops. TVET transformed my life completely - better salary, marriage, and investments that secure my future.",
    name: 'Darius Uwizeye',
    role: 'Welder Turned Educator & Entrepreneur',
    image: dariusImg
  },
  {
    quote: "Graduated in motor vehicle mechanics from IPRC Karongi and developed the 'green vehicle system' - an electronic device to control vehicle air pollution. Now I'm CEO of GREENALYTIC LTD, employing multiple staff and making a real environmental impact.",
    name: 'Emmanuel Tuyizere',
    role: 'Environmental Innovator & CEO',
    image: emmanuelImg
  },
  {
    quote: "As a 2022 Rwanda Polytechnic graduate, I founded INNOVAHYPER Technologies, producing construction machinery from recycled electronic waste. We're creating affordable, eco-friendly equipment while employing 6 permanent staff and up to 60 individuals through projects.",
    name: 'Claude Irankunda',
    role: 'Founder & CEO of Innovahyper Technologies',
    image: irankundaImg
  }
];

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  role,
  image
}) => {
  return (
    <Card className="h-full flex flex-col">
      <CardBody className="flex flex-col flex-grow">
        <div className="flex-grow">
          <svg className="h-8 w-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-gray-600 mb-4">{quote}</p>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden flex-shrink-0">
            <img src={image} alt={name} className="h-full w-full object-cover object-center" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const TestimonialSection: React.FC = () => {
  return <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Hear from students, employers, and training centers who have
            transformed their futures with TVETLink.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
        </div>
      </div>
    </section>;
};
export default TestimonialSection;