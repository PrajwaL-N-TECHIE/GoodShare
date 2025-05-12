
import React from 'react';
import { 
  Users, 
  ShoppingBag, 
  Building, 
  Heart 
} from 'lucide-react';

const stats = [
  { value: '100+', label: 'NGOs Onboarded', icon: <Building className="h-6 w-6" /> },
  { value: '5,000+', label: 'Items Donated', icon: <ShoppingBag className="h-6 w-6" /> },
  { value: '1,000+', label: 'Active Donors', icon: <Users className="h-6 w-6" /> },
  { value: '10,000+', label: 'Lives Impacted', icon: <Heart className="h-6 w-6" /> },
];

const ImpactSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Together, we're making a difference. See how GoodShare has helped connect donations with those who need them most.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm border">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-goodshare-purple/10 text-goodshare-purple mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-goodshare-purple">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
