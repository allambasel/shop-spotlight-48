import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreCard from "@/components/StoreCard";
import { Button } from "@/components/ui/button";
import { stores } from "@/data/mockData";
import { ArrowRight, TrendingUp, Store, ShoppingBag, Rocket, BarChart3, Users, Globe, Megaphone, Shield } from "lucide-react";

const Index = () => {
  const featuredStores = stores.slice(0, 3);

  const benefits = [
    { icon: Globe, title: "Global Reach", description: "Reach customers worldwide with your online storefront" },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Track your sales, views, and customer engagement" },
    { icon: Megaphone, title: "Promotional Tools", description: "Create banners, offers, and campaigns easily" },
    { icon: Users, title: "Customer Base", description: "Access our growing community of active shoppers" },
    { icon: Shield, title: "Secure Platform", description: "Enterprise-grade security for your business" },
    { icon: Rocket, title: "Quick Setup", description: "Get your store up and running in minutes" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Discover Amazing Stores & Products
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
              Your gateway to the best online stores. Browse curated collections, exclusive offers,
              and unique products all in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/stores">
                  Explore All Stores <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-accent p-3">
                <Store className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <div className="text-3xl font-bold">{stores.length}+</div>
                <div className="text-sm text-muted-foreground">Active Stores</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-accent p-3">
                <ShoppingBag className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <div className="text-3xl font-bold">1,000+</div>
                <div className="text-sm text-muted-foreground">Products Listed</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-accent p-3">
                <TrendingUp className="h-8 w-8 text-accent-foreground" />
              </div>
              <div>
                <div className="text-3xl font-bold">4.7</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stores Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Featured Stores</h2>
            <p className="text-lg text-muted-foreground">
              Hand-picked stores offering quality products and great service
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/stores">
                View All Stores <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Join As Store Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.2),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent)]" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-4">
              For Store Owners
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Grow Your Business With Us
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Join thousands of successful stores and reach millions of customers. 
              Our platform provides everything you need to succeed online.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">{benefit.title}</h3>
                <p className="text-primary-foreground/70">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
              <Link to="/join">
                Start Selling Today <Rocket className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-primary-foreground/60 mt-4 text-sm">
              Free to join • No monthly fees • Start in minutes
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start Shopping?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Browse through our curated collection of stores and find exactly what you're looking
              for.
            </p>
            <Button size="lg" asChild>
              <Link to="/stores">Browse All Stores</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
