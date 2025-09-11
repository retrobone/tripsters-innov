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

export default function SignupPage() {
    const bgImage = placeholderImages.placeholderImages.find(img => img.id === 'login-bg');
    
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
        <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
                <div className="grid gap-2 text-center">
                    <Logo className="text-3xl justify-center" />
                    <h1 className="text-3xl font-bold font-headline mt-4">Create an Account</h1>
                    <p className="text-balance text-muted-foreground">
                    Enter your information to create an account
                    </p>
                </div>
                <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="Max" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="Robinson" required />
                    </div>
                    </div>
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
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required/>
                    </div>
                    <Button type="submit" className="w-full">
                    Create an account
                    </Button>
                    <Button variant="outline" className="w-full">
                    Sign up with Google
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{' '}
                    <Link href="/login" className="underline">
                    Log in
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
                <h3 className="text-2xl font-bold">"To travel is to live."</h3>
                <p className="text-right mt-2">- Hans Christian Andersen</p>
            </div>
        </div>
    </div>
  );
}
