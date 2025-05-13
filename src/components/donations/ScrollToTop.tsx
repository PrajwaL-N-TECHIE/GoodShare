
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 300px
      const scrolled = window.scrollY > 300;
      setShowButton(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="fixed bottom-6 right-20 z-50 rounded-full h-12 w-12 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-goodshare-purple/10 hover:border-goodshare-purple transition-all"
        >
          <ArrowUp className="h-5 w-5 text-goodshare-purple" />
          <span className="sr-only">Scroll to top</span>
        </Button>
      )}
    </>
  );
};

export default ScrollToTop;
