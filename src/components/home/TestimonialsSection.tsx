
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { QuoteIcon } from 'lucide-react';

const testimonials = [
  {
    quote: "GoodShare has transformed how our restaurant handles surplus food. Instead of waste, we're now making a positive impact in our community.",
    author: "Priya Sharma",
    role: "Restaurant Owner",
    avatar: "PS"
  },
  {
    quote: "As an NGO focused on education, the quality of book donations we receive through GoodShare has been outstanding.",
    author: "Rajesh Kumar",
    role: "Education NGO Director",
    avatar: "RK"
  },
  {
    quote: "The platform makes it incredibly easy to donate my children's outgrown clothes. The pickup service is convenient and reliable.",
    author: "Anita Desai",
    role: "Regular Donor",
    avatar: "AD"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from donors and NGOs who are part of the GoodShare community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md card-hover-effect">
              <CardContent className="p-6">
                <QuoteIcon className="h-8 w-8 text-goodshare-purple/30 mb-4" />
                <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-goodshare-purple/20">
                    <AvatarFallback className="bg-goodshare-purple/10 text-goodshare-purple">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
