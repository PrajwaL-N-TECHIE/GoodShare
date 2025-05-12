
import React from 'react';
import DonationCard, { DonationProps } from './DonationCard';

// Mock data for donations
const mockDonations: DonationProps[] = [
  {
    id: '1',
    title: 'Surplus Food from Corporate Event',
    description: 'We have surplus food from our corporate event that can feed approximately 50 people. The food includes sandwiches, pastries, and fruit platters.',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    location: 'Indiranagar, Bangalore',
    postedDate: '2 hours ago',
    donorName: 'TechCorp India',
    donorType: 'business'
  },
  {
    id: '2',
    title: 'Children\'s Books Collection',
    description: 'A collection of 30+ children\'s books in good condition suitable for ages 5-12. Includes educational books and storybooks.',
    category: 'books',
    image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2787&auto=format&fit=crop',
    location: 'Koramangala, Bangalore',
    postedDate: '1 day ago',
    donorName: 'Rohan Mehta',
    donorType: 'individual'
  },
  {
    id: '3',
    title: 'Winter Clothing Drive',
    description: 'Collection of winter clothes including sweaters, jackets, and warm socks. Most items are gently used and clean.',
    category: 'clothes',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop',
    location: 'HSR Layout, Bangalore',
    postedDate: '3 days ago',
    donorName: 'Community Center',
    donorType: 'organization'
  },
  {
    id: '4',
    title: 'Restaurant Surplus Food',
    description: 'Daily surplus food from our restaurant kitchen. Can feed 15-20 people. Available for pickup after 10 PM.',
    category: 'food',
    image: 'https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=2070&auto=format&fit=crop',
    location: 'Whitefield, Bangalore',
    postedDate: '5 hours ago',
    donorName: 'Spice Garden Restaurant',
    donorType: 'business'
  },
  {
    id: '5',
    title: 'Academic Textbooks',
    description: 'University textbooks for engineering and computer science courses. Excellent condition, recent editions.',
    category: 'books',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2787&auto=format&fit=crop',
    location: 'Electronic City, Bangalore',
    postedDate: '2 days ago',
    donorName: 'Priya Sharma',
    donorType: 'individual'
  },
  {
    id: '6',
    title: 'Children\'s Clothing Batch',
    description: 'Assorted children\'s clothing for ages 2-5 years. Over 25 items including shirts, pants, and dresses.',
    category: 'clothes',
    image: 'https://images.unsplash.com/photo-1624623278313-a930126a11c3?q=80&w=2070&auto=format&fit=crop',
    location: 'Marathahalli, Bangalore',
    postedDate: '4 days ago',
    donorName: 'Happy Tots Daycare',
    donorType: 'organization'
  }
];

interface DonationListProps {
  filters?: any;
}

const DonationList = ({ filters }: DonationListProps) => {
  // In a real application, you would filter the donations based on the filters prop
  const donations = mockDonations;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {donations.map(donation => (
        <DonationCard key={donation.id} {...donation} />
      ))}
    </div>
  );
};

export default DonationList;
