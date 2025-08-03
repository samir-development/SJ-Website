
"use client"

import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [author, setAuthor] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0 && reviewText.trim() !== '' && author.trim() !== '') {
      console.log({ rating, reviewText, author });
      toast({
        title: "Review Submitted",
        description: "Thank you for your feedback!",
      });
      // Reset form
      setRating(0);
      setReviewText('');
      setAuthor('');
    } else {
      toast({
        title: "Incomplete Review",
        description: "Please provide a rating, your name, and a review text.",
        variant: 'destructive',
      })
    }
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Write a Review</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Your Rating</Label>
            <div className="flex items-center gap-1 mt-1" onMouseLeave={() => setHoverRating(0)}>
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <Star
                    key={starValue}
                    className={`h-6 w-6 cursor-pointer transition-colors ${
                      starValue <= (hoverRating || rating) ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground/50'
                    }`}
                    onClick={() => setRating(starValue)}
                    onMouseEnter={() => setHoverRating(starValue)}
                  />
                );
              })}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Your Name</Label>
            <Input id="author" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="e.g. John D." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="review-text">Your Review</Label>
            <Textarea
              id="review-text"
              placeholder="Tell us what you think about this product..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </div>
          <Button type="submit">Submit Review</Button>
        </form>
      </CardContent>
    </Card>
  );
}
