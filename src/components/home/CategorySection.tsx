
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  BookOpen, 
  Shirt,
  Footprints,
  Sofa,
  ToyBrick,
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import RevealOnScroll from '@/components/animations/RevealOnScroll';

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
  },
  {
    name: 'Footwear Donations',
    icon: <Footprints className="h-8 w-8" />,
    color: 'bg-blue-100',
    textColor: 'text-blue-700',
    description: 'Help people walk with dignity and comfort by donating gently used or new footwear.',
    link: '/donations/footwear'
  },
  {
    name: 'Furniture Donations',
    icon: <Sofa className="h-8 w-8" />,
    color: 'bg-purple-100',
    textColor: 'text-purple-700',
    description: 'Share furniture to help create comfortable living spaces for families in need.',
    link: '/donations/furniture'
  },
  {
    name: 'Toys Donations',
    icon: <ToyBrick className="h-8 w-8" />,
    color: 'bg-pink-100',
    textColor: 'text-pink-700',
    description: 'Bring joy to children by donating toys, games, and other play items.',
    link: '/donations/toys'
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Can You Donate?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every donation makes a difference. Explore the different categories of items you can share to help others.
            </p>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <RevealOnScroll key={index} delay={index * 100} direction="up">
              <Card className="border-none shadow-md category-card hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
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
                    className={`flex items-center gap-1 font-medium ${category.textColor} hover:underline group`}
                  >
                    Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
