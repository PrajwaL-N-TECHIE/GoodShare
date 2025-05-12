
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ImpactSection from '@/components/home/ImpactSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import ImageCarousel from '@/components/home/ImageCarousel';
import CategorySection from '@/components/home/CategorySection';

const Index = () => {
  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <div className="reveal">
        <ImageCarousel />
      </div>
      <div className="reveal">
        <HowItWorksSection />
      </div>
      <div className="reveal">
        <ImpactSection />
      </div>
      <div className="reveal">
        <TestimonialsSection />
      </div>
      <div className="reveal">
        <CategorySection />
      </div>
      <div className="reveal">
        <CTASection />
      </div>
    </Layout>
  );
};

export default Index;
