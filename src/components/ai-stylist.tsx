import { aiSuggestedOutfits } from '@/ai/flows/ai-stylist';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export async function AiStylist({ productName, productDescription }: { productName: string, productDescription: string }) {
  try {
    const suggestions = await aiSuggestedOutfits({ productDescription });

    return (
      <div className="mt-12">
        <Card className="bg-card/80 border-accent/40 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-headline text-2xl">
              <Lightbulb className="h-7 w-7 text-accent" />
              AI Stylist Picks
            </CardTitle>
            <CardDescription>Suggestions to complement {productName}.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-background border">
                <p className="font-semibold text-sm text-muted-foreground">Hat Suggestion</p>
                <p className="font-medium text-lg">{suggestions.hatSuggestion}</p>
              </div>
              <div className="p-4 rounded-lg bg-background border">
                <p className="font-semibold text-sm text-muted-foreground">Boots Suggestion</p>
                <p className="font-medium text-lg">{suggestions.bootsSuggestion}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    console.error('AI Stylist Error:', error);
    return null;
  }
}
