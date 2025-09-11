'use client';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { destinations } from '@/lib/data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ListFilter } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function ExplorePage() {
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);
  const center = { lat: 20, lng: 77 };
  const categories = [...new Set(destinations.map((d) => d.category))];

  return (
    <div className="flex flex-col h-[calc(100vh-100px)]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">
            Explore the World
          </h1>
          <p className="text-muted-foreground">
            Find your next adventure on the map.
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categories.map((category) => (
              <DropdownMenuCheckboxItem key={category}>
                {category}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Card className="flex-grow overflow-hidden relative rounded-xl">
        <APIProvider
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
        >
          <Map
            defaultCenter={center}
            defaultZoom={5}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            mapId="a3a2d7b1e8a94a9a"
          >
            {destinations.map((dest) => (
              <AdvancedMarker
                key={dest.id}
                position={dest.position}
                onClick={() => setSelectedDestination(dest)}
              />
            ))}
          </Map>
        </APIProvider>
        {selectedDestination && (
           <Card className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm p-4">
             <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-bold">{selectedDestination.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedDestination.description}</p>
                </div>
                <Badge variant="default">{selectedDestination.category}</Badge>
             </div>
             <div className="flex gap-2 mt-2">
                {selectedDestination.tags.slice(0, 3).map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
             </div>
             <Button asChild size="sm" className="mt-4 w-full">
                <Link href={`/destinations/${selectedDestination.slug}`}>View Details</Link>
             </Button>
           </Card>
        )}
      </Card>
    </div>
  );
}
