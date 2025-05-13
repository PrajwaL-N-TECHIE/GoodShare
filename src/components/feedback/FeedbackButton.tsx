
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquarePlus } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const FeedbackButton = () => {
  const [feedback, setFeedback] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    if (feedback.trim().length < 5) {
      toast({
        title: "Feedback too short",
        description: "Please provide more detailed feedback.",
        variant: "destructive"
      });
      return;
    }

    // Here we would normally send the feedback to a server
    console.log("Feedback submitted:", feedback);
    
    toast({
      title: "Feedback Received",
      description: "Thank you for helping us improve GoodShare!",
    });
    
    setFeedback('');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 z-50 rounded-full h-12 w-12 shadow-lg bg-white dark:bg-gray-800 hover:bg-goodshare-purple/10 hover:border-goodshare-purple transition-all"
        >
          <MessageSquarePlus className="h-5 w-5 text-goodshare-purple" />
          <span className="sr-only">Give feedback</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Your Feedback</DialogTitle>
          <DialogDescription>
            Help us improve GoodShare by sharing your thoughts, suggestions, or reporting issues.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="feedback">Your feedback</Label>
            <Textarea
              id="feedback"
              placeholder="What would you like to share with us?"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-32"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button type="button" onClick={handleSubmit}>
            Send Feedback
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackButton;
