
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Shoe } from 'lucide-react';
import DonationList from '@/components/donations/DonationList';

const FootwearDonationsPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-700">
            <Shoe className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Footwear Donations</h1>
          <p className="text-muted-foreground text-lg">
            Share gently used or new footwear to help people in need walk with dignity and comfort.
          </p>
        </div>
        
        <DonationList filters={{ category: 'footwear' }} />
      </div>
    </Layout>
  );
};

export default FootwearDonationsPage;
