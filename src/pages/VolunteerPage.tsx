
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VolunteerPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="bg-goodshare-lightpurple/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-goodshare-purple">
            <Heart className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Volunteer With Us</h1>
          <p className="text-muted-foreground text-lg">
            Join our community of volunteers helping to sort, transport, and distribute donations to those in need.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6">How You Can Help</h2>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="bg-goodshare-purple/10 rounded-full p-4 text-goodshare-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path><path d="M7 3a9 9 0 0 1 10 0"></path><path d="M19 9a7.5 7.5 0 0 0-16 0"></path></svg>
              </div>
              <div>
                <h3 className="font-medium">Collection Centers</h3>
                <p className="text-muted-foreground">Help sort and organize donations at our collection centers.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="bg-goodshare-purple/10 rounded-full p-4 text-goodshare-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><rect width="1" height="1" x="9" y="9"></rect><rect width="1" height="1" x="14" y="9"></rect></svg>
              </div>
              <div>
                <h3 className="font-medium">Community Outreach</h3>
                <p className="text-muted-foreground">Spread awareness about GoodShare in your community.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="bg-goodshare-purple/10 rounded-full p-4 text-goodshare-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"></path><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></path></svg>
              </div>
              <div>
                <h3 className="font-medium">Delivery Volunteer</h3>
                <p className="text-muted-foreground">Help transport donations from donors to NGOs or directly to recipients.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button size="lg" className="px-8">Register as Volunteer</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VolunteerPage;
