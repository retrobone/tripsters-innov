'use client';

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/hooks/use-wishlist';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useState } from 'react';

type WishlistButtonProps = {
  slug: string;
  className?: string;
};

export function WishlistButton({ slug, className }: WishlistButtonProps) {
  const { isWishlisted, addToWishlist, removeFromWishlist } = useWishlist();
  const { toast } = useToast();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  const onWishlist = isClient && isWishlisted(slug);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (onWishlist) {
      removeFromWishlist(slug);
      toast({
        description: 'Removed from wishlist.',
      });
    } else {
      addToWishlist(slug);
      toast({
        description: 'Added to wishlist!',
      });
    }
  };

  if (!isClient) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn('rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white', className)}
        disabled
      >
        <Heart className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        'rounded-full bg-black/30 text-white hover:bg-black/50 hover:text-white',
        className
      )}
      onClick={handleWishlistToggle}
      aria-label={onWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart
        className={cn('h-5 w-5 transition-colors', {
          'fill-red-500 text-red-500': onWishlist,
        })}
      />
    </Button>
  );
}
