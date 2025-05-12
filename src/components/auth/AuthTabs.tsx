
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

interface AuthTabsProps {
  defaultTab?: 'login' | 'register';
}

const AuthTabs = ({ defaultTab = 'login' }: AuthTabsProps) => {
  return (
    <div className="max-w-md w-full mx-auto">
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid grid-cols-2 w-full mb-8">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthTabs;
