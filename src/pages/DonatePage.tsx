
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Layout from '@/components/layout/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Gift } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  category: z.enum(["food", "clothes", "books"]),
  location: z.string().min(3, {
    message: "Please provide a valid location.",
  }),
  contactInfo: z.string().min(5, {
    message: "Please provide valid contact information.",
  }),
});

const DonatePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "food",
      location: "",
      contactInfo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, this would send data to the backend
    console.log(values);
    toast({
      title: "Donation Added Successfully!",
      description: "Thank you for your generosity. Your donation is now listed.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="container py-12 max-w-3xl">
        <div className="text-center mb-8">
          <div className="bg-goodshare-purple/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="h-8 w-8 text-goodshare-purple" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Add Your Donation</h1>
          <p className="text-muted-foreground">
            Share your surplus items with those in need
          </p>
        </div>

        <Card className="shadow-lg animate-fade-in">
          <CardHeader>
            <CardTitle>Donation Details</CardTitle>
            <CardDescription>
              Please provide accurate information about your donation to help us match it with the right recipient.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Donation Title</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Winter Clothing Collection" {...field} />
                      </FormControl>
                      <FormDescription>
                        A clear title helps potential recipients find your donation.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your donation in detail (condition, quantity, etc.)" 
                          className="resize-none min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="food">Food</SelectItem>
                            <SelectItem value="clothes">Clothes</SelectItem>
                            <SelectItem value="books">Books</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pickup Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Koramangala, Bangalore" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="contactInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Information</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Phone: 9843315832, Email: contact@example.com" {...field} />
                      </FormControl>
                      <FormDescription>
                        This information will be shared with approved NGOs or recipients.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-goodshare-purple hover:bg-goodshare-purple/90"
                >
                  Submit Donation
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 text-sm text-muted-foreground border-t pt-4">
            <p>
              By submitting this form, you agree to our terms and conditions regarding donations.
            </p>
            <p>
              Need help? Contact our support team at support@goodshare.org
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default DonatePage;
