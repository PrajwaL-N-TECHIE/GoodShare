
import React, { useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2000&auto=format&fit=crop',
    alt: 'Volunteers sorting donations',
    caption: 'Our volunteers working tirelessly to sort donations'
  },
  {
    url: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=2000&auto=format&fit=crop',
    alt: 'Food donation',
    caption: 'Fresh food ready for distribution to those in need'
  },
  {
    url: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2000&auto=format&fit=crop',
    alt: 'Clothing donation',
    caption: 'Quality clothing donations making a difference in communities'
  },
  {
    url: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2000&auto=format&fit=crop',
    alt: 'Books donation',
    caption: 'Educational materials spreading knowledge and opportunity'
  }
];

const ImageCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  // Handle auto-transition
  useEffect(() => {
    if (!api || !inView) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api, inView]);

  // Update the current slide for the indicators
  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on('select', handleSelect);
    
    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 to-blue-50/30 -z-10"></div>
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="bg-goodshare-purple/10 text-goodshare-purple p-2 rounded-full mr-2">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-goodshare-purple">Featured Impacts</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Our Impact in Action</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how your donations are making a difference in communities across the country.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-3/4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="h-64 md:h-80 overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-muted-foreground">{image.caption}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="relative left-0" />
            </div>
            <div className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2">
              <CarouselNext className="relative right-0" />
            </div>
          </Carousel>
          
          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-goodshare-purple w-4' : 'bg-gray-300'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
