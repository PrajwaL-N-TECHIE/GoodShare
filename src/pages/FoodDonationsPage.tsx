
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Utensils, Star } from 'lucide-react';
import DonationList from '@/components/donations/DonationList';
import { Button } from '@/components/ui/button';

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
        
        {/* Featured food donation campaign */}
        <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl overflow-hidden mb-12 max-w-5xl mx-auto shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>
          <div className="grid md:grid-cols-2 gap-6 p-8 relative z-10">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center mb-4">
                <div className="bg-green-500/20 p-2 rounded-full text-green-700 mr-2">
                  <Star className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-green-700">Featured Campaign</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Weekend Food Drive</h2>
              <p className="text-gray-600 mb-6">
                Join our initiative to collect surplus food from restaurants and deliver to shelters every weekend. Just 100kg of food can feed up to 150 people in need.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Goal: 500kg of food</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Collected: 325kg so far</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">15 restaurants participating</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Join the Food Drive</Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <img 
                  src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2000&auto=format&fit=crop" 
                  alt="Weekend Food Drive" 
                  className="rounded-lg shadow-lg object-cover h-64 w-full md:h-80"
                />
                <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-4 shadow-lg animate-bounce">
                  <span className="font-bold text-green-600">65%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DonationList filters={{ category: 'food' }} />
      </div>
    </Layout>
  );
};

export default FoodDonationsPage;
