
import React from 'react';
import Layout from '@/components/layout/Layout';
import { ToyBrick } from 'lucide-react';
import DonationList from '@/components/donations/DonationList';

const ToysDonationsPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-700">
            <ToyBrick className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Toys Donations</h1>
          <p className="text-muted-foreground text-lg">
            Share toys and games to bring joy, learning, and play to children who need it most.
          </p>
        </div>
        
        <DonationList filters={{ category: 'toys' }} />
      </div>
    </Layout>
  );
};

export default ToysDonationsPage;
