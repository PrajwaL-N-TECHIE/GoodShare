
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Heart, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const topVolunteers = [
  { id: 1, name: 'Priya Sharma', points: 1250, donations: 45, hours: 78, badge: 'Platinum', avatar: 'https://i.pravatar.cc/150?img=29' },
  { id: 2, name: 'Rahul Kapoor', points: 1120, donations: 38, hours: 64, badge: 'Gold', avatar: 'https://i.pravatar.cc/150?img=59' },
  { id: 3, name: 'Ananya Patel', points: 980, donations: 36, hours: 52, badge: 'Gold', avatar: 'https://i.pravatar.cc/150?img=47' },
  { id: 4, name: 'Vikram Singh', points: 875, donations: 31, hours: 45, badge: 'Silver', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 5, name: 'Neha Gupta', points: 745, donations: 28, hours: 39, badge: 'Silver', avatar: 'https://i.pravatar.cc/150?img=24' },
];

const upcomingEvents = [
  { id: 1, title: 'Book Sorting Day', date: '28 May 2025', location: 'Central Library', participants: 15, category: 'books' },
  { id: 2, title: 'Food Bank Drive', date: '4 June 2025', location: 'City Hall', participants: 28, category: 'food' },
  { id: 3, title: 'Clothing Collection', date: '12 June 2025', location: 'Community Center', participants: 22, category: 'clothes' },
];

const VolunteerPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <div className="bg-goodshare-lightpurple/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-goodshare-purple">
            <Heart className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Volunteer With Us</h1>
          <p className="text-muted-foreground text-lg">
            Join our community of volunteers helping to sort, transport, and distribute donations to those in need.
          </p>
        </div>
        
        <Tabs defaultValue="opportunities" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="opportunities" className="animate-fade-in">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">How You Can Help</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="bg-goodshare-purple/10 rounded-full p-4 text-goodshare-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path><path d="M7 3a9 9 0 0 1 10 0"></path><path d="M19 9a7.5 7.5 0 0 0-16 0"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Collection Centers</h3>
                    <p className="text-muted-foreground">Help sort and organize donations at our collection centers.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="bg-goodshare-purple/10 rounded-full p-4 text-goodshare-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><rect width="1" height="1" x="9" y="9"></rect><rect width="1" height="1" x="14" y="9"></rect></svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Community Outreach</h3>
                    <p className="text-muted-foreground">Spread awareness about GoodShare in your community.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="bg-goodshare-purple/10 rounded-full p-4 text-goodshare-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4"></path><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Delivery Volunteer</h3>
                    <p className="text-muted-foreground">Help transport donations from donors to NGOs or directly to recipients.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Button size="lg" className="px-8">Register as Volunteer</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="leaderboard" className="animate-slide-up">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-goodshare-purple/10 to-goodshare-lightpurple/10 pb-8">
                <div className="flex items-center mb-2">
                  <Trophy className="h-5 w-5 text-yellow-500 mr-2" />
                  <CardTitle>Volunteer Champions</CardTitle>
                </div>
                <CardDescription>
                  Our top volunteers making a difference in the community. Earn points through volunteer hours, donations managed, and events attended.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="flex flex-col space-y-6">
                  {topVolunteers.map((volunteer, index) => (
                    <div 
                      key={volunteer.id}
                      className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                        index === 0 ? 'bg-gradient-to-r from-amber-50 to-yellow-100 shadow-md' : 'hover:bg-gray-50'
                      }`}
                      onMouseEnter={() => setHoveredCard(volunteer.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="relative">
                          <img 
                            src={volunteer.avatar} 
                            alt={volunteer.name}
                            className="w-12 h-12 rounded-full border-2 border-white shadow"
                          />
                          <span 
                            className={`absolute -top-1 -left-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                              index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-amber-700' : 'bg-purple-600'
                            }`}
                          >
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium flex items-center">
                          {volunteer.name}
                          <Badge variant="outline" className={`ml-2 ${
                            volunteer.badge === 'Platinum' ? 'bg-purple-100 text-purple-800 border-purple-200' :
                            volunteer.badge === 'Gold' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                            'bg-gray-100 text-gray-800 border-gray-200'
                          }`}>
                            {volunteer.badge}
                          </Badge>
                        </h3>
                        <div className="text-sm text-gray-500">
                          {volunteer.donations} donations · {volunteer.hours} volunteer hours
                        </div>
                      </div>
                      <div className={`text-xl font-bold text-goodshare-purple transition-all duration-300 ${
                        hoveredCard === volunteer.id ? 'scale-110' : ''
                      }`}>
                        {volunteer.points} <span className="text-sm font-normal">pts</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pb-8">
                <Button variant="outline" className="gap-2">
                  <Users className="h-4 w-4" />
                  View All Volunteers
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="events" className="animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <Card key={event.id} className="border-0 shadow-lg overflow-hidden card-hover-effect">
                  <div className={`h-2 ${
                    event.category === 'books' ? 'bg-amber-500' :
                    event.category === 'food' ? 'bg-green-500' : 'bg-yellow-400'
                  }`}></div>
                  <CardHeader>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <div className="flex -space-x-2 mr-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 border border-white flex items-center justify-center text-xs">+</div>
                        <div className="w-6 h-6 rounded-full bg-purple-200 border border-white"></div>
                        <div className="w-6 h-6 rounded-full bg-green-200 border border-white"></div>
                      </div>
                      <span className="text-sm text-gray-500">{event.participants} volunteers joined</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-goodshare-purple hover:bg-goodshare-purple/90">Join Event</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default VolunteerPage;
