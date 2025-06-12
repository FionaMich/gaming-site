'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

// This would typically come from an API or database
const serviceDetails = {
  'tournament-organization': {
    title: 'Tournament Organization',
    image: '/images/services/tournament-organization.jpg',
    description: 'Professional esports tournament organization and management services.',
    longDescription: `Our tournament organization service provides end-to-end solutions for hosting successful esports events. From planning to execution, we handle every aspect of your tournament to ensure a seamless and engaging experience for participants and spectators alike.

    With years of experience in the esports industry, our team understands what it takes to create memorable tournaments that meet the highest standards of competitive gaming.`,
    features: [
      {
        title: 'Comprehensive Planning',
        description: 'Detailed event planning including format, schedule, and logistics',
        icon: 'Calendar',
      },
      {
        title: 'Professional Staff',
        description: 'Experienced tournament administrators and technical support',
        icon: 'Users',
      },
      {
        title: 'Broadcasting',
        description: 'High-quality streaming and casting services',
        icon: 'Video',
      },
      {
        title: 'Prize Management',
        description: 'Secure prize pool handling and distribution',
        icon: 'Trophy',
      },
    ],
    pricing: [
      {
        title: 'Basic',
        price: 999,
        period: 'per event',
        features: [
          'Up to 32 teams',
          'Basic streaming setup',
          'Tournament platform',
          'Basic technical support',
          'Standard bracket management',
        ],
        popular: false,
      },
      {
        title: 'Professional',
        price: 2499,
        period: 'per event',
        features: [
          'Up to 64 teams',
          'Professional streaming',
          'Custom tournament platform',
          '24/7 technical support',
          'Advanced bracket management',
          'Social media promotion',
          'Prize pool management',
        ],
        popular: true,
      },
      {
        title: 'Enterprise',
        price: 4999,
        period: 'per event',
        features: [
          'Unlimited teams',
          'Multi-stream setup',
          'Custom tournament platform',
          'Dedicated support team',
          'Advanced bracket management',
          'Comprehensive marketing',
          'Prize pool management',
          'VIP player services',
          'Custom branding',
        ],
        popular: false,
      },
    ],
    testimonials: [
      {
        name: 'John Smith',
        role: 'Event Manager',
        company: 'GameCon Events',
        content: 'The level of professionalism and attention to detail was outstanding. Our tournament ran smoothly from start to finish.',
        rating: 5,
      },
      {
        name: 'Sarah Wilson',
        role: 'Team Captain',
        company: 'Phoenix Gaming',
        content: 'Best tournament organization service we\'ve worked with. The staff was incredibly helpful and responsive.',
        rating: 5,
      },
      {
        name: 'Mike Johnson',
        role: 'Tournament Director',
        company: 'Esports League',
        content: 'Their expertise in handling large-scale tournaments is unmatched. Highly recommended for any serious esports event.',
        rating: 4,
      },
    ],
  },
  // Add more services here
};

export default function ServiceDetailsPage() {
  const params = useParams();
  const service = serviceDetails[params.slug as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button asChild>
            <Link href="/service">Back to Services</Link>
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
            src={service.image}
            alt={service.title}
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {service.description}
            </p>
            <Button size="lg">Get Started</Button>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose dark:prose-invert max-w-none mb-12"
              >
                <h2 className="text-3xl font-bold mb-6">About the Service</h2>
                <div className="text-muted-foreground whitespace-pre-line">
                  {service.longDescription}
                </div>
              </motion.div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card rounded-lg border p-6"
                    >
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card rounded-lg border p-6"
                    >
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>
              {service.pricing.map((plan) => (
                <div
                  key={plan.title}
                  className={`bg-card rounded-lg border p-6 ${
                    plan.popular ? 'border-primary' : ''
                  }`}
                >
                  {plan.popular && (
                    <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-semibold">{plan.title}</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground"> {plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Choose {plan.title}
                  </Button>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 