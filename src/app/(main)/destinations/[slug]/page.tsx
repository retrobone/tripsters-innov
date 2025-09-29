import Image from 'next/image';
import { notFound } from 'next/navigation';
import { destinations, getImageForDestination, Destination } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MapPin, Briefcase, Calendar as CalendarIcon } from 'lucide-react';
import { WishlistButton } from '@/components/wishlist-button';
import { Calendar } from '@/components/ui/calendar';
import { Separator } from '@/components/ui/separator';

export default function DestinationPage() {
  const destination = destinations.find((d) => d.slug === 'ziro-india');

  if (!destination) {
    notFound();
  }

  const image = getImageForDestination(destination);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative h-[40vh] md:h-[50vh] rounded-xl overflow-hidden">
        <Image
          src={image.imageUrl.replace('/600/400', '/1280/720')}
          alt={image.description}
          data-ai-hint={image.imageHint}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline">
            {destination.name}
          </h1>
          <p className="flex items-center gap-2 text-lg mt-2">
            <MapPin className="h-5 w-5" />
            {destination.country}
          </p>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <WishlistButton slug={destination.slug} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="default" className="capitalize text-base">
                {destination.category}
            </Badge>
            {destination.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="capitalize">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-lg text-muted-foreground">{destination.longDescription}</p>

          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold font-headline mb-4">Reviews</h2>
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => <Star key={i} className={i < Math.round(destination.rating) ? 'fill-current' : ''} />)}
            </div>
            <span className="font-bold text-lg">{destination.rating}</span>
            <span className="text-muted-foreground">({destination.reviews} reviews)</span>
          </div>
          {/* Mock Reviews */}
          <div className="space-y-4">
            <div>
              <p className="font-semibold">"An unforgettable experience!"</p>
              <p className="text-sm text-muted-foreground">The landscape and the culture are breathtaking. A must-visit place.</p>
            </div>
             <div>
              <p className="font-semibold">"Absolutely magical"</p>
              <p className="text-sm text-muted-foreground">Felt like I was in a fairytale. The local food was also incredible.</p>
            </div>
          </div>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Book Your Trip</CardTitle>
              <p className="text-2xl font-bold text-primary">
                ₹{destination.pricePerNight.toLocaleString('en-IN')}
                <span className="text-sm font-normal text-muted-foreground">/night</span>
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2"><CalendarIcon className="h-4 w-4" /> Select Dates</h3>
                <Calendar
                    mode="range"
                    numberOfMonths={1}
                />
              </div>
              <Button size="lg" className="w-full">
                <Briefcase className="mr-2 h-4 w-4" /> Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
