import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface DonationProps {
  id: string;
  title: string;
  description: string;
  category: 'food' | 'clothes' | 'books' | 'footwear' | 'furniture' | 'toys';
  image: string;
  location: string;
  postedDate: string;
  donorName: string;
  donorType: 'individual' | 'business' | 'organization';
}

const categoryColors = {
  food: 'bg-green-100 text-green-800',
  clothes: 'bg-yellow-100 text-yellow-800',
  books: 'bg-orange-100 text-orange-800',
  footwear: 'bg-blue-100 text-blue-800',
  furniture: 'bg-purple-100 text-purple-800',
  toys: 'bg-pink-100 text-pink-800'
};

const categoryLabels = {
  food: 'Food',
  clothes: 'Clothes',
  books: 'Books',
  footwear: 'Footwear',
  furniture: 'Furniture',
  toys: 'Toys'
};

const DonationCard = ({ id, title, description, category, image, location, postedDate, donorName, donorType }: DonationProps) => {
  return (
    <Card className="overflow-hidden card-hover-effect h-full flex flex-col">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <Badge 
          className={`absolute top-3 right-3 font-medium ${categoryColors[category]}`}
        >
          {categoryLabels[category]}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">
          by {donorName} • {donorType}
        </p>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex items-center text-sm text-muted-foreground mt-2">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          <span className="line-clamp-1">{location}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <Calendar className="h-3.5 w-3.5 mr-1" />
          <span>Posted {postedDate}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild className="w-full">
          <Link to={`/donations/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DonationCard;
