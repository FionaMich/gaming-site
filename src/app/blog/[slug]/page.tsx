'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPostCard } from '@/components/ui/blog-post-card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag, Share2 } from 'lucide-react';

// This would typically come from an API or database
const blogPosts = {
  'esports-industry-growth': {
    title: 'The Explosive Growth of Esports in 2024',
    image: '/images/blog/esports-growth.jpg',
    author: {
      name: 'Sarah Johnson',
      role: 'Esports Analyst',
      image: '/images/authors/sarah-johnson.jpg',
    },
    date: '2024-03-15',
    category: 'Industry News',
    tags: ['Esports', 'Gaming Industry', 'Market Analysis'],
    content: `The esports industry has seen unprecedented growth in 2024, with market valuations reaching new heights and viewership numbers shattering previous records. This comprehensive analysis explores the key factors driving this expansion and what it means for the future of competitive gaming.

    ## Record-Breaking Numbers

    The first quarter of 2024 has already shown remarkable statistics:
    - Global esports revenue exceeded $2.5 billion
    - Live event attendance increased by 45%
    - Online viewership peaked at 32 million concurrent viewers
    - Mobile esports saw a 75% growth in participation

    ## Key Growth Factors

    Several factors have contributed to this explosive growth:

    ### 1. Mainstream Adoption
    Major traditional sports organizations and celebrities have invested heavily in esports teams and tournaments, bringing new audiences and legitimacy to the industry.

    ### 2. Technological Advancements
    The rollout of 5G networks and improvements in streaming technology have made it easier than ever for fans to watch and participate in esports events.

    ### 3. Increased Prize Pools
    Tournament prize pools have reached record levels, with some events offering over $40 million in total prizes, attracting top talent and media attention.

    ## The Future of Esports

    As we look ahead, several trends are likely to shape the industry:
    - Further integration with traditional sports
    - Expansion of mobile esports in emerging markets
    - Development of new competitive titles
    - Enhanced viewer experiences through AR and VR technology

    The growth of esports shows no signs of slowing down, and we can expect to see continued innovation and expansion in the years to come.`,
    relatedPosts: [
      {
        title: 'Top Gaming Trends to Watch in 2024',
        slug: 'gaming-trends-2024',
        image: '/images/blog/gaming-trends.jpg',
        excerpt: 'Discover the latest gaming trends that are shaping the industry this year.',
        date: '2024-03-10',
        category: 'Gaming',
      },
      {
        title: 'The Rise of Mobile Esports',
        slug: 'mobile-esports-rise',
        image: '/images/blog/mobile-esports.jpg',
        excerpt: 'How mobile gaming is revolutionizing the competitive gaming landscape.',
        date: '2024-03-05',
        category: 'Mobile Gaming',
      },
      {
        title: 'Building a Career in Esports',
        slug: 'esports-career-guide',
        image: '/images/blog/esports-career.jpg',
        excerpt: 'A comprehensive guide to starting your career in the esports industry.',
        date: '2024-03-01',
        category: 'Career',
      },
    ],
  },
  // Add more blog posts here
};

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8 p-6 bg-card rounded-lg border">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{post.author.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {post.author.role}
                  </p>
                </div>
              </div>

              {/* Post Content */}
              <div className="prose dark:prose-invert max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.includes('- ')) {
                    return (
                      <ul key={index} className="list-disc pl-6 my-4">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i} className="mb-2">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  } else {
                    return (
                      <p key={index} className="mb-4 text-muted-foreground">
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>

              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center gap-4">
                  <Share2 className="h-4 w-4 text-muted-foreground" />
                  <Button variant="outline" size="sm">
                    Share on Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    Share on Facebook
                  </Button>
                  <Button variant="outline" size="sm">
                    Copy Link
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Related Posts */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                <div className="space-y-6">
                  {post.relatedPosts.map((relatedPost) => (
                    <BlogPostCard key={relatedPost.slug} {...relatedPost} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 