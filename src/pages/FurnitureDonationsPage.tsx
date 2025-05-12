
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Sofa } from 'lucide-react';
import DonationList from '@/components/donations/DonationList';

const FurnitureDonationsPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-700">
            <Sofa className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Furniture Donations</h1>
          <p className="text-muted-foreground text-lg">
            Donate furniture items to help create comfortable living spaces for families and individuals in need.
          </p>
        </div>
        
        <DonationList filters={{ category: 'furniture' }} />
      </div>
    </Layout>
  );
};

export default FurnitureDonationsPage;
