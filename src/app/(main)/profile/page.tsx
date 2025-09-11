import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { User, Edit, MapPin, CreditCard, Shield } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight font-headline mb-8">My Profile</h1>

      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://picsum.photos/seed/user/100/100" alt="User Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">Jane Doe</h2>
                  <p className="text-muted-foreground">jane.doe@example.com</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking History</CardTitle>
            <CardDescription>
              A record of your past and upcoming adventures.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">7-Day Trip to Paris</p>
                  <p className="text-sm text-muted-foreground">May 15, 2024 - May 22, 2024</p>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </li>
              <Separator />
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Weekend in New York</p>
                  <p className="text-sm text-muted-foreground">Completed: Jan 10, 2024</p>
                </div>
                <Button variant="ghost" size="sm">Leave a Review</Button>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p>Visa ending in 1234</p>
                <Button variant="ghost" size="sm">Remove</Button>
              </div>
              <Button variant="outline" className="w-full mt-4">Add New Card</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Account Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <p>Password</p>
                <Button variant="ghost" size="sm">Change</Button>
              </div>
               <div className="flex items-center justify-between mt-2">
                <p>Two-Factor Authentication</p>
                <Button variant="ghost" size="sm">Enable</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
