import React from 'react';
import Card, { CardBody } from '../common/Card';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "I expanded my small shop into a second location after participating in training programs like Competency-Based Economies through Formation of Enterprises (CEFE) and Business Counselling and Exchange (BCE). With support from these programs, my husband and I secured a bank loan to grow our business.",
    name: 'Mukapasika Herondine',
    role: 'Retail Business Owner'
  },
  {
    quote: "I pursued a seven-month hairdressing program through the Dukorane Umurava project. Upon completion, I secured employment at a salon in Kabeza, Kigali, enabling me to support my family.",
    name: 'Muhoza Joyeuse',
    role: 'Hairdressing Entrepreneur'
  },
  {
    quote: "I utilized the skills acquired from TVET to open my own hair salon, demonstrating the potential of TVET education in fostering entrepreneurship and self-reliance.",
    name: 'Ngarukiye Dieu Merci',
    role: 'Salon Owner'
  },
  {
    quote: "As a mother from Kageyo Sector, I benefited from entrepreneurship training provided by the Dukorane Umurava project. With guidance from Business Development Advisors, I secured a loan to revive my chicken-rearing business, which had been impacted by the COVID-19 pandemic.",
    name: 'Mukayisinga Sezibera Dionyse',
    role: 'Poultry Farmer'
  }
];

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  role
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
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
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