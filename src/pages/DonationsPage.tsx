
import React from 'react';
import Layout from '@/components/layout/Layout';
import DonationFilter from '@/components/donations/DonationFilter';
import DonationList from '@/components/donations/DonationList';
import { Button } from '@/components/ui/button';
import { PlusCircle, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const DonationsPage = () => {
  const [filters, setFilters] = React.useState({});

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Available Donations</h1>
            <p className="text-muted-foreground">
              Browse through available donations and connect with donors
            </p>
          </div>
          <Button asChild className="hidden md:flex">
            <Link to="/donate" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Add Donation
            </Link>
          </Button>
        </div>

        <div className="md:grid md:grid-cols-4 gap-6">
          <div className="hidden md:block">
            <DonationFilter onFilterChange={setFilters} />
          </div>
          
          <div className="col-span-3">
            <div className="flex justify-between items-center mb-6 md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="pt-6">
                    <DonationFilter onFilterChange={setFilters} />
                  </div>
                </SheetContent>
              </Sheet>
              
              <Button asChild>
                <Link to="/donate" className="flex items-center gap-2">
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
