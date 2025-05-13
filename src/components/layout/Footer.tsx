
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import { toast } from '@/hooks/use-toast';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Newsletter subscription for:", email);
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsSubscribing(false);
    }, 1000);
  };
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="container py-12 md:py-16">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-goodshare-purple" />
                <span className="font-bold text-xl text-goodshare-purple">GoodShare</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Connecting donors with NGOs to make a positive impact on communities in need through efficient resource sharing.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-gray-500 hover:text-goodshare-purple transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-goodshare-purple transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-goodshare-purple transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 dark:text-gray-200">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-goodshare-purple text-sm transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/donations" className="text-muted-foreground hover:text-goodshare-purple text-sm transition-colors">
                    Browse Donations
                  </Link>
                </li>
                <li>
                  <Link to="/ngos" className="text-muted-foreground hover:text-goodshare-purple text-sm transition-colors">
                    NGO Directory
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-goodshare-purple text-sm transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/volunteer" className="text-muted-foreground hover:text-goodshare-purple text-sm transition-colors">
                    Volunteer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 dark:text-gray-200">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/donations/food" className="text-muted-foreground hover:text-goodshare-purple text-sm transition-colors">
                    Food Donations
                  </Link>
                </li>
                <li>
                  <Link to="/donations/clothes" className="text-muted-foreground hover:text-goodshare-purple text-sm transition-colors">
                    Clothes Donations
                  </Link>
                </li>
                <li>
                  <Link to="/donations/books" className="text-muted-foreground hover:text-goodshare-purple text-sm transition-colors">
                    Book Donations
                  </Link>
                </li>
                <li>
                  <Link to="/donations/footwear" className="text-muted-foreground hover:text-goodshare-purple text-sm transition-colors">
                    Footwear Donations
                  </Link>
                </li>
                <li>
                  <Link to="/donations/furniture" className="text-muted-foreground hover:text-goodshare-purple text-sm transition-colors">
                    Furniture Donations
                  </Link>
                </li>
                <li>
                  <Link to="/donations/toys" className="text-muted-foreground hover:text-goodshare-purple text-sm transition-colors">
                    Toys Donations
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 dark:text-gray-200">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-1 shrink-0" />
                  <span>123 Donation St, Chennai, India</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+91 9843315832</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>help@goodshare.org</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <form className="flex flex-col gap-2" onSubmit={handleSubscribe}>
                  <div className="flex items-center">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-2 text-sm rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-goodshare-purple" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button 
                      type="submit" 
                      className="bg-goodshare-purple text-white p-2 rounded-r-md hover:bg-goodshare-purple/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={isSubscribing}
                    >
                      {isSubscribing ? (
                        <span className="animate-pulse">...</span>
                      ) : (
                        <Mail className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">Subscribe to our newsletter</p>
                </form>
              </div>
            </div>
          </div>
        </RevealOnScroll>
        
        <div className="border-t dark:border-gray-800 mt-12 pt-6 text-sm text-center text-muted-foreground">
          <p>&copy; {currentYear} GoodShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
