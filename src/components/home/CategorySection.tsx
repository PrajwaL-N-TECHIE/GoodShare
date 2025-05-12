
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  BookOpen, 
  Shirt, 
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    name: 'Food Donations',
    icon: <Utensils className="h-8 w-8" />,
    color: 'bg-goodshare-green/30',
    textColor: 'text-green-700',
    description: 'Donate surplus food from events, restaurants, or homes to help feed those in need.',
    link: '/donations/food'
  },
  {
    name: 'Clothes Donations',
    icon: <Shirt className="h-8 w-8" />,
    color: 'bg-goodshare-yellow/30',
    textColor: 'text-amber-700',
    description: 'Share gently used clothing to help provide warmth and dignity to individuals and families.',
    link: '/donations/clothes'
  },
  {
    name: 'Book Donations',
    icon: <BookOpen className="h-8 w-8" />,
    color: 'bg-goodshare-orange/30',
    textColor: 'text-orange-700',
    description: 'Spread knowledge by donating books to schools, libraries, and community centers.',
    link: '/donations/books'
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Can You Donate?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every donation makes a difference. Explore the different categories of items you can share to help others.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="border-none shadow-md card-hover-effect">
              <CardContent className="p-6">
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 ${category.textColor}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Link 
                  to={category.link} 
                  className={`flex items-center gap-1 font-medium ${category.textColor} hover:underline`}
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
