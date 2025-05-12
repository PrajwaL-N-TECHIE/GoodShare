
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import CategorySection from '@/components/home/CategorySection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ImpactSection from '@/components/home/ImpactSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <HowItWorksSection />
      <ImpactSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
