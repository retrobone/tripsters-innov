import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Compass, Bot } from 'lucide-react';
import Logo from '@/components/icons/logo';
import placeholderImages from '@/lib/placeholder-images.json';

export default function LandingPage() {
  const heroImage = placeholderImages.find((img) => img.id === 'landing-hero');

  return (
    <div className="flex flex-col min-h-screen">
      <header className="absolute top-0 left-0 w-full z-10 p-4 sm:p-6">
        <nav className="container mx-auto flex justify-between items-center">
          <Logo className="h-8 w-auto text-white" />
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/20" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          <Image
            src={heroImage?.imageUrl || "https://picsum.photos/seed/100/1920/1080"}
            alt={heroImage?.description || "Tropical beach"}
            data-ai-hint={heroImage?.imageHint || "tropical beach"}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg font-headline">
              Your Journey Begins Here
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90 drop-shadow-sm">
              Discover, plan, and book your next adventure with Voyager. The world is at your fingertips.
            </p>
            <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/dashboard">Explore Destinations</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Travel, Simplified</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-lg">
              Voyager offers everything you need for a seamless travel experience, from inspiration to booking.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-accent/20 rounded-full w-max mb-4">
                    <Compass className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">Explore & Discover</h3>
                  <p className="mt-2 text-muted-foreground">
                    Find your next destination from our curated list of places. Filter by interest, budget, and travel style.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-primary/20 rounded-full w-max mb-4">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">AI-Powered Planning</h3>
                  <p className="mt-2 text-muted-foreground">
                    Let our smart AI create a personalized itinerary just for you. Spend less time planning and more time enjoying.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 bg-green-500/20 rounded-full w-max mb-4">
                    <Briefcase className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">Seamless Bookings</h3>
                  <p className="mt-2 text-muted-foreground">
                    Book flights, hotels, and tours directly within the app. Manage all your reservations in one place.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary">
        <div className="container mx-auto py-6 px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Voyager. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
