
import React from 'react';
import Layout from '@/components/layout/Layout';
import { BookOpen } from 'lucide-react';
import DonationList from '@/components/donations/DonationList';

const BookDonationsPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="bg-goodshare-orange/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-700">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Donations</h1>
          <p className="text-muted-foreground text-lg">
            Spread knowledge by donating books to schools, libraries, and community centers.
          </p>
        </div>
        
        <DonationList filters={{ category: 'books' }} />
      </div>
    </Layout>
  );
};

export default BookDonationsPage;
