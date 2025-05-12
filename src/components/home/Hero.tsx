
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2940&auto=format&fit=crop')`,
          backgroundBlendMode: 'overlay'
        }}
      />
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Sharing Kindness, <br />Building Communities
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up">
            GoodShare connects donors with NGOs to distribute surplus food, clothes, and books to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Button size="lg" asChild className="bg-white text-goodshare-purple hover:bg-white/90 w-full sm:w-auto">
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              <Link to="/ngos" className="flex items-center gap-2">
                Find NGOs <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
