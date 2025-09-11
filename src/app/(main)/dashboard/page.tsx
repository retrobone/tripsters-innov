import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { DestinationCard } from '@/components/destination-card';
import { destinations } from '@/lib/data';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Where to next?
        </h1>
        <p className="text-muted-foreground">
          Let&apos;s start your next adventure.
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search for destinations, hotels, or tours..."
          className="pl-10 h-12 text-lg"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold font-headline mb-4">Popular Destinations</h2>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {destinations.map((dest) => (
              <CarouselItem key={dest.id} className="md:basis-1/2 lg:basis-1/3">
                <DestinationCard destination={dest} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-primary/80 to-primary text-primary-foreground">
          <CardHeader>
            <CardTitle>Exclusive Summer Deals</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Save up to 30% on select beach destinations. Book before it&apos;s too late!</p>
            <Button variant="secondary" className="mt-4">View Offers</Button>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-accent/80 to-accent text-accent-foreground">
          <CardHeader>
            <CardTitle>AI-Powered Itineraries</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Don&apos;t know where to start? Let our AI plan the perfect trip for you.</p>
            <Button variant="secondary" className="mt-4">Plan My Trip</Button>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
