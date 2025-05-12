
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
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
              <a href="#" className="text-gray-500 hover:text-goodshare-purple">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-goodshare-purple">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-goodshare-purple">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-goodshare-purple text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/donations" className="text-muted-foreground hover:text-goodshare-purple text-sm">
                  Browse Donations
                </Link>
              </li>
              <li>
                <Link to="/ngos" className="text-muted-foreground hover:text-goodshare-purple text-sm">
                  NGO Directory
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-goodshare-purple text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/donations/food" className="text-muted-foreground hover:text-goodshare-purple text-sm">
                  Food Donations
                </Link>
              </li>
              <li>
                <Link to="/donations/clothes" className="text-muted-foreground hover:text-goodshare-purple text-sm">
                  Clothes Donations
                </Link>
              </li>
              <li>
                <Link to="/donations/books" className="text-muted-foreground hover:text-goodshare-purple text-sm">
                  Book Donations
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-muted-foreground hover:text-goodshare-purple text-sm">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Donation St, Chennai, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>help@goodshare.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 text-sm text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GoodShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
