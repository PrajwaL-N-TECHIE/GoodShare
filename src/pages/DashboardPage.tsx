
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useAuth } from '@/hooks/use-auth';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Gift, Heart, Bell, Settings, Clock, Truck } from 'lucide-react';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <div className="container py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user?.firstName}!</h1>
            <p className="text-muted-foreground">Manage your donations, preferences, and account details.</p>
          </div>
          <Button className="bg-goodshare-purple hover:bg-goodshare-purple/90">New Donation</Button>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-5 w-full max-w-3xl mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="notifications">Alerts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5 text-goodshare-purple" /> Profile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                  <p className="text-muted-foreground text-sm">{user?.email}</p>
                  <p className="text-xs text-muted-foreground mt-2 capitalize">Role: {user?.role}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">Edit Profile</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-goodshare-purple" /> Active Donations
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="text-3xl font-bold">3</div>
                  <p className="text-muted-foreground text-sm">Donations in progress</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">Manage Donations</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-goodshare-purple" /> Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <div className="text-3xl font-bold">12</div>
                  <p className="text-muted-foreground text-sm">People helped through your generosity</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">View Impact</Button>
                </CardFooter>
              </Card>
            </div>

            <h2 className="font-semibold text-xl mt-8 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {[
                { icon: <Gift className="h-4 w-4" />, text: "You created a new donation of clothes", time: "2 hours ago" },
                { icon: <Truck className="h-4 w-4" />, text: "Your food donation was delivered", time: "2 days ago" },
                { icon: <Heart className="h-4 w-4" />, text: "New NGO matched with your donation preferences", time: "5 days ago" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <div className="p-2 rounded-full bg-goodshare-purple/10 text-goodshare-purple">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.text}</p>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 inline mr-1" /> {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="donations">
            <Card>
              <CardHeader>
                <CardTitle>Your Donations</CardTitle>
                <CardDescription>Browse and manage all your donation activities</CardDescription>
              </CardHeader>
              <CardContent className="text-center py-10">
                <p>This feature will be available soon!</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Favorite NGOs</CardTitle>
                <CardDescription>Organizations you follow and support regularly</CardDescription>
              </CardHeader>
              <CardContent className="text-center py-10">
                <p>This feature will be available soon!</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Manage your notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="text-center py-10">
                <p>This feature will be available soon!</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="text-center py-10">
                <p>This feature will be available soon!</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DashboardPage;
