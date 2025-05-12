
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ImpactSection from '@/components/home/ImpactSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import ImageCarousel from '@/components/home/ImageCarousel';
import CategorySection from '@/components/home/CategorySection';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  // Use react-intersection-observer for more efficient animations
  const { ref: carouselRef, inView: carouselInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: howItWorksRef, inView: howItWorksInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: impactRef, inView: impactInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: testimonialRef, inView: testimonialInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: categoryRef, inView: categoryInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Layout>
      <Hero />
      
      <div 
        ref={carouselRef} 
        className={`transition-all duration-1000 ease-out ${
          carouselInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ImageCarousel />
      </div>
      
      <div 
        ref={howItWorksRef} 
        className={`transition-all duration-1000 ease-out delay-100 ${
          howItWorksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <HowItWorksSection />
      </div>
      
      <div 
        ref={impactRef} 
        className={`transition-all duration-1000 ease-out delay-200 ${
          impactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ImpactSection />
      </div>
      
      <div 
        ref={testimonialRef} 
        className={`transition-all duration-1000 ease-out delay-300 ${
          testimonialInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <TestimonialsSection />
      </div>
      
      <div 
        ref={categoryRef} 
        className={`transition-all duration-1000 ease-out delay-400 ${
          categoryInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <CategorySection />
      </div>
      
      <div 
        ref={ctaRef} 
        className={`transition-all duration-1000 ease-out delay-500 ${
          ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <CTASection />
      </div>
    </Layout>
  );
};

export default Index;
