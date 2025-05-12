
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-0"></div>
      
      <div className="container relative z-10 py-24 md:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-float mb-6 inline-block">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Making kindness accessible to everyone
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Sharing Kindness, <br />Building <span className="text-goodshare-lightpurple">Communities</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up max-w-2xl mx-auto">
            GoodShare connects donors with NGOs to distribute surplus food, clothes, and books to those who need it most.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Button size="lg" asChild className="bg-white text-goodshare-purple hover:bg-white/90 w-full sm:w-auto btn-glow transition-all hover:shadow-xl">
              <Link to="/donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10 w-full sm:w-auto transition-all">
              <Link to="/ngos" className="flex items-center gap-2">
                Find NGOs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          {!isMobile && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="flex gap-4 py-3 px-6 bg-white rounded-full shadow-lg animate-slide-up">
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><circle cx="12" cy="10" r="2"></circle><path d="M8 2v2"></path><path d="M16 2v2"></path></svg>
                  </div>
                  <div>
                    <span className="text-gray-800 font-medium">450+</span>
                    <p className="text-xs text-gray-500">Daily Donations</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                  </div>
                  <div>
                    <span className="text-gray-800 font-medium">120+</span>
                    <p className="text-xs text-gray-500">NGO Partners</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center text-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
                  </div>
                  <div>
                    <span className="text-gray-800 font-medium">50K+</span>
                    <p className="text-xs text-gray-500">Lives Impacted</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Wave SVG at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
          <path fillOpacity="1" d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,58.7C840,64,960,64,1080,56C1200,48,1320,32,1380,24L1440,16L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
