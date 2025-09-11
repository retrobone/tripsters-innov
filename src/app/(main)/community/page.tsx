import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, ThumbsUp, PlusCircle, Search } from 'lucide-react';

const forumPosts = [
  {
    id: 1,
    author: 'Alex G.',
    avatar: 'https://picsum.photos/seed/user1/40/40',
    title: 'Hidden gems in Kyoto? 🏯',
    excerpt: 'I\'m visiting Kyoto next month and looking for recommendations beyond the usual tourist spots. Any local favorites for food or quiet temples?',
    likes: 15,
    comments: 4,
    time: '2 hours ago',
  },
  {
    id: 2,
    author: 'Maria S.',
    avatar: 'https://picsum.photos/seed/user2/40/40',
    title: 'Best solo travel destinations in Europe for first-timers?',
    excerpt: 'Planning my first solo trip and I\'m a bit overwhelmed. Looking for safe, friendly cities with good public transport. Any advice is welcome!',
    likes: 42,
    comments: 12,
    time: '8 hours ago',
  },
    {
    id: 3,
    author: 'Chris P.',
    avatar: 'https://picsum.photos/seed/user3/40/40',
    title: 'Packing light for a 2-week trip to Southeast Asia',
    excerpt: 'I\'m trying to travel with just a carry-on for a two-week trip. What are the absolute essentials I shouldn\'t forget?',
    likes: 28,
    comments: 9,
    time: '1 day ago',
  },
];

export default function CommunityPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Voyager Community
        </h1>
        <p className="text-muted-foreground">
          Share tips, ask questions, and connect with fellow travelers.
        </p>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search forum..." className="pl-10" />
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Post
        </Button>
      </div>

      <div className="space-y-6">
        {forumPosts.map((post) => (
          <Card key={post.id} className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Posted by {post.author} &middot; {post.time}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{post.likes} Likes</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{post.comments} Comments</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
