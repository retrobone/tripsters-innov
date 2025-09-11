'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  Search,
  Heart,
  User,
  Bot,
  Users,
  PanelLeft,
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import Logo from '@/components/icons/logo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const navItems = [
  { href: '/dashboard', icon: LayoutGrid, label: 'Home' },
  { href: '/explore', icon: Search, label: 'Explore' },
  { href: '/plan', icon: Bot, label: 'AI Plan' },
  { href: '/wishlist', icon: Heart, label: 'Wishlist' },
  { href: '/community', icon: Users, label: 'Community' },
  { href: '/profile', icon: User, label: 'Profile' },
];

function MainNav({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname();

  const navLinkClasses = (href: string) =>
    cn(
      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
      {
        'bg-muted text-primary': pathname === href,
        'flex-col h-auto justify-center text-xs p-2': isMobile,
        'gap-1': isMobile,
      }
    );

  return (
    <nav
      className={
        isMobile
          ? 'grid grid-cols-6 items-center gap-1'
          : 'grid items-start gap-2 text-sm font-medium'
      }
    >
      {navItems.map(({ href, icon: Icon, label }) =>
        isMobile ? (
          <Link key={href} href={href} className={navLinkClasses(href)}>
            <Icon className="h-5 w-5" />
            <span className="truncate">{label}</span>
          </Link>
        ) : (
          <TooltipProvider key={href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={href} className={navLinkClasses(href)}>
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      )}
    </nav>
  );
}

function Header() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col p-4">
           <SheetHeader className='mb-4'>
            <VisuallyHidden>
             <SheetTitle>Navigation Menu</SheetTitle>
             <SheetDescription>Main navigation menu for accessing different pages of the application.</SheetDescription>
            </VisuallyHidden>
              <Link href="/dashboard">
                <Logo className="text-foreground" />
              </Link>
           </SheetHeader>
          <MainNav />
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        {/* Can add search bar here if needed globally */}
      </div>
      <Button variant="secondary" size="icon" className="rounded-full" asChild>
        <Link href="/profile">
          <User className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Link>
      </Button>
    </header>
  );
}

function Sidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Logo className="text-foreground" />
          </Link>
        </div>
        <div className="flex-1">
          <div className="px-2">
            <MainNav />
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 border-t bg-background/95 backdrop-blur-sm md:hidden">
      <div className="px-2 h-full">
        <MainNav isMobile />
      </div>
    </div>
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 pb-24 md:pb-6">
          {children}
        </main>
      </div>
      {isMobile && <BottomNav />}
    </div>
  );
}
