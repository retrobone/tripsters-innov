import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from '@/components/icons/logo';
import placeholderImages from '@/lib/placeholder-images.json';

export default function LoginPage() {
  const bgImage = placeholderImages.placeholderImages.find(img => img.id === 'login-bg');

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <Logo className="text-3xl justify-center" />
            <h1 className="text-3xl font-bold font-headline mt-4">Welcome Back</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <Image
          src={bgImage?.imageUrl || "https://picsum.photos/seed/107/1200/1800"}
          alt={bgImage?.description || "Abstract gradient"}
          data-ai-hint={bgImage?.imageHint || "abstract gradient"}
          width="1200"
          height="1800"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
         <div className="absolute bottom-8 left-8 text-white p-4 bg-black/50 rounded-lg">
          <h3 className="text-2xl font-bold">"The world is a book, and those who do not travel read only one page."</h3>
          <p className="text-right mt-2">- Saint Augustine</p>
        </div>
      </div>
    </div>
  );
}
