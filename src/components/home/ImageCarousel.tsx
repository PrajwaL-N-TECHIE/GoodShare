
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

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
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact in Action</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how your donations are making a difference in communities across the country.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
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
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
