
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Utensils } from 'lucide-react';
import DonationList from '@/components/donations/DonationList';

const FoodDonationsPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="bg-goodshare-green/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-green-700">
            <Utensils className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Food Donations</h1>
          <p className="text-muted-foreground text-lg">
            Help reduce food waste and feed those in need by sharing surplus food from events, restaurants, or homes.
          </p>
        </div>
        
        <DonationList filters={{ category: 'food' }} />
      </div>
    </Layout>
  );
};

export default FoodDonationsPage;
