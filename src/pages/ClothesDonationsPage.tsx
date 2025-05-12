
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Shirt } from 'lucide-react';
import DonationList from '@/components/donations/DonationList';

const ClothesDonationsPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="bg-goodshare-yellow/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-700">
            <Shirt className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Clothes Donations</h1>
          <p className="text-muted-foreground text-lg">
            Share gently used clothing to help provide warmth and dignity to individuals and families in need.
          </p>
        </div>
        
        <DonationList filters={{ category: 'clothes' }} />
      </div>
    </Layout>
  );
};

export default ClothesDonationsPage;
