export interface Testimonial {
  id: string;
  author: string;
  location: string;
  serviceType: string;
  rating: number;
  date: string;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'K. Venkat Rao',
    location: 'Harujanwada, Champapet',
    serviceType: 'Sump & Sintex Tank Cleaning',
    rating: 5,
    date: 'Recent Customer',
    comment: 'Booked them for both my underground sump and 1000L Sintex rooftop tank. They pumped out all bottom silt and scrubbed the tank walls very cleanly. Arrived on time and completed the work without any mess.'
  },
  {
    id: '2',
    author: 'Sunitha Reddy',
    location: 'Santosh Nagar, Hyderabad',
    serviceType: 'Residential Water Tank Cleaning',
    rating: 5,
    date: 'Recent Customer',
    comment: 'Very polite and professional service. We had heavy borewell sand sediment in our overhead tank. Vijaya team cleared everything thoroughly and verified with torch inspection before refilling.'
  },
  {
    id: '3',
    author: 'Mohammed Imran',
    location: 'Saidabad, Hyderabad',
    serviceType: 'Commercial Water Tank Cleaning',
    rating: 5,
    date: 'Recent Customer',
    comment: 'Managed the water tank cleaning for our 3-storey commercial building in Saidabad. Easy coordination over WhatsApp, prompt arrival with dewatering pumps, and clean execution.'
  },
  {
    id: '4',
    author: 'Rajesh Goud',
    location: 'Saroornagar / Karmanghat',
    serviceType: 'Underground Tank Cleaning',
    rating: 5,
    date: 'Recent Customer',
    comment: 'Deep sludge had accumulated in our ground sump over 2 years. They dewatered and removed all bottom mud within 2 hours. Reasonable price and reliable team.'
  },
  {
    id: '5',
    author: 'P. Srinivas',
    location: 'IS Sadan, Champapet',
    serviceType: 'Overhead Tank Cleaning',
    rating: 5,
    date: 'Recent Customer',
    comment: 'Very thorough cleaning for our apartment overhead tank. The scaling on the walls was completely removed with high-pressure scrubbing and vacuuming. Great job.'
  },
  {
    id: '6',
    author: 'Anand Kumar',
    location: 'Kanchanbagh, Hyderabad',
    serviceType: 'Industrial Tank Cleaning',
    rating: 5,
    date: 'Recent Customer',
    comment: 'Prompt response and proper dewatering equipment for our commercial unit water reservoir. Cleaned the entire storage unit efficiently with zero disruption to operations.'
  }
];
