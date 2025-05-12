
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Users, Calendar } from 'lucide-react';

// Mock data for NGOs
const mockNGOs = [
  {
    id: '1',
    name: 'Food For All',
    logo: 'FFA',
    description: 'Working to eliminate hunger by redistributing surplus food to underserved communities.',
    location: 'Bangalore, Karnataka',
    founded: '2015',
    beneficiaries: '10,000+',
    categories: ['food'],
    website: 'https://foodforall.org'
  },
  {
    id: '2',
    name: 'Clothes For Dignity',
    logo: 'CFD',
    description: 'Providing clothing to underprivileged families to help restore dignity and confidence.',
    location: 'Chennai, Tamil Nadu',
    founded: '2017',
    beneficiaries: '5,000+',
    categories: ['clothes'],
    website: 'https://clothesfordignity.org'
  },
  {
    id: '3',
    name: 'Education Empowerment Trust',
    logo: 'EET',
    description: 'Promoting literacy and education by providing books and learning materials to schools in rural areas.',
    location: 'Hyderabad, Telangana',
    founded: '2012',
    beneficiaries: '15,000+',
    categories: ['books'],
    website: 'https://educationempowerment.org'
  },
  {
    id: '4',
    name: 'Community Care Foundation',
    logo: 'CCF',
    description: 'A holistic NGO addressing multiple needs including food, clothing, and education for underserved communities.',
    location: 'Mumbai, Maharashtra',
    founded: '2010',
    beneficiaries: '25,000+',
    categories: ['food', 'clothes', 'books'],
    website: 'https://communitycare.org'
  },
  {
    id: '5',
    name: 'Rural Development Initiative',
    logo: 'RDI',
    description: 'Working with rural communities to improve living standards through resource distribution and education.',
    location: 'Pune, Maharashtra',
    founded: '2014',
    beneficiaries: '8,000+',
    categories: ['food', 'clothes'],
    website: 'https://ruraldevelopment.org'
  },
  {
    id: '6',
    name: 'Child Welfare Society',
    logo: 'CWS',
    description: 'Dedicated to improving the lives of underprivileged children through education and basic necessities.',
    location: 'Delhi, Delhi',
    founded: '2008',
    beneficiaries: '12,000+',
    categories: ['clothes', 'books'],
    website: 'https://childwelfare.org'
  }
];

const categoryColors = {
  food: 'bg-green-100 text-green-800',
  clothes: 'bg-yellow-100 text-yellow-800',
  books: 'bg-orange-100 text-orange-800'
};

const categoryLabels = {
  food: 'Food',
  clothes: 'Clothes',
  books: 'Books'
};

const NGOsPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-bold mb-4">NGO Partners</h1>
          <p className="text-muted-foreground">
            Meet the amazing NGOs that distribute your donations to those who need them most.
          </p>
          <div className="mt-6 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search NGOs by name or location..."
              className="pl-10 py-6"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNGOs.map((ngo) => (
            <Card key={ngo.id} className="overflow-hidden card-hover-effect">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-goodshare-purple/20">
                    <AvatarImage src={ngo.logo} alt={ngo.name} />
                    <AvatarFallback className="bg-goodshare-purple text-white">
                      {ngo.logo}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">{ngo.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      <span>{ngo.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  {ngo.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {ngo.categories.map((category) => (
                    <Badge 
                      key={category} 
                      className={categoryColors[category as keyof typeof categoryColors]}
                    >
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    <span>Est. {ngo.founded}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-3.5 w-3.5 mr-1" />
                    <span>{ngo.beneficiaries} served</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <a href={ngo.website} target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NGOsPage;
