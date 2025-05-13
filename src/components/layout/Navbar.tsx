
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HandHeart, User, Menu, X, Home, BookOpen, ShoppingBag, Users, LogOut } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const handleLoginClick = () => {
    if (location.pathname !== '/login') {
      toast({
        title: "Login page",
        description: "You're being redirected to the login page.",
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
    navigate('/');
  };
  
  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-md' : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <HandHeart className="h-6 w-6 text-goodshare-purple" />
            <span className="font-bold text-xl text-goodshare-purple">GoodShare</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" label="Home" />
            <NavLink to="/donations" label="Donations" />
            <NavLink to="/ngos" label="NGOs" />
            <NavLink to="/volunteer" label="Volunteer" />
            <NavLink to="/about" label="About Us" />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/dashboard">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <User className="h-4 w-4" />
                  <span>{user?.firstName || 'Dashboard'}</span>
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout} 
                className="text-muted-foreground hover:text-red-500"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button 
                variant="outline" 
                asChild 
                className="hover:scale-105 transition-transform"
                onClick={handleLoginClick}
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button 
                asChild 
                className="bg-goodshare-purple hover:bg-goodshare-purple/90 hover:scale-105 transition-transform animate-pulse-glow"
              >
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
                <MobileNavLink to="/" label="Home" icon={<Home className="h-5 w-5" />} />
                <MobileNavLink to="/donations" label="Donations" icon={<ShoppingBag className="h-5 w-5" />} />
                <MobileNavLink to="/ngos" label="NGOs" icon={<Users className="h-5 w-5" />} />
                <MobileNavLink to="/volunteer" label="Volunteer" icon={<HandHeart className="h-5 w-5" />} />
                <MobileNavLink to="/about" label="About Us" icon={<BookOpen className="h-5 w-5" />} />
                
                {isAuthenticated ? (
                  <div className="mt-4 space-y-2">
                    <Button className="w-full flex items-center justify-center" asChild>
                      <Link to="/dashboard">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Link>
                    </Button>
                    <Button 
                      className="w-full flex items-center justify-center" 
                      variant="outline" 
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="mt-4 space-y-2">
                    <Button className="w-full" asChild onClick={handleLoginClick}>
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="w-full bg-goodshare-purple hover:bg-goodshare-purple/90" variant="outline" asChild>
                      <Link to="/register">Register</Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-goodshare-purple after:transition-all
        ${isActive 
          ? 'text-goodshare-purple after:w-full' 
          : 'text-muted-foreground hover:text-goodshare-purple transition-colors'
        }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label, icon }: { to: string; label: string; icon: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`flex items-center gap-2 px-2 py-3 rounded-md transition-colors ${
        isActive 
          ? 'bg-goodshare-purple/10 text-goodshare-purple font-medium' 
          : 'hover:bg-muted'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Navbar;
