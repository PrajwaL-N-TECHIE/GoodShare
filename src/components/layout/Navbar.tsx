
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, User, Menu, X, Home, BookOpen, ShoppingBag, Users } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <nav className="border-b sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-goodshare-purple" />
            <span className="font-bold text-xl text-goodshare-purple">GoodShare</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-goodshare-purple transition">
              Home
            </Link>
            <Link to="/donations" className="text-sm font-medium text-muted-foreground hover:text-goodshare-purple transition">
              Donations
            </Link>
            <Link to="/ngos" className="text-sm font-medium text-muted-foreground hover:text-goodshare-purple transition">
              NGOs
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-goodshare-purple transition">
              About Us
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Button>
            </Link>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          )}
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/" className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-muted">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link to="/donations" className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-muted">
                  <ShoppingBag className="h-5 w-5" />
                  <span>Donations</span>
                </Link>
                <Link to="/ngos" className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-muted">
                  <Users className="h-5 w-5" />
                  <span>NGOs</span>
                </Link>
                <Link to="/about" className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-muted">
                  <BookOpen className="h-5 w-5" />
                  <span>About Us</span>
                </Link>
                {!isLoggedIn && (
                  <>
                    <Button className="w-full" asChild>
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
