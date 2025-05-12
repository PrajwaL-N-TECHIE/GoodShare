
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const RegisterForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful",
      description: "Welcome to GoodShare! Your account has been created.",
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-goodshare-purple">Create Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+91 1234567890" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="userType">I am a</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual Donor</SelectItem>
                <SelectItem value="business">Business/Organization</SelectItem>
                <SelectItem value="ngo">NGO/Charity</SelectItem>
                <SelectItem value="volunteer">Volunteer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" placeholder="••••••••" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Create Account</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default RegisterForm;
