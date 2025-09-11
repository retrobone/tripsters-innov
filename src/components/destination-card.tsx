import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { type Destination, getImageForDestination } from '@/lib/data';
import { WishlistButton } from './wishlist-button';

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  const image = getImageForDestination(destination);

  return (
    <Link href={`/destinations/${destination.slug}`} className="block group">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="relative aspect-[4/3]">
            <Image
              src={image.imageUrl}
              alt={image.description}
              data-ai-hint={image.imageHint}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-2 right-2 z-10">
              <WishlistButton slug={destination.slug} />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{destination.name}</h3>
                <p className="text-sm text-muted-foreground">{destination.country}</p>
              </div>
              <div className="flex items-center gap-1 text-sm font-medium">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span>{destination.rating}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
