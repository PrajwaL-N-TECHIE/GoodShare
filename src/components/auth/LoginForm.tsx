
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const LoginForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back to GoodShare!",
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-goodshare-purple">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-sm text-goodshare-purple hover:underline">
                Forgot password?
              </a>
            </div>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Sign In</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default LoginForm;
