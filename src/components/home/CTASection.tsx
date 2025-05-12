
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 bg-goodshare-purple text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 text-white/80">
            Whether you're an individual, business, or NGO, you can start sharing and making an impact today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-goodshare-purple hover:bg-white/90 w-full sm:w-auto">
              <Link to="/register">Join GoodShare</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
