
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, BarChart, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About GoodShare</h1>
          <p className="text-xl text-muted-foreground">
            Connecting donors and NGOs to create a more sustainable and equitable world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              GoodShare aims to create an efficient bridge between surplus resources and communities in need. 
              We believe that by facilitating easy donation of food, clothes, and books, we can reduce waste 
              while addressing critical needs in our society.
            </p>
            <p className="text-gray-700">
              Our platform leverages technology to connect businesses, event organizers, and individuals with 
              NGOs that can effectively distribute these resources to those who need them most.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              We envision a world where no surplus food goes to waste while people go hungry, where no usable 
              clothing is discarded while others lack proper attire, and where no books gather dust while minds 
              remain eager to learn.
            </p>
            <p className="text-gray-700">
              Through GoodShare, we're working toward a more efficient distribution of resources, creating 
              communities that are more sustainable, equitable, and compassionate.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Heart className="h-8 w-8" />, 
                title: "Compassion", 
                description: "We believe in the power of kindness to transform lives and communities." 
              },
              { 
                icon: <Users className="h-8 w-8" />, 
                title: "Community", 
                description: "We foster connections between donors and recipients to build stronger communities." 
              },
              { 
                icon: <BarChart className="h-8 w-8" />, 
                title: "Effectiveness", 
                description: "We strive to create the most efficient systems for resource sharing." 
              },
              { 
                icon: <Globe className="h-8 w-8" />, 
                title: "Sustainability", 
                description: "We work toward environmental and social sustainability through resource optimization." 
              }
            ].map((value, index) => (
              <Card key={index} className="text-center card-hover-effect">
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 rounded-full bg-goodshare-purple/10 text-goodshare-purple flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Story</h2>
          <p className="text-gray-700 mb-4">
            GoodShare was founded in 2023 by a group of social entrepreneurs who witnessed firsthand the 
            paradox of abundance and scarcity in our society. After observing enormous amounts of food waste 
            at corporate events while nearby communities struggled with hunger, they were inspired to create 
            a solution.
          </p>
          <p className="text-gray-700 mb-4">
            What began as a simple idea to redistribute surplus food quickly expanded to include clothes and books, 
            as the team recognized similar inefficiencies in the distribution of these resources. By incorporating 
            technology and building a network of dedicated NGOs, GoodShare has evolved into a comprehensive 
            platform for resource sharing.
          </p>
          <p className="text-gray-700 mb-4">
            Today, GoodShare connects thousands of donors with hundreds of NGOs across India, facilitating the 
            efficient transfer of resources and creating positive impact in communities nationwide.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
