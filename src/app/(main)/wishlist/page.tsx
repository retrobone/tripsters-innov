'use client';

import { DestinationCard } from '@/components/destination-card';
import { useWishlist } from '@/hooks/use-wishlist';
import { destinations } from '@/lib/data';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const wishlistedDestinations = destinations.filter((dest) =>
    wishlist.includes(dest.slug)
  );

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight font-headline">Your Wishlist</h1>
      <p className="text-muted-foreground">
        Your saved destinations for future adventures.
      </p>

      {wishlistedDestinations.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {wishlistedDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center mt-20 h-full">
          <Heart className="h-16 w-16 text-muted-foreground/50 mb-4" />
          <h2 className="text-2xl font-semibold">Your wishlist is empty</h2>
          <p className="text-muted-foreground mt-2 max-w-md">
            Start exploring and add destinations you'd like to visit by clicking the heart icon.
          </p>
        </div>
      )}
    </div>
  );
}
