
import React from 'react';
import { 
  ListChecks, 
  Truck, 
  UserCheck, 
  Search,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    icon: <ListChecks className="h-8 w-8" />,
    title: 'List Your Donation',
    description: 'Add details about your surplus food, clothes, or books.'
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: 'NGOs Find Your Items',
    description: 'Local NGOs can browse and request your donations.'
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Coordinate Pickup',
    description: 'Arrange a convenient time and location for pickup.'
  },
  {
    icon: <UserCheck className="h-8 w-8" />,
    title: 'Track Your Impact',
    description: 'See how your donations help the community.'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            GoodShare makes donating easy. Follow these simple steps to share your surplus items with those in need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-goodshare-purple/10 text-goodshare-purple rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_16px)] transform -translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
