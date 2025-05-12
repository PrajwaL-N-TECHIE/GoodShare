
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ImpactSection from '@/components/home/ImpactSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import ImageCarousel from '@/components/home/ImageCarousel';
import CategorySection from '@/components/home/CategorySection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ImageCarousel />
      <HowItWorksSection />
      <ImpactSection />
      <TestimonialsSection />
      <CategorySection />
      <CTASection />
    </Layout>
  );
};

export default Index;
