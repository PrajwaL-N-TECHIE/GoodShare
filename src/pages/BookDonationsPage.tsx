
import React from 'react';
import Layout from '@/components/layout/Layout';
import { BookOpen, Star } from 'lucide-react';
import DonationList from '@/components/donations/DonationList';
import { Button } from '@/components/ui/button';

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
        
        {/* Featured book donation campaign */}
        <div className="relative bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl overflow-hidden mb-12 max-w-5xl mx-auto shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>
          <div className="grid md:grid-cols-2 gap-6 p-8 relative z-10">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center mb-4">
                <div className="bg-amber-500/20 p-2 rounded-full text-amber-700 mr-2">
                  <Star className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-amber-700">Featured Campaign</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-800">Children's Book Drive 2025</h2>
              <p className="text-gray-600 mb-6">
                Help us collect 10,000 children's books this month to create reading corners in underserved schools. Each book donation brings joy and knowledge to a child's life.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Goal: 10,000 books</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">Collected: 4,230 books</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">30 days remaining</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '42%' }}></div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Join the Book Drive</Button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                <img 
                  src="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2787&auto=format&fit=crop" 
                  alt="Children's books collection" 
                  className="rounded-lg shadow-lg object-cover h-64 w-full md:h-80"
                />
                <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-4 shadow-lg animate-bounce">
                  <span className="font-bold text-amber-600">42%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DonationList filters={{ category: 'books' }} />
      </div>
    </Layout>
  );
};

export default BookDonationsPage;
