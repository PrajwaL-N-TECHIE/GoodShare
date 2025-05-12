
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import DonationFilter from '@/components/donations/DonationFilter';
import DonationList from '@/components/donations/DonationList';
import { Button } from '@/components/ui/button';
import { PlusCircle, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { toast } from '@/hooks/use-toast';

const DonationsPage = () => {
  const [filters, setFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    setIsFilterOpen(false);
    
    // Toast for filter application (mobile only)
    if (window.innerWidth < 768) {
      toast({
        title: "Filters Applied",
        description: "Showing donations matching your criteria.",
      });
    }
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Available Donations</h1>
            <p className="text-muted-foreground">
              Browse through available donations and connect with donors
            </p>
          </div>
          <Button asChild className="hidden md:flex bg-goodshare-purple hover:bg-goodshare-purple/90">
            <Link to="/donations" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Add Donation
            </Link>
          </Button>
        </div>

        <div className="md:grid md:grid-cols-4 gap-6">
          <div className="hidden md:block">
            <DonationFilter onFilterChange={handleFilterChange} />
          </div>
          
          <div className="col-span-3">
            <div className="flex justify-between items-center mb-6 md:hidden">
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[85vw] max-w-sm">
                  <div className="pt-6">
                    <DonationFilter onFilterChange={handleFilterChange} />
                  </div>
                </SheetContent>
              </Sheet>
              
              <Button asChild className="bg-goodshare-purple hover:bg-goodshare-purple/90">
                <Link to="/donations" className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4" />
                  Add Donation
                </Link>
              </Button>
            </div>
            
            <DonationList filters={filters} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonationsPage;
