
import React from 'react';
import Layout from '@/components/layout/Layout';
import AuthTabs from '@/components/auth/AuthTabs';
import { Heart } from 'lucide-react';

const LoginPage = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-md mx-auto text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-goodshare-purple mr-2" />
            <h1 className="text-3xl font-bold text-goodshare-purple">GoodShare</h1>
          </div>
          <p className="text-muted-foreground">
            Join our community of donors, NGOs, and volunteers working together to share resources.
          </p>
        </div>
        <AuthTabs defaultTab="login" />
      </div>
    </Layout>
  );
};

export default LoginPage;
