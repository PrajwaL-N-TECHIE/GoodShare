
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface DonationFilterProps {
  onFilterChange: (filters: any) => void;
}

const DonationFilter = ({ onFilterChange }: DonationFilterProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [donorType, setDonorType] = useState('all');
  const [distance, setDistance] = useState<number[]>([5]);

  // Handle checkbox changes for categories
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setCategories(prev => [...prev, category]);
    } else {
      setCategories(prev => prev.filter(item => item !== category));
    }
  };

  // Apply filters
  const applyFilters = () => {
    const filters = {
      searchQuery: searchQuery.trim().toLowerCase(),
      categories: categories.length > 0 ? categories : undefined,
      donorType: donorType !== 'all' ? donorType : undefined,
      distance: distance[0]
    };
    
    onFilterChange(filters);
    toast({
      title: "Filters Applied",
      description: `Found items matching your criteria.`,
    });
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="space-y-6">
          <div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search donations..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="food" 
                  checked={categories.includes('food')}
                  onCheckedChange={(checked) => handleCategoryChange('food', checked === true)}
                />
                <Label htmlFor="food" className="text-sm font-normal">Food</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="clothes"
                  checked={categories.includes('clothes')}
                  onCheckedChange={(checked) => handleCategoryChange('clothes', checked === true)}
                />
                <Label htmlFor="clothes" className="text-sm font-normal">Clothes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="books"
                  checked={categories.includes('books')}
                  onCheckedChange={(checked) => handleCategoryChange('books', checked === true)}
                />
                <Label htmlFor="books" className="text-sm font-normal">Books</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="footwear"
                  checked={categories.includes('footwear')}
                  onCheckedChange={(checked) => handleCategoryChange('footwear', checked === true)}
                />
                <Label htmlFor="footwear" className="text-sm font-normal">Footwear</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="furniture"
                  checked={categories.includes('furniture')}
                  onCheckedChange={(checked) => handleCategoryChange('furniture', checked === true)}
                />
                <Label htmlFor="furniture" className="text-sm font-normal">Furniture</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="toys"
                  checked={categories.includes('toys')}
                  onCheckedChange={(checked) => handleCategoryChange('toys', checked === true)}
                />
                <Label htmlFor="toys" className="text-sm font-normal">Toys</Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Donor Type</h3>
            <RadioGroup defaultValue="all" value={donorType} onValueChange={setDonorType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all-donors" />
                <Label htmlFor="all-donors" className="text-sm font-normal">All Donors</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="individual" id="individuals" />
                <Label htmlFor="individuals" className="text-sm font-normal">Individuals</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="business" />
                <Label htmlFor="business" className="text-sm font-normal">Businesses</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="organization" id="organizations" />
                <Label htmlFor="organizations" className="text-sm font-normal">Organizations</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <h3 className="font-medium mb-3">Distance (km)</h3>
            <Slider 
              value={distance} 
              onValueChange={setDistance} 
              max={50} 
              step={1} 
              className="mb-2" 
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>0 km</span>
              <span>{distance[0]} km</span>
              <span>50 km</span>
            </div>
          </div>

          <Button onClick={applyFilters} className="w-full bg-goodshare-purple hover:bg-goodshare-purple/90">
            Apply Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonationFilter;
