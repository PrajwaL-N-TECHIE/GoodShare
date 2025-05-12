
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface DonationFilterProps {
  onFilterChange: (filters: any) => void;
}

const DonationFilter = ({ onFilterChange }: DonationFilterProps) => {
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
              />
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Categories</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="food" />
                <Label htmlFor="food" className="text-sm font-normal">Food</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="clothes" />
                <Label htmlFor="clothes" className="text-sm font-normal">Clothes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="books" />
                <Label htmlFor="books" className="text-sm font-normal">Books</Label>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Donor Type</h3>
            <RadioGroup defaultValue="all">
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
            <Slider defaultValue={[5]} max={50} step={1} className="mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>0 km</span>
              <span>50 km</span>
            </div>
          </div>

          <Button className="w-full">Apply Filters</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonationFilter;
